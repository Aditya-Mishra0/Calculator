console.log("hello")
document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.querySelectorAll('.button');
    const Operation1 = document.querySelectorAll('.Operation')
    const resultDisplay = document.querySelector("#Result")
    const Equals = document.querySelector("#equate")
    const clears = document.querySelector("#Allclear")

let num1 = "";
let num2 = "" ;

let currentOperation = null;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}

button1.forEach(button1 => {
    button1.addEventListener('click', () => {
        if (currentOperation === null) {
            num1 += button1.textContent;
            resultDisplay.textContent = num1;
        } else {
            num2 += button1.textContent;
            resultDisplay.textContent = num2;
        }
    });
});

Operation1.forEach(Operation1 => {
    Operation1.addEventListener('click',() => {
        if(num1 != "" ){
            Operation1 = Operation1.textContent;
            resultDisplay.textContent = Operation1;
        }

    })
})

    Equals.addEventListener('click' ,() => {
        if(num1 !=0 && num2 != 0 ){
            operate;
        }
    })

    clears.addEventListener('click', () => {
        num1 = "";
        num2 = "";
        currentOperation = null;
        resultDisplay.textContent = '0';
    });

function operate(Operation1, num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch (Operation1) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return "Error: Unknown operation";
    }
}




});
