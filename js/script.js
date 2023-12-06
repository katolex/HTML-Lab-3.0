console.log("Hello World");

//footer
let year = new Date().getFullYear();
console.log("sanity check: " + year);
let date = '&copy; studio.of.kp' + year + '. All Rights Reserved.'; 
document.getElementById("rights").innerHTML = year;

const buttonalert = () => {
    alert("Hello world!");
}

// The hovering button
const clickme = () => {
document.getElementById("btn-alert").innerHTML = "YES CLICK ON ME!";
}
const clickhere = () => {
    document.getElementById("btn-alert").innerHTML = "Click here!";
}

//incrementing button
let btnclick = 0;
let text = document.getElementById("counter");
document.getElementById("btn-counter").onclick = () => {
    btnclick += 1;
    text.innerHTML = btnclick;
    console.log("sanity check: " + btnclick);   

    if (btnclick%2 == 0){
        text.classList.remove("odd");
        text.classList.add("even");
    }
    else{
        text.classList.remove("even");
        text.classList.add("odd");
    }
}


//for loop
for (let i = 1; i <= 100; i++) {
    const node = document.createElement("li");
    let evenOrOdd;
    if (i%2 == 0){
        node.classList.add('even');
        evenOrOdd = "even";
    }
    else {
        node.classList.add('odd');
        evenOrOdd = "odd";
    }
    node.textContent = evenOrOdd;
    document.getElementById("numbers").appendChild(node);
}