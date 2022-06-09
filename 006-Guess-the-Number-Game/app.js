let input = document.querySelector("#input");
let btn = document.querySelector("#btnCheck");
let output = document.querySelector("#output");
let attempts = document.querySelector("#attemptCount");
let adviceLine = document.querySelector("#advice");
let trueNum = Math.floor(Math.random() * 100);
let count = 0;
let advicePoint1 = 0;
let advicePoint2 = 100;

btn.addEventListener("click", () => {
  let inputNum = input.value;
  if (inputNum < 0 || inputNum >= 100) {
    alert("Please give a number between 0 - 100(exclusive)");
  } else if (inputNum == trueNum) {
    output.textContent = `Congragulation ${inputNum} is correct!`;
    adviceLine.textContent = `SUPER!!!`;
  } else {
    output.textContent = `Sorry ${inputNum} is not correct! Try it again...`;
    count = count + 1;
    attempts.innerHTML = count;

    if (inputNum > trueNum) {
        adviceLine.textContent = `!Enter a number between ${advicePoint1} and ${inputNum}`;
        if (inputNum < advicePoint2) advicePoint2 = inputNum;
    } 
    else
        adviceLine.textContent = `!Enter a number between ${inputNum} and ${advicePoint2}`;
        if (inputNum > advicePoint1) advicePoint1 = inputNum;
  }
  console.log(trueNum);
});
