let currentScreen = 'controller-screen-home';
let currentCode = '0';
let currentScreenCode = '0';
let screenFilter = '';

function setScreen(screenName) {
    let screens = [['controller-screen-home', 'flex', () => {
        screenFilter = '';
    }], ['controller-screen-dest', 'block']];
        ['controller-screen-extra', 'block'];
    screens.forEach(screen => {
        if (screen[0] !== screenName) {
            document.getElementById(screen[0]).style.display = 'none';
        } else {
            document.getElementById(screen[0]).style.display = screen[1];
            if (screen[2]) screen[2]();
            else {
            document.getElementById(screen[0]).style.display = screen[3];
            }
        }
    });

    currentScreen = screenName;
}

function setSelectionItems(items) {
    document.getElementById('dest-table').innerHTML = items.map((item, i) => {
        return `
<div class='dest-table-item'>
<span>${item.code}</span>
<span></span>
<span>${item.displayName}</span>
</div>`;
    }).join('');
}

function getCodes(dataSet) {
    return Object.keys(dataSet[currentOperator]).filter(code => code.startsWith(screenFilter));
}

function drawSelectionScreen(code) {
    let allCodes = getCodes(EDSData);

    let currentCodeIndex = allCodes.indexOf(code);
    if (currentCodeIndex === -1) currentCodeIndex = 0;

    if (currentCodeIndex > allCodes.length - 3) {
        currentCodeIndex = Math.max(allCodes.length - 3, 0);
    }

    let nextThreeCodes = allCodes.slice(currentCodeIndex, currentCodeIndex + 3);
    let screenIndex = nextThreeCodes.indexOf(code);

    nextThreeCodes = nextThreeCodes.map(code => {
        let data = EDSData[currentOperator][code];

        let {displayName} = new FormattingTemplate({displayName: EDSFormats[currentOperator][data.front.renderType].text}, data.front).solveAll();
        if (displayName.text) displayName = displayName.text;

        return {code, displayName};
    });
    
    setSelectionItems(nextThreeCodes);
    if (screenIndex == -1) {
        screenIndex = 0;
        currentScreenCode = nextThreeCodes[0].code;
    }

    document.querySelector(`#dest-table > :nth-child(${screenIndex + 1})`).className = 'dest-table-item table-selected-row';

}
function setExtraSelectionItems(items) {
    document.getElementById('dest-table').innerHTML = items.map((item, i) => {
        return `
<div class='dest-table-item'>
<span>${item.code}</span>
<span></span>
<span>${item.displayName}</span>
</div>`;
    }).join('');
}

function getExtraCodes(dataSet) {
    return Object.keys(dataSet[currentOperator]).filter(code => code.startsWith(screenFilter));
}

function drawExtraSelectionScreen(code) {
    let allCodes = getCodes(EDSExtras);

    let currentCodeIndex = allCodes.indexOf(code);
    if (currentCodeIndex === -1) currentCodeIndex = 0;

    if (currentCodeIndex > allCodes.length - 3) {
        currentCodeIndex = Math.max(allCodes.length - 3, 0);
    }

    let nextThreeCodes = allCodes.slice(currentCodeIndex, currentCodeIndex + 3);
    let screenIndex = nextThreeCodes.indexOf(code);

    nextThreeCodes = nextThreeCodes.map(code => {
        let data = EDSExtras[currentOperator][code];

        let {displayName} = new FormattingTemplate({displayName: EDSFormats[currentOperator][data.front.renderType].text}, data.front).solveAll();
        if (displayName.text) displayName = displayName.text;

        return {code, displayName};
    });
    
    setExtraSelectionItems(nextThreeCodes);
    if (screenIndex == -1) {
        screenIndex = 0;
        currentScreenCode = nextThreeCodes[0].code;
    }

    document.querySelector(`#dest-table > :nth-child(${screenIndex + 1})`).className = 'dest-table-item table-selected-row';

}

function onF1Pressed() {
    if (currentScreen == 'controller-screen-home') {
        setScreen('controller-screen-dest');
        drawSelectionScreen(currentCode);
        currentScreenCode = currentCode;
    }
}

function onF2Pressed() { //Not Working! Still trying to find a way to implement 'extra' feature. I hate my life at this point ._.
    if (currentScreen == 'controller-screen-home') {
        setScreen('controller-screen-extra');
        drawSelectionScreen(extraCode);
        currentExtraScreenCode = extraCode;
    }
}

function onF5Pressed() {
    if (currentScreen == 'controller-screen-home') {
        setScreen('controller-screen-dest');
        drawSelectionScreen(startupCodes);
        currentScreenCode = startupCodes;
    }
}

function onHomePressed() {
    if (currentScreen == 'controller-screen-dest' || 'controller-screen-extra') {
        setScreen('controller-screen-home');
        drawSelectionScreen(currentCode);
        currentScreenCode = currentCodes;
    }
}

function onUpPressed() {
    if (currentScreen !== 'controller-screen-dest') return;
    let allCodes = getCodes(EDSData);

    let currentCodeIndex = allCodes.indexOf(currentScreenCode);
    currentCodeIndex = Math.max(currentCodeIndex - 1, 0);

    currentScreenCode = allCodes[currentCodeIndex];

    drawSelectionScreen(currentScreenCode);
}

function onDownPressed() {
    if (currentScreen !== 'controller-screen-dest') return;
    let allCodes = getCodes(EDSData);

    let currentCodeIndex = allCodes.indexOf(currentScreenCode);
    currentCodeIndex = Math.min(currentCodeIndex + 1, allCodes.length - 1);

    currentScreenCode = allCodes[currentCodeIndex];

    drawSelectionScreen(currentScreenCode);
}

function onCrossPressed() {
    if (currentScreen === 'controller-screen-dest' || 'controller-screen-extra') setScreen('controller-screen-home');
}

function onTickPressed() {
    if (currentScreen === 'controller-screen-dest' || 'controller-screen-extra') {
        setCode(currentScreenCode, currentOperator);
        setScreen('controller-screen-home');
    }
}

function onNumberPressed(number) {
    if (currentScreen === 'controller-screen-dest', 'controller-screen-dest') {
        screenFilter += number;
        drawSelectionScreen(currentScreenCode);
    }
}

window.addEventListener('load', () => {
	document.getElementById('button-home').addEventListener('click', onHomePressed);
    document.getElementById('button-f1').addEventListener('click', onF1Pressed);
    document.getElementById('button-f2').addEventListener('click', onF2Pressed);
    document.getElementById('button-f5').addEventListener('click', onF5Pressed);
    document.getElementById('button-up').addEventListener('click', onUpPressed);
    document.getElementById('button-down').addEventListener('click', onDownPressed);

    document.getElementById('button-no').addEventListener('click', onCrossPressed);
    document.getElementById('button-yes').addEventListener('click', onTickPressed);

    for (let i = 0; i <= 9; i++) {
        document.getElementById('button-' + i).addEventListener('click', onNumberPressed.bind(null, i));
    }
});
