let calculation = document.getElementById("calculation");
let output = document.getElementById("output");
let buttonArea = document.getElementById("buttonArea");

let answer;
let operation;
let firstNumber;
let secondNumber;

//NOW WE RE STARTING THE EVENTLISTENER
//if there is no input just take number
buttonArea.addEventListener("click", (e) => {
    let x = e.target.textContent;
    if (!output.textContent) {
        if (e.target.className == "butons numbers") {
            output.textContent = e.target.textContent;
            secondNumber = Number(output.textContent);
        }
    }
//if there is input:...
    else {
        //when user click on numbers
        if (e.target.className == "butons numbers") {
            output.textContent += e.target.textContent;
            secondNumber = Number(output.textContent);
        }
        //when user click on operations
        else if(e.target.className == "butons operations") {
            calculation.textContent += output.textContent + e.target.textContent;
            firstNumber = secondNumber;
            operation = e.target.textContent;
            output.textContent = "";        
        }
        //when user click on equal button
        else if(e.target.className == "butons equal") {            
            if (operation == "+") {
                calculation.textContent += output.textContent + e.target.textContent;
                output.textContent = firstNumber + secondNumber;
              }
            if (operation == "-") {
                calculation.textContent += output.textContent + e.target.textContent;
                output.textContent = firstNumber -  secondNumber;
              }
            if (operation == "*") {
                calculation.textContent += output.textContent + e.target.textContent;
                output.textContent = firstNumber * secondNumber;
              }
            if (operation == "/") {
                calculation.textContent += output.textContent + e.target.textContent;
                output.textContent = firstNumber / secondNumber;
              }
        }
        //when user click on additional operators
        else if(e.target.className == "butons additionalOperations") {
            if (e.target.textContent == "AC") {
                output.textContent = "";
                calculation.textContent = "";
            }
            else if(e.target.textContent == "+-") {
                
            }
            else if (e.target.textContent == "%") {
                calculation.textContent += output.textContent + e.target.textContent;
                output.textContent = Number(output.textContent)/100;
            }
        }
    }
});


