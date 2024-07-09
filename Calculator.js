// variable for displaying output on the calculator screen
let display = document.querySelector('p');
// holds the value of the actual calculation sent to the program
let calculation = "";
// hold the calculation that is displayed(will at some points differ from calculation variable)
let displayedValue = "";
// a bool for if the user wishes to use the output as part of a new equation
let newEquation = false;

// loop through each button of class ".calcButton"
for(let i= 0;i<document.querySelectorAll(".calcButton").length;i++){
    // get each individual button
    document.querySelectorAll(".calcButton")[i].addEventListener("click", function (event){
        // send second class name ex. one, plus, ect... to our input handler
        parseInput(event.target.className.split(" ")[1]);
        new Audio("./buttonClick.wav").play();
        // animate the button currently being pressed
        buttonAnimation(event.target);
    });
}
// animates a button by adding/removing a class of pressed
function buttonAnimation(button){
    button.classList.add("pressed");
    setTimeout(function (){button.classList.remove("pressed");},100)
}
// helper function takes in a symbol for calculation and optionally an alt. symbol for user display
function calculateAndDisplay(value, altValue = value){
    calculation = calculation + value;
    // defaults to value ex. 6 => 6 but $ => (-) or * => &#215;
    displayValue(altValue);
    // maintain that we are continuing an equation
    newEquation = false;
}
// helper function to clear and reset calculator
function clearEquation(){
    display.innerHTML = "0";
    calculation = "";
    displayedValue = "";
}
// helper function to show user current equation
function displayValue(value){
    displayedValue = displayedValue + value;
    display.innerHTML = displayedValue;
}
// function to handle witch button is being pressed using buttons class names
function parseInput(button){
    switch (button){
        case "one":
            // if a previous equation has been calculated this prevents one from being tacked on
            // ex. previous output = 6 and clear button not hit doesn't become 61 just 1 ect...
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("1");
            break
        case "two":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("2");
            break;
        case "three":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("3");
            break;
        case "four":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("4");
            break;
        case "five":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("5");
            break;
        case "six":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("6");
            break;
        case "seven":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("7");
            break;
        case "eight":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("8");
            break;
        case "nine":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("9");
            break;
        case "zero":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("0");
            break;
        case "dec":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay(".");
            break;
        case "mod":
            calculateAndDisplay("%");
            break;
        case "mult":
            // send "/" calculator and "&#215;" to display
            calculateAndDisplay("*","&#215;"); // &times
            break;
        case "division":
            calculateAndDisplay("/","&#247;"); // &divide
            break;
        case "plus":
            calculateAndDisplay("+");
            break;
        case "pow":
            calculateAndDisplay("^");
            break;
        case "sub":
            // handles if user starts and equation with subtraction, will turn it into a negative number
            if(calculation.length <= 0){ calculateAndDisplay("$","(-)"); }
            else{
                // if user uses a minus symbol rather negative in the start of parentheses ex. (-3) vs ((-)3) both === -3
                if(calculation.indexOf("(") === calculation.length-1){
                    calculateAndDisplay("$","(-)");
                }
                // otherwise normal subtraction
                else{ calculateAndDisplay("-"); }
            }
            break;
        case "negative":
            if(newEquation === true){clearEquation();}
            // our calculator reads "$" as negative
            calculateAndDisplay("$","(-)");
            break;
        case "sqrt":
            if(newEquation === true){clearEquation();}
            // our calculator reads "&" as the square-root of a number
            calculateAndDisplay("&","&#8730;");
            break;
        case "leftParentheses":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay(")");
            break;
        case "rightParentheses":
            if(newEquation === true){clearEquation();}
            calculateAndDisplay("(");
            break;
        case "equals":
            // calculator iterates through parentheses from left to right, this helps for when user doesn't use any parentheses
            calculation =  "(" + calculation + ")";
            // send input to stringToArray witch splits strings into symbols and whole numbers "55" vs "5","5", then to calculator.
            display.innerHTML = (extractFromParentheses(stringToArray(calculation)));
            // output will be a number or NaN
            calculation = display.innerHTML;
            // replace NaN with user-friendly ERROR
            if(isNaN(calculation)){clearEquation(); display.innerHTML = "ERROR";}
            // if the resulting calculation is negative switch the symbols for if we wish to use output in a continued equation
            if(calculation[0] === "-"){calculation = "$" + calculation.slice(1,calculation.length)}
            displayedValue = display.innerHTML;
            // alert appropriate buttons an equation has been computed, and return value can be used or thrown out
            newEquation = true;
            // always display at least "0"
            if(display.innerHTML === ""){display.innerHTML = "0";}
            break;
        case "clear":
            clearEquation();
            break;
    }
}

// returns a true if value is a number
function isNumber(value) {return !isNaN(Number(value));}

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

// extracts equations from Parentheses, sends them to computeExpr until final answer is computed and returned
function extractFromParentheses(array) {
    let stack = [];
    let tempExpression = []
    // if array is not enclosed by parentheses add opening/closing parentheses
    if(array[0] !== "("){array.unshift("(");array.push(")");}
    loop1: for (let i = 0; i < array.length; i++) {
        // if for example 8(3) --> should be 8*3, also check if right hand number is negative and if so slice out the "$" sign
        if(array[i] === "(" && i !== 0){
            if(isNumber(array[i-1]) || array[i-1].slice(1,array[i-1].length)){
                stack.push("*");
            }
        }
        // if for example (3)8 --> should be 3*8 and (3)(-)8 --> should be 3*(-8)
        if(i !== 0){if(array[i-1] === ")" && (isNumber(array[i]) || array[i][0] === "$")){stack.push("*");}}
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
