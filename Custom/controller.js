let EDSFormats = {};
let EDSData = {};
let EDSImages = {};
let EDSExtras = {};

let screenWidth = 146,
    screenHeight = 40;

let frontEDSWidth = 144;
let frontEDSHeight = 16;

let screenMatrix,
    screenCanvas,
    screenCanvasContext,

    innerDisplay,
    innerDisplayCanvas = document.createElement('canvas'),
    innerDisplayCanvasContext = innerDisplayCanvas.getContext('2d');

let currentCanvasData = null;

let canvasScale = 51; // DAMMIT SAFARI YOURE A NUTCASE

let code = [0, 1, 1, 7];
let extra = [0, 0];

let inputMode = 'Dest';

let idleTimeout = 0;

let keyTimeout = 0;

let operator = 'SMRT';

function setDisplayText(lines) {
    screenMatrix.onBeginDraw();
    lines.forEach((line, i) => {
        screenMatrix.drawText(new TextObject(line, Font.fromNameString('Mobitec-6:5'), new Position(0, i * 10 + 2), 1));
    });
    screenMatrix.onEndDraw();
}

function drawFrame(text) {
    screenMatrix.onBeginDraw();

    screenMatrix.drawText(new TextObject(text, Font.fromNameString('MobitecScreen-8:5'), new Position(0, 2), 1));
    matrixPrimitives.strokeRectangle(screenMatrix, 0, 18, 144 + 2, 16 + 2);

    screenMatrix.onEndDraw();
}

function parse(code, extraCode, extraFirst) {
    if (!EDSData[operator][code]) return null;
    if (!EDSExtras[operator][extraCode] && extraFirst) return null;

    let extraData;

    let data = parseFormat(EDSFormats[operator], EDSData[operator][code].front, EDSImages[operator], innerDisplay);
    if (!!EDSExtras[operator][extraCode])
        extraData = parseFormat(EDSFormats[operator], EDSExtras[operator][extraCode].front, EDSImages[operator], innerDisplay);

    if (extraData) {
        if (extraFirst)
            data.pages = extraData.pages.concat(data.pages);
        else
            data.pages = data.pages.concat(extraData.pages);

        data.scrollSpeed = data.scrollSpeed === -1 ? 3000 : data.scrollSpeed;
    }

    return data;
}

function keyPress(num) {
    let d = num / Math.abs(num);
    let currentCode = inputMode === 'Dest' ? code : extra;

    let index = currentCode.length - Math.abs(num);

    if (d === 1 && currentCode[index] + 1 === 10) currentCode[index] = -1;
    else if (d === -1 && currentCode[index] - 1 === -1) currentCode[index] = 10;

    currentCode[index] += d;

    setPreviewCode(code, extra, inputMode === 'Extra');
}

function setPreviewCode(code, extra, extraFirst) {
    drawFrame(inputMode + ': ' + (inputMode === 'Dest' ? code : extra).join(''));
    let parsed = parse(code.join('')*1+'', extra.join('')*1+'', extraFirst);
    render(parsed, innerDisplay);
}

function setupKey(element, short, long) {
    let pressStart;

    function down(e) {
        e.preventDefault();
        pressStart = performance.now();
    }

    function up(e) {
        e.preventDefault();
        let pressTime = performance.now() - pressStart;

        if (pressTime < 500) {
            short();
        } else {
            if (long) long();
            else short();
        }
    }

    let mobile = navigator.userAgent.toLowerCase().includes('mobile')

    if (mobile) element.addEventListener('touchstart', down);
    else element.addEventListener('mousedown', down);

    if (mobile) {
        element.addEventListener('touchend', up);
        element.addEventListener('touchleave', up);
        element.addEventListener('touchcancel', up);
    } else element.addEventListener('mouseup', up);
}

function toggleDisplayInput() {
    if (inputMode == 'Dest') inputMode = 'Extra';
    else inputMode = 'Dest';

    setPreviewCode(code, extra, inputMode === 'Extra');
}

