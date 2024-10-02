// function data() {
//     let username = document.getElementById("username").value;
//     let date = document.getElementById("date").value;
//     let time = document.getElementById("time").value;
//     let phonenum = document.getElementById("phonenum").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;

//     if (username === "" || date === "" || time === "" || phonenum === "" || email === "" || message === "") {
//         alert("All Fields Are Mandatory!");
//         return false;
//     } 
//     else if (phonenum.length != 10) {
//         alert("Please enter a 10-digit phone number");
//         return false;
//     } 
//     else {
//         return true;
//     }
// }

let modebtn = document.getElementById("modebtn");
let body = document.getElementsByTagName("body")[0];

let currmode = "light"; 

modebtn.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currmode);
});
