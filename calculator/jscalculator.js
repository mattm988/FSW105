const readline = require("readline-sync");
var num1 = readline.questionInt("Please enter your first number: ");
var num2 = readline.questionInt("Please enter your second number: ");
var operator = readline.question("Please enter the operation you'd like to perform: add, sub, mul, div ");

    function addNumbers(num1, num2){
        return num1 + num2;
    }

    function subtractNumbers(num1, num2){
        return num1 - num2;
    }

    function multiplyNumbers(num1, num2){
        return num1 * num2;
    }

    function divideNumbers(num1, num2){
        return num1 / num2;
    }

    switch(operator) {
        case "add":
            console.log ("When you add " + num1 + " with " + num2 + 
            " it will equal " + addNumbers(num1, num2) + ".");
        break;
        case "sub":
            console.log ("When you subtract " + num1 + " with " + num2 + 
            " it will equal " + subtractNumbers(num1, num2) + ".");
        break;
        case "mul":
            console.log ("When you multiply " + num1 + " with " + num2 + 
            " it will equal " + multiplyNumbers(num1, num2) + ".");
        break;
        case "div":
            console.log ("When you divide " + num1 + " with " + num2 + 
            " it will equal " + divideNumbers(num1, num2) + ".");
        break;
        default:
            console.log ("Invalid operator selected.")

        
    }
    