window.topRow = null; window.bottomRow = null;

let EDSFormats = {};
let EDSData = {};
let EDSImages = {};

let width = 130;

let edsHeight = 7;

let ledSize = 0.007;

function generateLEDCssCode() {
    let cssData =
`
    .led {
        width: ${Math.ceil(window.innerWidth * ledSize)}px;
        height: ${Math.ceil(window.innerWidth * ledSize)}px;
        border-radius: ${Math.ceil(window.innerWidth * ledSize)}px;
    }

    .pids {
        width: ${width * Math.ceil(window.innerWidth * ledSize)}px;
        grid-template-columns: repeat(${width}, ${Math.ceil(window.innerWidth * ledSize)}px);
        grid-row-gap: ${Math.ceil(window.innerWidth * 0.0025)}px;
        grid-auto-rows: ${Math.ceil(window.innerWidth * ledSize) - 1}px;
    }
`;

    document.getElementById('led-style').textContent = cssData;
}

function formatTime() {
    let now = new Date();
    let hours = now.getHours() % 12;
    if (hours === 0) hours = 12;
    let minutes = [0, ...now.getMinutes().toString()].slice(-2).join('');
    let seconds = [0, ...now.getSeconds().toString()].slice(-2).join('');

    return `${hours}:${minutes}:${seconds}`;
}

function formatDate() {
    let now = new Date();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${now.getDate()} ${months[now.getMonth()]}`;
}

function getDayOfWeek() {
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']; // ._.
    return days[new Date().getDay()];
}

let font75 = Font.fromNameString('Metro-PIDS-7:5')

document.addEventListener('DOMContentLoaded', () => {
    generateLEDCssCode();

    topRow = new LEDMatrix(width, edsHeight, document.getElementById('top-pids'));
    bottomRow = new LEDMatrix(width, edsHeight, document.getElementById('bottom-pids'));

    draw();
    legacyDrawText(bottomRow, 'Welcome to SBS Transit', 'Mobitec-7:4', 1, 0, 0);
    legacyDrawText(bottomRow, '', 'Mobitec-7:5:3', 1, 102, 0);
});

function draw() {
    topRow.clearRectangle(0, 0, 120, 7);
    legacyDrawText(topRow, formatTime(), null, 1, 0, 0);
    legacyDrawText(topRow, formatDate(), null, 1, 50, 0);

    let day = new TextObject(getDayOfWeek(), font75, new Position(0, 0), 1);
    day.position.x = 125 - day.width - 3;
    topRow.drawText(day);
}

setTimeout(() => {
    draw();
    setInterval(draw, 1000);
}, 1000 - (+new Date() % 1000));


window.addEventListener('resize', generateLEDCssCode);

function legacyDrawText(matrix, text, font, spacing, x, y) {
    matrix.drawText(new TextObject(text, font ? Font.fromNameString(font) : font75, new Position(x, y), spacing));
}
