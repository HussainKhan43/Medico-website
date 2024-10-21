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
    let name = $("#name").val();
    let date = $("#date").val();
    let time = $("#time").val();
    let email = $("#email").val();
    let phonenum = $("#phonenum").val();
    let message = $("#message").val();

    let nameerror = $("#nameerror");
    let emailerror = $("#emailerror");
    let phonenumerror = $("#phonenumerror");

    if (name === "" || email === "" || message === "" || phonenum === "" || date === "" || time === "") { 
        alert("All Fields Are Mandatory!");
        return false;
    } 
    else if (name.length <= 2 || name.length >= 30) {
        nameerror.text("Username length must be between 3 and 30 characters");
        return false;
    }
    else if (!/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/.test(email)) {
        emailerror.text("Please enter a valid email");
        return false;
    } 
    else if (phonenum.length != 10) {
        phonenumerror.text("Enter a 10-digit number");
        return false; 
    }   
    else {
        alert("Appointment Booked Successfully");
        return true;
    }
}
