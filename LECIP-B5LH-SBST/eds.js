window.frontEDS = null; window.internalPIDS = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

let frontEDSWidth = 192;
let internalPIDSWidth = 160;

let edsHeight = 24;
let internalPIDSHeight = 32;

function generateLEDCssCode() {
    let cssData =
`
    #front-eds .led {
        width: ${Math.ceil(window.innerWidth * 0.004)}px;
        height: ${Math.ceil(window.innerWidth * 0.004)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.004)}px;
    }

    #internal-pids .led {
        width: ${Math.ceil(window.innerWidth * 0.005)}px;
        height: ${Math.ceil(window.innerWidth * 0.005)}px;
        border-radius: ${Math.ceil(window.innerWidth * 0.005)}px;
    }

    #front-eds {
        width: ${frontEDSWidth * Math.ceil(window.innerWidth * 0.004)}px;
        grid-template-columns: repeat(${frontEDSWidth}, ${Math.ceil(window.innerWidth * 0.004)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.002)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * 0.004) - 1}px;
    }


    #internal-pids {
        width: ${internalPIDSWidth * Math.ceil(window.innerWidth * 0.005)}px;
        grid-template-columns: repeat(${internalPIDSWidth}, ${Math.ceil(window.innerWidth * 0.005)}px);
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

function setCode(code, operator) {
    if (!EDSData[operator][code]) return;

    let frontDisplay = EDSData[operator][code][1].front;
    let parsedFront = parseFormat(EDSFormats[operator], frontDisplay, EDSImages[operator], frontEDS);
    render(parsedFront, frontEDS);

    let pidsDisplay = EDSData[operator][code][1].pids;
    let parsedPIDS = parseFormat(EDSFormats[operator], pidsDisplay, EDSImages[operator], internalPIDS);
    render(parsedPIDS, internalPIDS);
}

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    frontEDS = new LEDMatrix(frontEDSWidth, edsHeight, document.getElementById('front-eds'));
    internalPIDS = new LEDMatrix(internalPIDSWidth, internalPIDSHeight, document.getElementById('internal-pids'));

    setCode(1111, 'SBST');
});

window.addEventListener('resize', generateLEDCssCode);

window.addEventListener('load', () => {
    document.getElementById('code').addEventListener('input', () => {
        let code = document.getElementById('code').value;

        setCode(code, 'SBST');
    });
});
