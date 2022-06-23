let input = document.getElementById("cityEntry");
let submitBtn = document.getElementById("submitBtn");
let cityName = document.getElementById("cityName");
let cityInfo = document.getElementById("cityInfo");
let info1 = document.getElementById("info1");
let info2 = document.getElementById("ifo2");
let info3 = document.getElementById("info3");

let key = "dff455aa272ddcf08a17c8ef26aae499";
let data = fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(myData => {
    myData.forEach(element => {
        //console.log(element.id);
        if (element.id < 10) {
            dataList.innerHTML += `<li>${element.title}<li>`;
        }
    });
});

submitBtn.addEventListener("click", () =>{
    cityName.textContent = data;
    console.log(cityName.textContent);
})