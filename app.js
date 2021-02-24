var number1, number2, operator;

var result = undefined;

function clean() {
    result = undefined;
    document.getElementById("result").innerHTML = 0;
}

function add() {
    operator = "+";
    number1 = result;
    result = undefined;
    document.getElementById("result").innerHTML = 0;
}

function subtract() {
    operator = "-";
    number1 = result;
    result = undefined;
    document.getElementById("result").innerHTML = 0;
}

function multiple() {
    operator = "*";
    number1 = result;
    result = undefined;
    document.getElementById("result").innerHTML = 0;
}

function divide() {
    operator = "/";
    number1 = result;
    result = undefined;
    document.getElementById("result").innerHTML = 0;
}

function zero() {
    (result === undefined || result == "0") ? result = "0" : result += "0";
    document.getElementById("result").innerHTML = result;
}

function one() {
    (result === undefined || result == "0") ? result = "1" : result += "1";
    document.getElementById("result").innerHTML = result;
}

function two() {
    (result === undefined || result == "0") ? result = "2" : result += "2";
    document.getElementById("result").innerHTML = result;
}

function three() {
    (result === undefined || result == "0") ? result = "3" : result += "3";
    document.getElementById("result").innerHTML = result;
}

function four() {
    (result === undefined || result == "0") ? result = "4" : result += "4";
    document.getElementById("result").innerHTML = result;
}

function five() {
    (result === undefined || result == "0") ? result = "5" : result += "5";
    document.getElementById("result").innerHTML = result;
}

function six() {
    (result === undefined || result == "0") ? result = "6" : result += "6";
    document.getElementById("result").innerHTML = result;
}

function seven() {
    (result === undefined || result == "0") ? result = "7" : result += "7";
    document.getElementById("result").innerHTML = result;
}

function eight() {
    (result === undefined || result == "0") ? result = "8" : result += "8";
    document.getElementById("result").innerHTML = result;
}

function nine() {
    (result === undefined || result == "0") ? result = "9" : result += "9";
    document.getElementById("result").innerHTML = result;
}

function dot() {
    if (result === undefined || result == "0") {
        result = "0.";
    } else if (result.indexOf(".") === -1) {
        result += ".";
    }
    
    document.getElementById("result").innerHTML = result;
}


function showAnswer() {
    number2 = result;

    switch (operator) {
        case "+" :
            result = Number(number1) + Number(number2);
            break;
        case "-" :
            result = number1 - number2;
            break;
        case "/" :
            result = number1 / number2;
            break;
        case "*" :
            result = number1 * number2;
            break;
    }

    document.getElementById("result").innerHTML = result;
}