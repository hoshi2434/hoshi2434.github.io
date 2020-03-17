window.frontEDS = null; window.rearEDS = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

let frontEDSWidth = 180;

let edsHeight = 26;

let ledSize = 0.0045;

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
`;

    document.getElementById('led-style').textContent = cssData;
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));

    setCode(77, 'TTSG');
});

window.addEventListener('resize', generateLEDCssCode);

function setCode(code, operator) {
    if (EDSData[operator][code] && EDSData[operator][code][1]) {
        let data = EDSData[operator][code][1];

        let {front, rear} = data;
        let parsedFront = parseFormat(EDSFormats[operator], front, EDSImages[operator], frontEDS);
        render(parsedFront, frontEDS);
    }
}
