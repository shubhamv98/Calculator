function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function percentage() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = currentValue / 100;
}

function deleteLast() {
    const currentExpression = document.getElementById('display').value;
    document.getElementById('display').value = currentExpression.slice(0, -1);
}

function squareRoot() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sqrt(currentValue);
}

function cubeRoot() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(currentValue, 1 / 3);
}