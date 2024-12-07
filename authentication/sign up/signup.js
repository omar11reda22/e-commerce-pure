const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

//firstname validation
function isValidFirstName(firstName) {
    const firstNameRegex = /^[A-Za-z]+$/;
    return firstNameRegex.test(firstName);
}

//lastname validation
function isValidLastName(lastName) {
    const lastNameRegex = /^[A-Za-z]+$/;
    return lastNameRegex.test(lastName);
}

//email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//password validation
function isValidPassword(password) {
const passwordRegex =
  /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&_\-#^])[A-Za-z\d@$!%?&_\-#^]{8,}$/;
      return passwordRegex.test(password);
}

//confirm password
function isConfirmedPassword(password, confirmPassword) {
    return password === confirmPassword;
}

function authenticateUser() {
    if(isValidFirstName && isValidLastName && isValidEmail && isValidPassword && isConfirmedPassword) {
        return true;
    }
    return false;
}

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    //get form input
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const accountType = document.querySelector('input[name="accountType"]');

    //error messages
    document.getElementById("firstNameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("accountTypeError").textContent = "";

    let isValid = true;

    //validate firstname
    if(!isValidFirstName(firstName)) {
        document.getElementById("firstNameError").textContent = "please enter a valid name";
        isValid = false;
    }

    //validate lastname
    if(!isValidLastName(lastName)) {
        document.getElementById("lastNameError").textContent = "please enter a valid name";
        isValid = false;
    }

    //validate email 
    if(!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "please enter a valid email address";
        isValid = false;
    }

    //validate password
    if(!isValidPassword(password)) {
        document.getElementById("passwordError").textContent = "password must be at least 8 characters include uppercase, lowercase, number, special character";
        isValid = false;
    }

    //confirm password
    if(!isConfirmedPassword(password, confirmPassword)) {
        document.getElementById("confirmPasswordError").textContent = "password do not match";
        isValid = false;
    }

    //select account type
    if(!accountType) {
        document.getElementById("accountTypeError").textContent = "please select an account type";
        isValid = false;
    }

    if(isValid) {
        const isAuthenticate = authenticateUser();
        if(isAuthenticate) {
            alert("account created sucessfully!");
        }
        else {
            alert("account creation failed!, please try again");
        }
    }


});


let btnSignUp = document.getElementById("btn");


btnSignUp.addEventListener("click", function ()
{
    document.close();
})