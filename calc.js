console.log("hello")
document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.querySelectorAll('.button');
    const Operation1 = document.querySelectorAll('.Operation')
    const resultDisplay = document.querySelector("#Result")
    const Equals = document.querySelector("#equate")
    const clears = document.querySelector("#All clear")

let num1 = null ;
let num2 = null ;
let num3 = 0;
let currentOperation = null;

Equals.addEventListener('click', () => {
    num2 = parseFloat(num3);
    if (num1 != null && num2 != null ){
        switch(currentOperation){
            case "add":
                resultDisplay.textContent = num1+num2;
                break;
                case "subtract":
                    resultDisplay.textContent = num1-num2;
                    break;
                    case "multiply":
                        resultDisplay.textContent = num1*num2;
                        break;
                        case "divide":
                            if(num2 != 0){
                            resultDisplay.textContent = num1/num2;
                            }
                            else{
                                resultDisplay.textContent = error;
                            }
                            break;
                            default:
                                resultDisplay.textContent = "error";
        }
    }
});
});

