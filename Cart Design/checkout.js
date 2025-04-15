import {
  database,
  GetProductById,
  GetUserById,
} from "../finalscript.js";
import { loadnavbar } from "../navbar.js";
document.addEventListener("DOMContentLoaded", function () {
  let color = "Black";
  loadnavbar(color);
  console.log(database.orders);
  const cartList = document.getElementById("cartList");
  const cartTotal = document.getElementById("cartTotal");
  let detailedCart = [];
  let total = 0;
  // Load cart contents into checkout page
  //  console.log(database.currentUser);
  let currentuser = JSON.parse(localStorage.getItem("currentUser"));
  let userr = GetUserById(currentuser);
  function loadCheckoutCart() {
    let cart = GetUserById(currentuser).cart;

    cart.forEach((item) => {
      const product = GetProductById(item.id);
      if (product) {
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        let orderProduct = {
          id: item.id,
          price: product.price,
          quantity: item.quantity,
        };
        detailedCart.push(orderProduct);

        const listItem = document.createElement("li");
        listItem.className =
          "list-group-item d-flex justify-content-between lh-sm";
        listItem.innerHTML = `
                        <div>

                            <h6 class="my-0">${product.name}</h6>
                            <small class="text-muted">Quantity: ${
                              item.quantity
                            }</small>
                        </div>
                        <span class="text-muted">$${itemTotal.toFixed(2)}</span>
                    `;

        cartList.appendChild(listItem);
      }
    });

    // Update the total
    cartTotal.textContent = `$${total.toFixed(2)}`;
  }

  // Call the function to populate the checkout page
  loadCheckoutCart();

  let placeOrderBtn = document.getElementsByClassName("placeOrderBtn");

  ////////////////////////////////////////////////////////////////

  const form = document.querySelector("form.needs-validation");

  // Input elements
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const mobileNumber = document.getElementById("mobileNumber");
  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const address2 = document.getElementById("address2");
  const country = document.getElementById("Country");
  const governorate = document.getElementById("governorate");
  const city = document.getElementById("city");

  // Validation feedback elements
  const firstNameError = firstName.nextElementSibling;
  const lastNameError = lastName.nextElementSibling;
  const mobileNumberError = mobileNumber.nextElementSibling;
  const emailError = email.nextElementSibling;
  const addressError = address.nextElementSibling;
  const governorateError = governorate.nextElementSibling;
  const cityError = city.nextElementSibling;

  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/; // Allow only letters (no numbers)
  const mobileRegex = /^\+?[1-9]\d{1,14}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function getCurrentDate(format = "YYYY-MM-DD") {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(now.getDate()).padStart(2, "0");

    // Replace tokens in the format string
    return format.replace("YYYY", year).replace("MM", month).replace("DD", day);
  }
  function generateOrderID() {
    const lastElement = database.orders.at(-1);
    return lastElement.orderId + 1;
  }

  function addOrderIdToUser(userId, orderId) {
    // userr.orderId.push(orderId);
    let user = GetUserById(userId);
    //console.log(user);
    user.orderIds.push(orderId);
    let index = database.users.findIndex((item) => item.id === userId);
    database.users.splice(index, 1, user);
  }

  function updateStock() {
    detailedCart.forEach((item) => {
      let product = GetProductById(item.id);
      product.stock -= item.quantity;
      let index = database.products.findIndex((p) => p.id === item.id);
      database.products.splice(index, 1, product);
    });
  }

  // Custom validation for form submission
  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Validate first name
    if (!firstName.value.trim() || !nameRegex.test(firstName.value.trim())) {
      firstNameError.textContent =
        "First name is required (2-50 characters, letters only, no numbers or special characters).";
      firstNameError.style.display = "block";
      isValid = false;
    } else {
      firstNameError.style.display = "none";
    }

    // Validate last name
    if (!lastName.value.trim() || !nameRegex.test(lastName.value.trim())) {
      lastNameError.textContent =
        "Last name is required (2-50 characters, letters only, no numbers or special characters).";
      lastNameError.style.display = "block";
      isValid = false;
    } else {
      lastNameError.style.display = "none";
    }

    // Validate mobile number
    if (!mobileRegex.test(mobileNumber.value.trim())) {
      mobileNumberError.textContent =
        "Please enter a valid mobile number (e.g., +2012345678).";
      mobileNumberError.style.display = "block";
      isValid = false;
    } else {
      mobileNumberError.style.display = "none";
    }

    // Validate email
    if (email.value.trim() && !emailRegex.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Validate address
    if (!address.value.trim()) {
      addressError.textContent = "Shipping address is required.";
      addressError.style.display = "block";
      isValid = false;
    } else {
      addressError.style.display = "none";
    }

    // Validate governorate selection
    if (governorate.value === "") {
      governorateError.textContent = "Please select a valid governorate.";
      governorateError.style.display = "block";
      isValid = false;
    } else {
      governorateError.style.display = "none";
    }

    // Validate city input
    if (!city.value.trim()) {
      cityError.textContent = "City is required.";
      cityError.style.display = "block";
      isValid = false;
    } else {
      cityError.style.display = "none";
    }

    // If any of the fields are invalid, prevent form submission
    if (!isValid) {
      event.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to fill all fields to place an order",
      });
    } else {
      event.preventDefault();
      let CurrentDate = getCurrentDate();
     // let oo = localStorage.getItem("orders")||[];
     let NewOrderID = generateOrderID();
     // oo.length > 0 ? Math.max(...oo.map((o) => o.orderId || 0)) + 1 : 1;
      updateStock();
      addOrderIdToUser(currentuser, NewOrderID);
      userr.cart = [];
      let order = {
        orderId: NewOrderID,
        items: detailedCart,
        customerId: currentuser,
        totalPrice: total,
        status: "Processing",
        date: CurrentDate,
        customerDetails: {
          firstName: firstName.value,
          lastName: lastName.value,
          address: {
            street: address.value,
            city: city.value,
            governorate: governorate.value,
          },
          email: email.value,
          phone: mobileNumber.value,
        },
      };
      // saving address to user and phone number
      //    userr.address = {
      //     street:address.value,
      //     city:city.value,
      //     governorate:governorate.value
      //    }
      //    userr.mobileNumber = mobileNumber.value;
      //      let userIndex = database.users.findIndex(
      //        (user) => user.id === currentuser
      //      );
      //      if (userIndex !== -1) {
      //        database.users[userIndex] = userr; // Replace the user's data in the database
      //      }

      let orrder = JSON.parse(localStorage.getItem("orders"));
      orrder.push(order);
      localStorage.setItem("orders" , JSON.stringify(orrder));
    //  database.orders.push(order);
     // localStorage.setItem("currentUser", JSON.stringify(currentuser));
    //  SaveDataToLocalStorage(database);
      //  console.log(order);
      Swal.fire({
        icon: "success", 
        title: "✨ YAAAYYY!! ✨",
        text: "Order confirmed",
      }).then(()=>{

let users = JSON.parse(localStorage.getItem("users"));
      let currentUser = users.find((user) => user.id === currentuser);
      if (currentUser) {
        currentUser.cart = []; // Clear the cart
        localStorage.setItem("users", JSON.stringify(users));
}}).then(() => {
        location.assign("/E-commerce/Home.html"); //Home page
      })
    }
  });

  // Dynamically add or remove valid/invalid feedback based on user input
  form.addEventListener("input", function (event) {
    const target = event.target;

    if (target.value.trim()) {
      target.classList.add("is-valid");
      target.classList.remove("is-invalid");
    } else {
      target.classList.add("is-invalid");
      target.classList.remove("is-valid");
    }
  });
});
