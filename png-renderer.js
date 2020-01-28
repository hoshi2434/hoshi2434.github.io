#!/usr/bin/env node

const { LEDMatrix, CanvasBasedLEDMatrix } = require('./matrix');
const MatrixPrimitives = require('./matrix-primitives');
const Fonts = require('./fonts');
const EDSRenderer = require('./eds-renderer');

const { createCanvas } = require('canvas');
const path = require('path');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2), {
    string: ['code']
});
const canvas = createCanvas();

global.EDSFormats = {};
global.EDSData = {};
global.EDSImages = {};
global.EDSExtras = {};

Object.keys(MatrixPrimitives).forEach(key => global[key] = MatrixPrimitives[key]);
Object.keys(EDSRenderer).forEach(key => global[key] = EDSRenderer[key]);
Object.keys(Fonts).forEach(key => global[key] = Fonts[key]);

let usageString = `Usage: ./png-renderer.js --width=width --height=height --render=side --dataFile=file --code='code' --out=outFolder`;

function argError() {
    console.error(usageString);
    process.exit(1);
}

let matrixWidth = argv.width,
    matrixHeight = argv.height;

let edsToRender = argv.render;

let dataFile = argv.dataFile;
let traversalCode = argv.code;

let outFolder = argv.out;

if (!matrixWidth || !matrixHeight) argError();
if (!edsToRender) edsToRender = 'front';
if (!dataFile) argError();
if (!traversalCode) argError();
if (!outFolder) argError();

require(path.join(__dirname, dataFile));

class BMPCanvasBasedLEDMatrix extends CanvasBasedLEDMatrix {

    constructor(width, height, canvas, scaleFactor) {
        super(width, height, canvas, scaleFactor);
    }

    onEndDraw() {
        this.buffer.forEach((pixel, n) => {
            let {x, y} = this.flatToTwodim(n, this.width);
            if (pixel) {
                this.context.fillStyle = 'white';
            } else {
                this.context.fillStyle = 'black';
            }

            this.context.fillRect(x * this.scaleFactor, y * this.scaleFactor, this.scaleFactor, this.scaleFactor);
        });
    }

}

let matrix = new LEDMatrix(matrixWidth, matrixHeight, canvas, BMPCanvasBasedLEDMatrix, 1);

let data = EDSData;
let traversalCodePath = traversalCode.split('.');
traversalCodePath.forEach(path => data = data[path]);

let parsed = parseFormat(EDSFormats[traversalCodePath[0]], data[edsToRender], EDSImages[traversalCodePath[0]], matrix);

let pages = parsed.pages;
let i = 0;

function renderAndSave() {
    let page = pages.shift();
    if (!page) process.exit(0);

    matrix.clearRectangle(0, 0, matrix.width, matrix.height);
    matrix.onBeginDraw();
    drawPage(page, matrix);
    matrix.onEndDraw();

    let stream = canvas.createPNGStream();
    savePage(stream, traversalCode, i);
    i++;
}

function savePage(stream, name, i) {
    let out = fs.createWriteStream(path.join(outFolder, `${name}.${i}.png`))
    stream.pipe(out);
    out.on('finish', () => {
        renderAndSave();
    });
}

renderAndSave();
