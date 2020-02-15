window.frontEDS = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};
let EDSExtras = {};

let frontEDSWidth = 160;
let edsHeight = 16;

let pixelWidth = 0.009;

function generateLEDCssCode() {
    let cssData =
`
    .led {
        width: ${Math.ceil(window.innerWidth * pixelWidth)}px;
        height: ${Math.ceil(window.innerWidth * pixelWidth)}px;
        border-radius: ${Math.ceil(window.innerWidth * pixelWidth)}px;
    }

    #front-eds {
        width: ${frontEDSWidth * Math.ceil(window.innerWidth * pixelWidth)}px;
        grid-template-columns: repeat(${frontEDSWidth}, ${Math.ceil(window.innerWidth * pixelWidth)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.002)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * pixelWidth) - 1}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

function setCode(code, operator) {
    if (!EDSData[operator][code]) return;

    let frontDisplay = EDSData[operator][code].front;
    let parsedFront = parseFormat(EDSFormats[operator], frontDisplay, EDSImages[operator], frontEDS);
    render(parsedFront, frontEDS);
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'), FlipdotMatrix);
    setCode(2, 'LTVBL');
});

window.addEventListener('resize', generateLEDCssCode);
