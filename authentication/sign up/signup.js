//import { database1 } from "../../finalscript";

import { database , GetUserById } from "../../finalscript.js";

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
const city = document.getElementById("City");
const mobile = document.getElementById("Mobile");
const mobileNumberError = document.getElementById("mobileError");
const cityError = document.getElementById("City");
const governorate = document.getElementById("Governorate");
const governorateError = document.getElementById("governorate");
// get all inputs
const inputs = document.getElementsByClassName("form-control");
//firstname validation
function isValidFirstName(firstName) {
  const firstNameRegex = /^[A-Za-z]+$/;
  return firstNameRegex.test(firstName);
}
// validation address 
// function isvalidaddress(city){
//   const egyptAddressRegex =
//     /^(Cairo|Helwan|6th of October|Giza|Alexandria|Mansoura|Zagazig|Port Said|Suez|Qena|Aswan|Ismailia|Luxor|Assiut|Damanhour|Damietta|Kafr El Sheikh|Minya|Shebin El-Kom|Tanta|Beni Suef|Fayoum|Banha|Sohag|Hurghada|Sharm El Sheikh|Marsa Matruh|Kharga|Arish|Rafah|Nuweiba|Shalateen|Asyut|Quseir)$/i;
//   return firstNameRegex.test(address);
// }
// validation mobile 
function isvalidmobile(mobile){
  const mobileRegex = /^(?:\+20|01)[0-9]{9}$/;
  return mobileRegex.test(mobile);
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
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/;  return passwprdRegex.test(password);
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
    isvalidmobile&&
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
  if(governorate.value === ''){
    e.preventDefault();
    governorateError.innerHTML = "please select governorate"; 
      governorate.style.border = "2px solid red";
      isValid = false;
  }
  if(city.value === ''){
    e.preventDefault();
    cityError.innerHTML = "please select city";
    city.style.border = "2px solid red";
    isValid = false;
  }
  if(!isvalidmobile(mobile.value)){
    e.preventDefault();
    mobileNumberError.innerHTML =
      "Invalid mobile number format. Please enter a valid Egyptian mobile number starting with '+20' or '01', followed by 9 digits. Example: +201234567890 or 01234567890.";
      mobile.style.border = "2px solid red";
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
  let accountTypeError = document.getElementById("accountTypeError");
let radios = document.getElementsByName('accountType');
let isradiochecked = false;
let accountType = '';
for(let i = 0; i<radios.length; i++){
  if(radios[i].checked){
    isradiochecked = true;
    accountType = radios[i].value
    break;
  }
}
// if(!isradiochecked){
//   e.preventDefault();
//   accountTypeError.innerHTML = "please choose";
//   isValid = false;
// }



  if (isValid) {
    // will sending name in url
    // need saving in database [localstorage]
    // need asend a name in url to show it in home page

    // save in currentuser + session + users

    // session
    sessionStorage.setItem("firstname", firstName.value);
    sessionStorage.setItem("lastname", lastName.value);
    sessionStorage.setItem("email", email.value);
    // alert("saving in session id done");
    // saving in locastorage [users]
    let users = JSON.parse(localStorage.getItem("users"));
    // let currentuser = JSON.parse(localStorage.getItem("currentUser")); // to set id in current user
    let newId =
      users.length > 0 ? Math.max(...users.map((user) => user.id || 0)) + 1 : 1;

    console.log(users);
    const newuser = {
      id: newId,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      accountType: "Customer",
      mobileNumber: null,
      image: null,
      cart: [],
      product: [],
      orderIds: [],
      address: {
        street: "",
        city: city.value,
        governorate: governorate.value,
      },mobileNumber:mobile.value
    };
    users.push(newuser);

    /*
janesmith@example.com
anothersecurepassword456

*/

    localStorage.setItem("currentUser", JSON.stringify(newuser.id));
    //    alert("saving in localstorage is done ");

    //let user = GetUserById(newuser.id);
    let products = JSON.parse(localStorage.getItem("GuestCart")) || [];
    //user.cart = [products] // set product from guestcart to cart
    if (products.length > 0) {
      newuser.cart = products;
    }
    // then removing guestcart
    // database1.guestcart = [];
    // localStorage.setItem("guestCart",JSON.stringify(database1.guestcart));

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("GuestCart", JSON.stringify([]));
  }

// check if guestcart having products or not if have set it in cart to this user 

});

