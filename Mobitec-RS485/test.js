const data = require('./data');

const header = new Buffer([0xFF, 0x06, 0xA2]);
const feChecksum = new Buffer([0xFE, 0x00]);
const ffChecksum = new Buffer([0xFE, 0x01]);
const tail = new Buffer([0xFF]);

function getChecksum(data) {
    let checksum = data.slice(1).reduce((acc, e) => acc + e, 0) & 0xFF;

    if (checksum == 0xFE) {
        return feChecksum;
    } else if (checksum == 0xFF) {
        return ffChecksum;
    } else return new Buffer([checksum]);
}

function writeText(text) {
    let data = Buffer.concat([header, new Buffer(text)]);

    return Buffer.concat([data, getChecksum(data), tail]);
}

console.log(writeText('CHOA CHU KANG via').toString());
