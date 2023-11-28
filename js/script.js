console.log("Hello World");

var year = new Date().getFullYear();
var date = '&copy; studio.of.kp {year}. All Rights Reserved.'; 
document.getElementById("rights").innerHTML = year;

function buttonalert () {
    alert("Hello world!");
}


document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'Click Here!';
};
document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'YES CLICK ON ME';
};
