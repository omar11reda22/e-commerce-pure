const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const formaction = document.getElementById("signupForm");
const firstNameError = document.getElementById("firstNameError");
const lastnameerror = document.getElementById("lastNameError");
const emailerror = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
// get all inputs
const inputs = document.getElementsByClassName("form-control");
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
  const passwprdRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwprdRegex.test(password);
}

//confirm password
function isConfirmedPassword(password, confirmPassword) {
  return password === confirmPassword;
}

function authenticateUser() {
  if (
    isValidFirstName &&
    isValidLastName &&
    isValidEmail &&
    isValidPassword &&
    isConfirmedPassword
  ) {
    return true;
  }
  return false;
}

formaction.addEventListener("submit", function (e) {
  let isValid = true;
  //  const inputss = document.getElementsByClassName("form-control");

  if (!isValidFirstName(firstName.value)) {
    e.preventDefault();
    firstNameError.innerHTML =
      "First name must contain only letters&no spacing";
    firstName.style.border = "2px solid red";
    isValid = false;
  }
  if (!isValidLastName(lastName.value)) {
    e.preventDefault();
    lastnameerror.innerHTML = "Last name must contain only letters& no spacing";
    lastName.style.border = "2px solid red";
    isValid = false;
  }
  if (!isValidEmail(email.value)) {
    e.preventDefault();
    emailerror.innerHTML = "Please enter a valid email address";
    email.style.border = "2px solid red";
    isValid = false;
  } else if (getemail(email.value)) {
    e.preventDefault();
    emailerror.innerHTML = "This email already exists";
    email.style.border = "2px solid red";
    isValid = false;
  }
  if (!isValidPassword(password.value)) {
    e.preventDefault();
    passwordError.innerHTML =
      "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    password.style.border = "2px solid red";
    isValid = false;
  }

  if (isValid) {
    // will sending name in url
    // need saving in database [localstorage]
    // need asend a name in url to show it in home page 
    




  }
});

Array.from(inputs).forEach((element) => {
  element.addEventListener("input", function () {
    if (element.id === "firstName") {
      if (!isValidFirstName(element.value)) {
        firstNameError.innerHTML =
          "First name must contain only letters& no spacing";
        firstName.style.border = "2px solid red";
      } else {
        firstNameError.innerHTML = "";
        firstName.style.border = "";
      }
    }

    if (element.id === "lastName") {
      if (!isValidLastName(element.value)) {
        lastnameerror.innerHTML =
          "Last name must contain only letters & no spacing";
        lastName.style.border = "2px solid red";
      } else {
        lastnameerror.innerHTML = "";
        lastName.style.border = "";
      }
    }

    if (element.id === "email") {
      if (!isValidEmail(element.value)) {
        emailerror.innerHTML = "Please enter a valid email address";
        email.style.border = "2px solid red";
      } else if (getemail(element.value)) {
        emailerror.innerHTML = "This email already exists";
        email.style.border = "2px solid red";
      } else {
        emailerror.innerHTML = "";
        email.style.border = "";
      }
    }

    if (element.id === "password") {
      if (!isValidPassword(element.value)) {
        passwordError.innerHTML =
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character";
        password.style.border = "2px solid red";
      } else {
        passwordError.innerHTML = "";
        password.style.border = "";
      }
    }

    if (element.id === "confirmPassword") {
      if (!isConfirmedPassword(password.value, element.value)) {
        confirmPasswordError.innerHTML = "Passwords do not match";
        confirmPassword.style.border = "2px solid red";
      } else {
        confirmPasswordError.innerHTML = "";
        confirmPassword.style.border = "";
      }
    }
  });
});

// end of event

// formaction.addEventListener('submit',function(e){
// if(firstName.value === '' || firstName.value.trim() ===""){
//     e.preventDefault();
//     firstNameError.innerHTML = "this field is required";
//     firstName.style.border = "2px solid red";
// }
// if (lastName.value === "" || lastName.value.trim() === "") {
//   e.preventDefault();
//   lastnameerror.innerHTML = "this field is required";
//   lastName.style.border = "2px solid red";
// }
// if (email.value === "" || email.value.trim() ==="") {
//   e.preventDefault();
//   emailerror.innerHTML = "this field is required";
//   email.style.border = "2px solid red";
// }

// if (password.value === "" || password.value.trim() ==="") {
//   e.preventDefault();
//   passwordError.innerHTML = "this field is required";
//   password.style.border = "2px solid red";
// }

// // when user already click to input anything

// inputs.forEach(element => {
//     element.addEventListener('input',function(){

//     }); // end of event of input
// });

// }); // end of event

/*
1/ when user click to submit and all dont click to any input whill stoped propagation to firing submition click 
using prefentdefault 
2/ when use click to any input needing to firing input event to all iputs and 
3/ if user wtite email already exist [warning] 
*/

// event input

// document.getElementById("signupForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   //get form input
//   const firstName = document.getElementById("firstName").value.trim();
//   const lastName = document.getElementById("lastName").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value.trim();
//   const confirmPassword = document
//     .getElementById("confirmPassword")
//     .value.trim();
//   const accountType = document.querySelector('input[name="accountType"]');

//   //error messages
//   document.getElementById("firstNameError").textContent = "";
//   document.getElementById("lastNameError").textContent = "";
//   document.getElementById("emailError").textContent = "";
//   document.getElementById("passwordError").textContent = "";
//   document.getElementById("confirmPasswordError").textContent = "";
//   document.getElementById("accountTypeError").textContent = "";

//   let isValid = true;

//   //validate firstname
//   if (!isValidFirstName(firstName)) {
//     document.getElementById("firstNameError").textContent =
//       "please enter a valid name";
//     document.getElementById("firstName").style.border = "2px solid red";
//     isValid = false;
//   } else {
//     document.getElementById("firstNameError").textContent = "";
//     document.getElementById("firstname").style.border = "none";
//   }

//   //validate lastname
//   if (!isValidLastName(lastName)) {
//     document.getElementById("lastNameError").textContent =
//       "please enter a valid name";
//     isValid = false;
//   } else {
//     document.getElementById("lastName").style.border = "none";
//   }

//   //validate email
//   if (!isValidEmail(email)) {
//     document.getElementById("emailError").textContent =
//       "please enter a valid email address";
//     isValid = false;
//   } else {
//     document.getElementById("email").style.border = "none";
//   }

//   //validate password
//   if (!isValidPassword(password)) {
//     document.getElementById("passwordError").textContent =
//       "password must be at least 8 characters include uppercase, lowercase, number, special character";
//     isValid = false;
//   } else {
//     document.getElementById("password").style.border = "none";
//   }

//   //confirm password
//   if (!isConfirmedPassword(password, confirmPassword)) {
//     document.getElementById("confirmPasswordError").textContent =
//       "password do not match";
//     isValid = false;
//   } else {
//     document.getElementById("confirmPassword").style.border = "none";
//   }

//   //select account type
//   if (!accountType) {
//     document.getElementById("accountTypeError").textContent =
//       "please select an account type";
//     isValid = false;
//   }

//   if (isValid) {
//     const isAuthenticate = authenticateUser();
//     if (isAuthenticate) {
//       alert("account created sucessfully!");
//     } else {
//       alert("account creation failed!, please try again");
//     }
//   }
// });

function getemail(email) {
  let users = JSON.parse(localStorage.getItem("users"));
  return users.find(p => p.email == email);
  
}
