console.log("Hello World");

var year = new Date().getFullYear();
var date = '&copy; studio.of.kp {year}. All Rights Reserved.'; 
document.getElementById("rights").innerHTML = year;

function buttonalert () {
    alert("Hello world!");
}

function clickme() {
document.getElementById("btn-alert").innerHTML = "YES CLICK ON ME!";
}
function clickhere() {
    document.getElementById("btn-alert").innerHTML = "Click here!";
    }

var btnclick=0;
function clickplus()
{
    btnclick +=1;
    document.getElementById("counter").innerHTML=""+btnclick;
}   