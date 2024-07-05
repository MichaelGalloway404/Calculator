let display = document.querySelector('p');
let calculation = "";
let displayedValue = "";
let newEquation = false;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let oneButton = document.querySelector('.one');
let twoButton = document.querySelector('.two');
let threeButton = document.querySelector('.three');
let fourButton = document.querySelector('.four');
let fiveButton = document.querySelector('.five');
let sixButton = document.querySelector('.six');
let sevenButton = document.querySelector('.seven');
let eightButton = document.querySelector('.eight');
let nineButton = document.querySelector('.nine');
let zeroButton = document.querySelector('.zero');

let plusButton = document.querySelector('.plus');
let subButton = document.querySelector('.sub');
let negativeButton = document.querySelector('.negative');
let divideButton = document.querySelector('.division');
let multiplyButton = document.querySelector('.mult');
let modButton = document.querySelector('.mod');

let rightPerensButton = document.querySelector('.rightParentheses');
let leftPerensButton = document.querySelector('.leftParentheses');
let squareButton = document.querySelector('.sqrt');
let powButton = document.querySelector('.pow');

let decimalButton = document.querySelector('.dec');
let equalButton = document.querySelector('.equals');
let clearButton = document.querySelector('.clear');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
oneButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "1";
    displayedValue = displayedValue + "1";
    display.innerHTML = displayedValue;
}
twoButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "2";
    displayedValue = displayedValue + "2";
    display.innerHTML = displayedValue;
}
threeButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "3";
    displayedValue = displayedValue + "3";
    display.innerHTML = displayedValue;
}
fourButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "4";
    displayedValue = displayedValue + "4";
    display.innerHTML = displayedValue;
}
fiveButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "5";
    displayedValue = displayedValue + "5";
    display.innerHTML = displayedValue;
}
sixButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "6";
    displayedValue = displayedValue + "6";
    display.innerHTML = displayedValue;
}
sevenButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "7";
    displayedValue = displayedValue + "7";
    display.innerHTML = displayedValue;
}
eightButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "8";
    displayedValue = displayedValue + "8";
    display.innerHTML = displayedValue;
}
nineButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "9";
    displayedValue = displayedValue + "9";
    display.innerHTML = displayedValue;
}
zeroButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "0";
    displayedValue = displayedValue + "0";
    display.innerHTML = displayedValue;
}
modButton.onclick = function(){
    newEquation = false;
    calculation = calculation + "%";
    displayedValue = displayedValue + "%";
    display.innerHTML = displayedValue;
}
powButton.onclick = function(){
    newEquation = false;
    calculation = calculation + "^";
    displayedValue = displayedValue + "^";
    display.innerHTML = displayedValue;
}
plusButton.onclick = function(){
    newEquation = false;
    calculation = calculation + "+";
    displayedValue = displayedValue + "+";
    display.innerHTML = displayedValue;
}
decimalButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + ".";
    displayedValue = displayedValue + ".";
    display.innerHTML = displayedValue;
}
subButton.onclick = function(){
    newEquation = false;
    if(calculation.length <= 0){calculation = calculation + "$";}
    else{calculation = calculation + "-";}
    displayedValue = displayedValue + "-";
    display.innerHTML = displayedValue;
}
negativeButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "$";
    displayedValue = displayedValue + "(-)";
    display.innerHTML = displayedValue;
}
divideButton.onclick = function(){
    // if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "/";
    displayedValue = displayedValue + "&#247;";
    display.innerHTML = displayedValue;
}
multiplyButton.onclick = function(){
    // if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "*";
    displayedValue = displayedValue + "x";
    display.innerHTML = displayedValue;
}
squareButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "&";
    displayedValue = displayedValue + "&#8730;";
    display.innerHTML = displayedValue;
}
leftPerensButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + ")";
    displayedValue = displayedValue + ")";
    display.innerHTML = displayedValue;
}
rightPerensButton.onclick = function(){
    if(newEquation === true){clearEquation();}
    newEquation = false;
    calculation = calculation + "(";
    displayedValue = displayedValue + "(";
    display.innerHTML = displayedValue;
}
clearButton.onclick = function(){
    display.innerHTML = "0";
    calculation = "";
    displayedValue = "";
    newEquation = false;
}
equalButton.onclick = function (){
    calculation =  "(" + calculation;
    calculation = calculation + ")";
    display.innerHTML = (extractFromParentheses(stringToArray(calculation)));
    calculation = display.innerHTML;
    if(calculation[0]==="-"){calculation = "$"+calculation.slice(1,calculation.length)}
    displayedValue = display.innerHTML;
    newEquation = true;

}
function clearEquation(){
    display.innerHTML = "0";
    calculation = "";
    displayedValue = "";
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// returns a true if value is a number
function isNumber(value) {return !isNaN(Number(value));}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// returns an array from a string splitting numbers and symbols while retaining
// actual numbers ex. ["(","-55",")"] not ["(","-","5","5",")"]
function stringToArray(string){
    let number = "";
    let array = [];
    for(let i=0; i < string.length; i++){
        // if index is a number or decimal or $(representing a negative number)
        if(isNumber(string[i]) || string[i] === "$" || string[i] === "." ){
            // concatenate into a full number ex. "55" not "5","5"
            number = number + string[i];
        }
        // if index is anything other than a number
        if(!isNumber(string[i]) && string[i] !== "$" && string[i] !== "."){
            // if there is a number to be stored add it to array
            if(number.length > 0){array.push(number);}
            // clear number
            number = "";
            // adds symbol to array
            array.push(string[i]);
        }
    }
    return array;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// extracts equations from Parentheses, sends them to computeExpr until final answer is computed and returned
function extractFromParentheses(array) {
    let stack = [];
    let tempExpression = []
    // if array is not enclosed by parentheses add opening/closing parentheses
    if(array[0] !== "("){array.unshift("(");array.push(")");}
    loop1: for (let i = 0; i < array.length; i++) {
        // if for example 8(3) --> should be 8*3
        if(array[i] === "(" && i !== 0){if(isNumber(array[i-1])){stack.push("*");}}
        // if for example (3)8 --> should be 3*8
        if(array[i] === ")" && i !== array.length-1){if(isNumber(array[i+1])){stack.push("*");}}
        // if for example 8 squareRoot(3) --> should be 8 * squareRoot(3) (as represented by &)
        if(array[i] === "&" && i !== 0){if(isNumber(array[i-1])){stack.push("*");}}
        // build  stack until closing parentheses is hit
        if (array[i] !== ")") {
            stack.push(array[i]);
        }
        // is closing parentheses is hit or hit the end of expression
        if(array[i] === ")" || i === array.length-1){
            // continue until stack is empty
            while (stack[0] !== undefined) {
                // take any stack item that is not yet and expression enclosed by parentheses
                if(stack[stack.length-1] !== "("){
                    let stackItem = stack.pop();
                    // add it to front of temp expression
                    tempExpression.unshift(stackItem);
                }
                // if we have an expression enclosed by parentheses
                if(stack[stack.length-1] === "("){
                    // remove "(" from stack
                    stack.pop();
                    // compute expression in tempExpress and put it on stack
                    stack.push(computeExpr(tempExpression));
                    // clear tempExpression
                    tempExpression = [];
                    // jump to for-loop to read more symbols and retain any unused "(" still in stack
                    continue loop1;
                }

            }
        }
    }
    return stack;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function computeExpr(arr){
    let stack = [];
    // NEGATIVES
    for(let i=0; i < arr.length; i++){
        // if current index is not the operator we need add index value to stack
        if(arr[i][0] !== "$"){stack.push(arr[i]);}
        if(arr[i][0] === "$"){
            // if it is a negative symbol by itself multiply what ever is to the right by -1
            if(arr[i].length === 1){stack.push(-1);stack.push("*");}
            else {
                // grab the whole number after "$"
                let a = arr[i].slice(1,arr[i].length);
                // make the number negative
                let answer = 0 - Number(a);
                // place on stack
                stack.push(answer);
            }
        }
    }
    arr = stack.slice(0,stack.length);
    stack = [];
    // SQUARE-ROOTS
    for(let i=0; i < arr.length; i++){
        // if current index is not the operator we need add index value to stack
        if(arr[i] !== "&"){stack.push(arr[i]);}
        if(arr[i] === "&"){
            // compute the square-root of number after "&" symbol
            let answer = Math.sqrt(Number(arr[i+1]));
            stack.push(answer);
            i += 1; // skip current index (as to not add the current operator to the stack)
        }
    }
    stack = operation(stack,"^");// EXPONENTS
    stack = operation(stack,"%");// MODULUS
    stack = operation(stack,"*");// MULTIPLICATION
    stack = operation(stack,"/");// DIVISION
    stack = operation(stack,"+");// ADDITION
    stack = operation(stack,"-");// SUBTRACTION
    return stack;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function to perform an operation consisting of 2 operands(A & B) of the form (operandLeft operator operandRight)
// -> returns an array of only the specified operator calculations computed
function operation(stack, operator){
    let arr = stack.slice(0,stack.length);
    stack = [];
    for(let i=0; i < arr.length; i++){
        // if current index is not the operator we need add index value to stack
        if(arr[i] !== operator){stack.push(arr[i]);}
        if(arr[i] === operator){
            // grab left operand
            let a = stack.pop();
            // MODULUS
            if(operator === "%"){
                // compute (operandLeft operator operandRight)
                let answer = Number(a) % Number(arr[i+1]);
                // place back on stack
                stack.push(answer);
            }
            // EXPONENTS
            if(operator === "^"){
                let answer = Math.pow(Number(a), Number(arr[i+1]));
                stack.push(answer);
            }
            // MULTIPLICATION
            if(operator === "*"){
                let answer = Number(a) * Number(arr[i+1]);
                stack.push(answer);
            }
            // DIVISION
            if(operator === "/"){
                let answer = Number(a) / Number(arr[i+1]);
                stack.push(answer);
            }
            // ADDITION
            if(operator === "+"){
                let answer = Number(a) + Number(arr[i+1]);
                stack.push(answer);
            }
            // SUBTRACTION
            if(operator === "-"){
                let answer = Number(a) - Number(arr[i+1]);
                stack.push(answer);
            }
            // skip current index (as to not add the current operator to the stack)
            i += 1;
        }
    }
    return stack;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