//let guest = JSON.parse(localStorage.getItem("guestCart"));
//database1.guestcart = []
//localStorage.setItem("guestCart",JSON.stringify(database1.guestcart));
//console.log(JSON.parse(localStorage.getItem("guestCart")));
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

    if(element.id ==='Mobile'){
      if(!isvalidmobile(element.value)){
        mobileNumberError.innerHTML =
          "Invalid mobile number format. Please enter a valid Egyptian mobile number starting with '+20' or '01', followed by 9 digits. Example: +201234567890 or 01234567890.";
          mobile.style.border = "2px solid red";

      }else{
        mobileNumberError.innerHTML = "";
        mobile.style.border = "";
      }
    }


    if (element.id === "email") {
      if (!isValidEmail(element.value)) {
        emailerror.innerHTML = "Please enter a valid email address";
        email.style.border = "2px solid red";
      } else if (getemail(element.value)) {
        emailerror.innerHTML = "This email already exists please go login";
        email.style.border = "2px solid red";
      } else {
        emailerror.innerHTML = "";
        email.style.border = "";
      }
    }

        if (element.id === "City") {
          if (city.value === "") {
            cityError.innerHTML = "please select city";
            city.style.border = "2px solid red";
          } else {
            cityError.innerHTML = "";
            city.style.border = "";
          }
        }
        if (element.id === "Governorate") {
          if (governorate.value === "") {
            governorateError.innerHTML = "please select governorate";
            city.style.border = "2px solid red";
          } else {
            governorateError.innerHTML = "";
            governorate.style.border = "";
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
  return users.find((p) => p.email == email);
}

const citiesData = {
  Cairo: [
    "Cairo City Center",
    "Helwan",
    "Maadi",
    "Zamalek",
    "Nasr City",
    "Heliopolis",
  ],
  Giza: ["Giza City", "6th of October City", "El-Agouza", "Imbaba", "Dokki"],
  Alexandria: [
    "Alexandria City",
    "Montazah",
    "Bahri",
    "Smouha",
    "Raml Station",
  ],
  Dakahlia: ["Mansoura", "Talkha", "Mit Ghamr", "Dikirnis", "Sinbillawin"],
  Sharqia: ["Zagazig", "El-Hosaynia", "Belbeis", "Abu Hammad", "Faqous"],
  "Port Said": ["Port Said City"],
  Suez: ["Suez City", "Port Tawfik", "Ain Sokhna"],
  Qena: ["Qena City", "Nag Hammadi", "Dandara", "Farshut"],
  Aswan: ["Aswan City", "Nubia", "Kom Ombo", "Edfu"],
  Ismailia: ["Ismailia City", "Fayed", "Abu Sultan"],
  Luxor: ["Luxor City", "Karnak", "Thebes", "Esna"],
  Assiut: ["Assiut City", "Abnoub", "Dairut", "Manfalut", "El-Ghanayem"],
  Beheira: ["Damanhur", "Kafr El-Dawar", "Edco", "Shubrakhit", "Rosetta"],
  Damietta: ["Damietta City", "Ras El-Bar", "Kafr Saad", "New Damietta"],
  "Kafr El Sheikh": ["Kafr El Sheikh City", "Desouk", "Qalyub", "Beyala"],
  Minya: ["Minya City", "Mallawi", "Bani Mazar", "Samalut"],
  Monufia: ["Shibin El Kom", "Minuf", "Tala", "Ashmoun"],
  Gharbia: ["Tanta", "Mahalla", "Kafr El Zayat", "Zefta","Samanoud"],
  "Beni Suef": ["Beni Suef City", "Fayoum City", "El-Fashn", "Samasta"],
  Fayoum: ["Fayoum City", "Ibshway", "Tameya", "Sennuris"],
  Qalyubia: ["Benha", "Shubra El-Kheima", "Khosous", "Qalyub"],
  Sohag: ["Sohag City", "Gerga", "Tahta", "Akhnas"],
  "Red Sea": ["Hurghada", "Safaga", "El-Quseir", "Sharm El Sheikh"],
  Matrouh: ["Marsa Matrouh", "El Alamein", "Sidi Abdel Rahman"],
  "New Valley": ["Kharga", "Dakhla", "Paris"],
  "South Sinai": ["Sharm El Sheikh", "Dahab", "Nuweiba", "Taba"],
  "North Sinai": ["El-Arish", "Rafah", "Sheikh Zuweid"],
};
document.getElementById("Governorate").addEventListener("change", function () {
  const governorateSelect = this;
  const citySelect = document.getElementById("City");
  const selectedGovernorate = governorateSelect.value;

  // Clear existing cities
  citySelect.innerHTML =
    '<option value="" disabled selected>Select City</option>';

  // If a governorate is selected, populate the cities
  if (selectedGovernorate) {
    const cities = citiesData[selectedGovernorate];

    cities.forEach(function (city) {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}); // end of change event 


