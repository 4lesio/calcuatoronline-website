et currentInput = '';
let previousInput = '';
let operator = '';
let resultDisplayed = false;

// Append number to the display
function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = number;
        resultDisplayed = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

// Append decimal point
function appendDecimal(decimal) {
    if (resultDisplayed) {
        currentInput = decimal;
        resultDisplayed = false;
    } else if (!currentInput.includes(decimal)) {
        currentInput += decimal;
    }
    updateDisplay();
}

// Append operator (+, -, *, /, %)
function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

// Update the display field
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

// Calculate the result
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    resultDisplayed = true;
    updateDisplay();
}

// Calculate square root
function calculateSquareRoot() {
    if (currentInput === '') return;
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay();
}

// Calculate trigonometric functions (e.g., sin)
function calculateTrig(func) {
    if (currentInput === '') return;
    let angle = parseFloat(currentInput);
    if (isNaN(angle)) return;

    // Convert angle to radians before using trig functions
    angle = angle * (Math.PI / 180);

    let result;
    switch (func) {
        case 'sin':
            result = Math.sin(angle);
            break;
        // Additional functions (cos, tan) can be added here
        default:
            return;
    }

    currentInput = result.toString();
    updateDisplay();
}