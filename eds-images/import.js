let png = require('pngjs'),
fs = require('fs');

const PNG = png.PNG;
let file = process.argv[2];
console.log(file);


fs.createReadStream(file).pipe(new PNG({filterType: 4})).on('parsed', function() {
    let image = [];
    for (var y = 0; y < this.height; y++) {
        image.push([]);
    }

    for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
            var idx = (this.width * y + x) << 2;
            image[y][x] = this.data[idx] === 255 ? 1 : 0;
        }
    }

    image.map(line => line.join(', ')).forEach(e => console.log(`[${e}],`))
}).on('error', (e) => {
    console.log(file, e)
});
