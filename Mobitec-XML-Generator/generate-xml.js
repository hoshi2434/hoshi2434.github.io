#!/usr/bin/env node

const { LEDMatrix, BufferedMatrix } = require('../matrix')
const MatrixPrimitives = require('../matrix-primitives')
const Fonts = require('../fonts')
const EDSRenderer = require('../eds-renderer')

const path = require('path')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))

global.EDSFormats = {}
global.EDSData = {}
global.EDSImages = {}
global.EDSExtras = {}

Object.keys(MatrixPrimitives).forEach(key => global[key] = MatrixPrimitives[key])
Object.keys(EDSRenderer).forEach(key => global[key] = EDSRenderer[key])
Object.keys(Fonts).forEach(key => global[key] = Fonts[key])

let usageString = `Usage: ./generate-xml.js --width=width --height=height --render=side --dataFile=file --operator=operator --out=outFile --name=name`

function argError() {
    console.error(usageString)
    process.exit(1)
}

let matrixWidth = argv.width,
    matrixHeight = argv.height

let edsToRender = argv.render

let dataFile = argv.dataFile
let operator = argv.operator

let outFile = argv.out
let name = argv.name

if (!matrixWidth || !matrixHeight) argError()
if (!edsToRender) edsToRender = 'front'
if (!dataFile) argError()
if (!operator) argError()
if (!outFile) argError()
if (!name) argError()

require(path.join(__dirname, dataFile))

let matrix = new LEDMatrix(matrixWidth, matrixHeight, null, BufferedMatrix)

let baseTemplate = fs.readFileSync('./mobitec-template.xml').toString()
let programTemplate = fs.readFileSync('./program-template.xml').toString()
let rotationTemplate = fs.readFileSync('./front-rotation-template.xml').toString()

let data = EDSData[operator]
let codeList = Object.keys(data)
let programsData = ''

codeList.forEach(code => {
  let parsed = parseFormat(EDSFormats[operator], data[code][edsToRender], EDSImages[operator], matrix)

  let pages = parsed.pages
  let allPages = []

  pages.forEach((page, i) => {
    matrix.clearRectangle(0, 0, matrix.width, matrix.height)
    matrix.onBeginDraw()
    drawPage(page, matrix)
    matrix.onEndDraw()

    let graphicData = ''

    for (let x = 0; x < matrixWidth; x++) {
      for (let y = 0; y < matrixHeight; y++) {
        if (matrix.matrix.getLEDState(x, y)) {
          graphicData += `${x},${y},33023,`
        }
      }
    }

    let pageData = rotationTemplate.replace('${page_number}', i)
      .replace('${sign_width}', matrixWidth)
      .replace('${sign_height}', matrixHeight)
      .replace('${image_data}', graphicData.slice(0, -1))

    allPages.push(pageData)
  })

  programsData += programTemplate.replace(/\$\{program_id\}/g, code)
    .replace('${rotations}', allPages.join('\n'))
})

fs.writeFileSync(outFile, baseTemplate
  .replace(/\$\{name\}/g, 'Mobitec-XML: ' + name)
  .replace('${date}', 'Today')
  .replace('${programs}', programsData)
)
