console.log("Hello World");

var year = new Date().getFullYear();
var date = '&copy; studio.of.kp {year}. All Rights Reserved.'; 
document.getElementById("rights").innerHTML = year;

const buttonalert = () => {
    alert("Hello world!");
}

document.getElementById('btn-alert').onmouseover = () => {
     document.getElementById('btn-alert').innerText = 'Yes Click on Me';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'Click here!';
};

