const inputs = document.querySelectorAll(".input");

function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
   
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl)
});


// See Password

function show() {
    var pswrd = document.getElementById('pswrd');
    var icon = document.querySelector('.fas');
    if (pswrd.type === "password") {
        pswrd.type = "text";
        icon.style.color = "#4dd8f3";
    } else{
        pswrd.type = "password";
        icon.style.color = "#d9dde4";
    }


}

var userId = document.querySelector(".input").value;
console.log("userId")
// if (condition) {
    
// } else {
    
// }

// VALIDATION CHECK
var userId = document.getElementById("input");
var myInput = document.getElementById("pswrd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

function validate() 
{
    if (userId.value == "Joshua1960" && myInput.value == "Abcde123") 
    {
        // alert("validation succeed");
        window.open("../html/Josh-store.html");
    } else {
        alert("Wrong Login Credentials");
        location.href = "../html/Login.html";
    }
}

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function validate() {
    // VALIDATE SMALL LETTERS
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    // VALIDATE CAPITAL LETTERS
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    // VALIDATE NUMBERS
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    // VALIDATE LENGTH
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
