let toDoList = document.getElementById("toDoList");
let addingPanel = document.getElementById("addingDuty");
let newOne = document.getElementById("newOne");
let addBtn = document.getElementById("btnAddNewOne");

let newOneDiv;
let newOneDone;
let newOneDelete;
let newOneText;

addBtn.addEventListener("click", () =>{
    newOneDiv = document.createElement("div");
    newOneDone = document.createElement("button");
    newOneDelete = document.createElement("button");
    newOneText = document.createElement("span");
    newOneText.innerHTML = newOne.value;
    
    newOneDone.style.margin = "10px";
    newOneDone.textContent = "Done";
    newOneText.style.color = "white";
    newOneText.style.fontStyle = "italic";
    newOneText.style.margin = "10px";
    newOneDelete.textContent = "Delete";
    newOneDelete.style.margin = "10px";

    newOneDiv.appendChild(newOneDone);
    newOneDiv.appendChild(newOneDelete);
    newOneDiv.appendChild(newOneText);
    
    toDoList.appendChild(newOneDiv);
})

function deleteOrDone(e) {
    if (e.target.textContent === "Done") {
        e.target.parentElement.querySelector("span").classList.add("overLine");
        //e.target.parentElement.children; is aso usfull for this!
    } 
    else if(e.target.textContent === "Delete") {
        e.target.parentElement.remove();
    }
}

toDoList.addEventListener("click", deleteOrDone);