function setup() {
    for (let p = 0; p <= 3; p++) {
        let place = Math.pow(10, p);
        let pressStart;

        let shortPressUp = keyPress.bind(null, p + 1);
        let shortPressDown = keyPress.bind(null, -p - 1);
        let longHoldUp = undefined;
        let longHoldDown = undefined;

        if (place === 1000) {
            longHoldDown = toggleDisplayInput;
            shortPressDown = shortPressDown;

            longHoldUp = () => {};
        }

        setupKey(document.getElementById(place + '-up'), shortPressUp, longHoldUp);
        setupKey(document.getElementById(place + '-down'), shortPressDown, longHoldDown);
    }

    setPreviewCode(code, extra);
}

function startup() {
    var textSets = [
        ['Power: Sufficient', 'LAWO Displays', 'Luminator Tech', 'TOPFORM CU2', 1999],
        ['SYSTEM CHECK...', 'CHECKING CONTROLLER...', 2000],
        ['SYSTEM CHECK...', 'CONTROLLER: Ok', 'CHECKING DATA...', 2000],
        ['SYSTEM CHECK...', 'CONTROLLER: Ok', 'DATA: Ok', 'CHECKING SIGNS...', 2000],
        ['Locating Signs...', 'Sign 1:', 'Sign 2:', 'Sign 3:', 2000],
        ['Locating Signs...', 'Sign 1: NOT FOUND', 'Sign 2:', 'Sign 3:', 1000],
        ['Locating Signs...', 'Sign 1: NOT FOUND', 'Sign 2: NOT FOUND', 'Sign 3:', 2000],
        ['Locating Signs...', 'Sign 1: NOT FOUND', 'Sign 2: NOT FOUND', 'Sign 3: NOT FOUND', 2000],
        ['SYSTEM CHECK...', 'CONTROLLER: Ok', 'DATA: Ok', 'SIGNS: NOT FOUND!', 2000],
        ['Signs Not Found!', 'Preview only!', 'Continue -5-', '   v Abort and Check', 1000],
        ['Signs Not Found!', 'Preview only!', 'Continue -4-', '   v Abort and Check', 1000],
        ['Signs Not Found!', 'Preview only!', 'Continue -3-', '   v Abort and Check', 1000],
        ['Signs Not Found!', 'Preview only!', 'Continue -2-', '   v Abort and Check', 1000],
        ['Signs Not Found!', 'Preview only!', 'Continue -1-', '   v Abort and Check', 1000],
        ['Signs Not Found!', 'Preview only!', 'Continue -0-', '   v Abort and Check', 1000],
        ['Proceeding to boot...', 2000],
        ['Boot Check Complete', 'Loading Selected Boot Code', 'Version 190220', 'Preview of Data only', 2500],
    ];

    let currentDelay = 0;

    textSets.forEach((lines, index) => {
        setTimeout(() => {
            setDisplayText(lines.slice(0, -1));
        }, currentDelay);
        currentDelay += lines.slice(-1)[0];
    });

    setTimeout(() => {
        setup();
    }, currentDelay);
}

function hookDisplay(display) {
    display.onEndDraw = function () {
        display.matrix.onEndDraw();

        let imageData = innerDisplayCanvasContext.getImageData(0, 0, innerDisplayCanvas.width, innerDisplayCanvas.height);
        screenCanvasContext.putImageData(imageData, 1 * canvasScale, 19 * canvasScale);

        currentCanvasData = imageData;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    screenCanvas = document.getElementById('screen-canvas');
    screenCanvasContext = screenCanvas.getContext('2d');

    screenMatrix = new LEDMatrix(screenWidth, screenHeight, screenCanvas, CanvasBasedLEDMatrix, canvasScale);
    innerDisplay = new LEDMatrix(frontEDSWidth, frontEDSHeight, innerDisplayCanvas, CanvasBasedLEDMatrix, canvasScale);

    hookDisplay(innerDisplay);
    startup();

    setPreviewCode(code, extra);
})
