console.log("hello")
document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.querySelectorAll('.button');
    const Operation1 = document.querySelectorAll('.Operation')
    const resultDisplay = document.querySelector("#Result")
    const Equals = document.querySelector("#equate")
    const clears = document.querySelector("#Allclear")
    const sub = document.querySelector("#subtract")

let num1 = "" ;
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
            resultDisplay.textContent = (`${num1}${currentOperation}${num2}`);
        }
    });
});

Operation1.forEach(Operation1 => {
    Operation1.addEventListener('click',() => {
        if(num1 !== "" && num2 == "" && num1 !== "-" && currentOperation === null){
            currentOperation =  Operation1.textContent ;
            resultDisplay.textContent =(`${num1}${currentOperation}`) ;
        }
else if(num1 !== "" && num2 == "" && currentOperation !== null && Operation1.textContent === "−"){
    num2 = " -";
    resultDisplay.textContent = (`${num1}${currentOperation}${num2}`)
}
        else if (num1 !== "" && num2 !== "" && num2 !== " -"){
    const result = operate();
    resultDisplay.textContent = result;
    num1 = result.toString();
    num2 = "";
    currentOperation = Operation1.textContent;
    resultDisplay.textContent = (`${result}${currentOperation}`);
        }

        else if (num1 === "" && Operation1.textContent === "−"){
            num1 = "-" ;
        resultDisplay.textContent = num1;
            currentOperation = null ;
        }

        
    })
})

    Equals.addEventListener('click' ,() => {
        if(num1 !="" && num2 != "" ){
           const result = operate();
            resultDisplay.textContent = result;
            num1 = result.toString();
            num2 = "";
            currentOperation = null ;
        }
    })

    clears.addEventListener('click', () => {
        num1 = "";
        num2 = "";
        currentOperation = null;
        resultDisplay.textContent = '0';
    });

function operate() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(num1)
    console.log(num2)
    
    
    switch (currentOperation) {
        case "+":
            return add(num1, num2);
        case "−":
            return subtract(num1, num2);
        case "×":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
        default:
            return "Error: Unknown operation";
    }
}





});
