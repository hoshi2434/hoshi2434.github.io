window.frontEDS = null; window.rearEDS = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

let frontEDSWidth = 160;
let rearEDSWidth = 40;

let edsHeight = 20;

let ledSize = 0.004;

function generateLEDCssCode() {
    let cssData =
`
    .led {
        width: ${Math.ceil(window.innerWidth * ledSize)}px;
        height: ${Math.ceil(window.innerWidth * ledSize)}px;
        border-radius: ${Math.ceil(window.innerWidth * ledSize)}px;
    }

    #front-eds {
        width: ${frontEDSWidth * Math.ceil(window.innerWidth * ledSize)}px;
        grid-template-columns: repeat(${frontEDSWidth}, ${Math.ceil(window.innerWidth * ledSize)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0012)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * ledSize) - 1}px;
    }
    
    #rear-eds {
        width: ${rearEDSWidth * Math.ceil(window.innerWidth * ledSize)}px;
        grid-template-columns: repeat(${rearEDSWidth}, ${Math.ceil(window.innerWidth * ledSize)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0012)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * ledSize) - 1}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));
    rearEDS = new LEDMatrix(rearEDSWidth, edsHeight, document.getElementById('rear-eds'));
});

window.addEventListener('resize', generateLEDCssCode);
