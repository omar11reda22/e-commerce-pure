const email = document.getElementById("email");
const passwordwarning = document.getElementById("password");
const passwordinput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
//email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//checked if mail found or not
function getemail(email) {
  let users = JSON.parse(localStorage.getItem("users"));
  return users.find((p) => p.email == email);
}

document.getElementById("login").addEventListener("submit", function (e) {
  let isvalid = true;
  // first check if user input valid mail or not
  if (!isValidEmail(email.value)) {
    e.preventDefault();
    emailError.innerHTML = "please enter a valid mail";
    email.style.border = "2px solid red";
    isvalid = false;
  } else if (!getemail(email.value)) {
    // if user input a valid mail => checked if this mail already found or not
    e.preventDefault();
    emailError.innerHTML = "this email is not found please register";
    email.style.border = "2px solid red";
    isvalid = false;
  } else {
    emailError.innerHTML = "";
    email.style.border = "";
  }
  // there valid mail

  if (passwordinput.value === "") {
    e.preventDefault();
    passwordError.innerHTML = "password is required";
    passwordinput.style.border = "2px solid red";
    isvalid = false;
  } else {
    passwordError.innerHTML = "";
    passwordinput.style.border = "";
  }

  if (!checkpassword(email.value, passwordinput.value)) {
    e.preventDefault();
    passwordError.innerHTML = "this password is not matching";
    passwordinput.style.border = "2px solid red";
    isvalid = false;
  } else {
    passwordError.innerHTML = "";
    passwordinput.style.border = "";
  }

  // this step email and password full truthy
  if (isvalid) {
    // need passing mail to home page
    // hello mail
    sessionStorage.setItem("email", email.value);
    window.location.href = `/E-commerce/Home.html?email = ${encodeURIComponent(
      email.value
    )}`; // send mail to url
  }
});

email.addEventListener("input", function () {
  if (!isValidEmail(this.value)) {
    emailError.innerHTML = "please enter a valid email";
    this.style.border = "2px solid red";
  } else {
    emailError.innerHTML = "";
    this.style.border = "";
  }
});

// in login validation
/*
1/ stop porapagation if user click to login and values is nothing 
2/ user will enter mail checked if this mail already found or not   [getemail()]  
3/ check if user input a valid email or not 
4/ matching password to this mail  [function]  
*/

// need to create get a password user by email

function checkpassword(email, password) {
  let users = JSON.parse(localStorage.getItem("users"));
  let user = users.find((p) => p.email == email);
  if (!user) {
    //   console.log("this male is not found");
    return false;
  } else if (user.password !== password) {
    //  console.log("not matching");
    return false;
  } else {
    console.log("matching");
    return true;
  }
}

//checkpassword("omaraladeeb45@gmail.com", "Omar@reda2468");
