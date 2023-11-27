console.log("Hello World");

var year = new Date().getFullYear();
var date = '&copy; studio.of.kp {year}. All Rights Reserved.';
document.getElementById("rights").innerHTML = year;

const button = document.getElementById("button")
button.addEventListener("click", function(e) {
    const name = prompt("Hello World");
    console.log(name);
});