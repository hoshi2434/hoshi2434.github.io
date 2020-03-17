window.frontEDS = null; window.controllerPreview = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};
let EDSExtras = {};

let frontEDSWidth = 140;
let edsHeight = 16;

let startupCode = location.hash.slice(1) ? location.hash.slice(1) : '2222';
startupCode = [0,0,0,0,...startupCode].slice(-4).map(e => e*1);

function generateLEDCssCode() {
    let cssData =
`
    .led {
        width: ${Math.ceil(window.innerWidth * 0.006)}px;
        height: ${Math.ceil(window.innerWidth * 0.006)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.006)}px;
    }

    #front-eds {
        width: ${frontEDSWidth * Math.ceil(window.innerWidth * 0.006)}px;
        grid-template-columns: repeat(${frontEDSWidth}, ${Math.ceil(window.innerWidth * 0.006)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.002)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.006) - 1}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));
});

window.addEventListener('resize', generateLEDCssCode);
