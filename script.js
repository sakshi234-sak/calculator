
let display = document.getElementById('display');
let currentInput = '';
let currentFunction = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    display.value = currentInput;
}

function appendFunction(func) {
    currentFunction = func;
    currentInput += func + '(';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = currentInput;
}

function calculateResult() {
    
    try {
        // Handle functions like sin, cos, tan, etc.
    
        if (currentFunction) {
            let funcStart = currentInput.indexOf('(');
            let funcEnd = currentInput.indexOf(')');
            let value = currentInput.slice(funcStart + 1, funcEnd);

            switch (currentFunction) {
    
                case 'sin':
                    currentInput = Math.sin(parseFloat(value)).toString();
                    break;
    
                    case 'cos':
                    currentInput = Math.cos(parseFloat(value)).toString();
                    break;
    
                    case 'tan':
                    currentInput = Math.tan(parseFloat(value)).toString();
                    break;
    
                    case 'pow':
                    let base = parseFloat(value);
                    currentInput = (base * base).toString();
                    break;
    
                    case 'sqrt':
                    currentInput = Math.sqrt(parseFloat(value)).toString();
                    break;
            }
    
            display.value = currentInput;
            currentFunction = ''; // Reset after use
    
        } 
        
        else {
            // Handle basic arithmetic operations
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        }
    } 
    
    catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
