let currmode = "light"; 

$("#modebtn").on("click", function() {
    if (currmode === "light") {
        currmode = "dark";
        $("body").addClass("dark").removeClass("light");
    } else {
        currmode = "light";
        $("body").addClass("light").removeClass("dark");
    }

    console.log(currmode);
});



function data() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date");
    let time = document.getElementById("time");
    let email = document.getElementById("email").value;
    let phonenum = document.getElementById("phonenum").value;
    let message = document.getElementById("message").value;

    let nameerror = document.getElementById("nameerror");
    let emailerror = document.getElementById("emailerror"); 
    let phonenumerror = document.getElementById("phonenumerror");


    if (name === "" || email === "" || message === "" || phonenum === "" || date === "" || time === "") { 
        alert("All Fields Are Mandatory!");
        return false;
    } 
    else if (name.length <= 2 || name.length >= 30) {
        nameerror.innerText = "Username length must be between 3 and 30 characters";
        return false;
    }
    else if (!/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/.test(email)) {
        emailerror.innerText = "Please enter a valid email";
        return false;
    } 
    else if (phonenum.length != 10 ) {
        phonenumerror.innerText = "Enter a 10-digit number";
        return false; 
    }   
    else {
        alert("Appointment Booked Successfully");
        return true;
    }
}
