window.frontEDS = null; window.rearEDS = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

let frontEDSWidth = 160;
let rearEDSWidth = 40;

let edsHeight = 19;

function generateLEDCssCode() {
    let cssData =
`
    .led {
        width: ${Math.ceil(window.innerWidth * 0.005)}px;
        height: ${Math.ceil(window.innerWidth * 0.005)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.005)}px;
    }

    #front-eds {
        width: ${frontEDSWidth * Math.ceil(window.innerWidth * 0.005)}px;
        grid-template-columns: repeat(${frontEDSWidth}, ${Math.ceil(window.innerWidth * 0.005)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0025)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.005) - 1}px;
    }

    #rear-eds .led {
        width: ${Math.ceil(window.innerWidth * 0.0065)}px;
        height: ${Math.ceil(window.innerWidth * 0.0065)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.0065)}px;
    }

    #rear-eds {
        width: ${rearEDSWidth * Math.ceil(window.innerWidth * 0.008)}px;
        grid-template-columns: repeat(${rearEDSWidth}, ${Math.ceil(window.innerWidth * 0.008)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0006)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.008)}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));
    // rearEDS = new LEDMatrix(rearEDSWidth, edsHeight, document.getElementById('rear-eds'));
});

window.addEventListener('resize', generateLEDCssCode);
