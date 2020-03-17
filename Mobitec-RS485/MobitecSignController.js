const { LEDMatrix, CanvasBasedLEDMatrix } = require('../matrix');
const MatrixPrimitives = require('../matrix-primitives');
const Fonts = require('../fonts');
const EDSRenderer = require('../eds-renderer');

const path = require('path');
const fs = require('fs');
const SerialPort = require('serialport');
const Ready = require('@serialport/parser-ready');
const argv = require('minimist')(process.argv.slice(2));

global.EDSFormats = {};
global.EDSData = {};
global.EDSImages = {};
global.EDSExtras = {};

if (!argv.port) {
    SerialPort.list().then(ports => {
        console.log(`${ports.length} available port${ports.length !== 1 ? 's' : ''}: `)
        ports.forEach(port => {
            let string = port.comName;
            if (port.manufacturer) string += ' (' + port.manufacturer + ')';
            console.log(string);
        });

        console.log('\nUsage: ./MobitecSignController --port=port');
    });
}
