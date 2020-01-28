(function(exports){

    let strokeColour = 'orange';
    let fillColour = 'orange'

    exports.matrixPrimitives = {
        setStrokeColour: colour => {
            strokeColour = colour || 'orange';
        },
        setFillColour: colour => {
            fillColour = colour || 'orange';
        },

        strokeRectangle: (matrix, x, y, width, height) => {
            for (let dx = 0; dx < width; dx++) {
                matrix.matrix.setLEDState(x + dx, y, !matrix.inverted, strokeColour);
                matrix.matrix.setLEDState(x + dx, y + height - 1, !matrix.inverted, strokeColour);
            }

            for (let dy = 0; dy < height; dy++) {
                matrix.matrix.setLEDState(x, y + dy, !matrix.inverted, strokeColour);
                matrix.matrix.setLEDState(x + width - 1, y + dy, !matrix.inverted, strokeColour);
            }
        },
        fillRectangle: (matrix, x, y, width, height) => {
            matrix.inverted = true;
            matrix.clearRectangle(x, y, width, height, fillColour);
            matrix.inverted = false;
        },

        strokeCircle: (matrix, x, y, radius) => {
            // let centreX = x + radius, centreY = y + radius;

            for (let t = 0; t < 2 * 3.14159; t += 0.0005) {
                let dx = Math.round(x + radius * Math.cos(t));
                let dy = Math.round(y + radius * Math.sin(t));

                matrix.matrix.setLEDState(dx, dy, !matrix.inverted, strokeColour);
            }
        },

        fillCircle: (matrix, x, y, radius) => {
            let mins = {};
            let maxs = {};

            for (let t = 0; t < 2 * 3.14159; t += 0.0005) {
                let dx = Math.round(x + radius * Math.cos(t));
                let dy = Math.round(y + radius * Math.sin(t));

                if (!mins[dx]) mins[dx] = maxs[dx] = dy;
                else {
                    if (dy < mins[dx]) mins[dx] = dy;
                    else if (dy > maxs[dx]) maxs[dx] = dy;
                }
            }

            let minX = Object.keys(mins).map(x => x*1).sort((a, b) => a - b)[0];
            let maxX = Object.keys(mins).map(x => x*1).sort((a, b) => a - b).slice(-1)[0];

            let minY = Object.values(mins).map(y => y*1).sort((a, b) => a - b)[0];
            let maxY = Object.values(maxs).map(y => y*1).sort((a, b) => a - b).slice(-1)[0];

            matrix.clearRectangle(minX, minY, maxX - minX + 1, maxY - minY + 1, fillColour);
            console.log(minX, minY, maxX - minX + 1, maxY - minY + 1, fillColour)

            Object.keys(mins).forEach(rowX => {
                rowX *= 1;

                for (let y = mins[rowX]; y <= maxs[rowX]; y++) {
                    matrix.matrix.setLEDState(rowX, y, !matrix.inverted, fillColour)
                }
            });
        }

}

}(typeof exports === 'undefined' ? window : exports));
