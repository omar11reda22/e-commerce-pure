import {
  database,
  GetProductById,
  GetDataFromLocalStorage,
  SaveDataToLocalStorage,
  GetUserById,
} from "../finalscript.js";
import { loadnavbar } from "../navbar.js";
window.addEventListener("load", function () {
  let color = "White";
  loadnavbar(color);
  //loadDatabaseFromLocalStorage();
  var cart;
  //console.log(GetDataFromLocalStorage(database).currentUser);
  let currentuser = GetDataFromLocalStorage(database).currentUser;
  //console.log(database.currentUser);
  //console.log(currentuser);
  const cartTable = document.getElementById("cartTable");
  const subtotalCell = document.getElementById("subtotal");
  let guestcart = JSON.parse(localStorage.getItem("GuestCart"));
  let itemToDelete = null; // To hold the item that the user wants to delete

  // Function to load the cart from the user data if logged in
  function loadUserCart() {
    if (currentuser != null) {
      const user = GetUserById(currentuser);
      //console.log(user);

      if (user.cart) {
        cart = user.cart;
      }
    } else {
      cart = JSON.parse(localStorage.getItem("GuestCart")); // If no user is logged in, use guest cart
    }
  }

  //console.log(guestcart);
  //console.log();

  // Function to save the cart to the user data if logged in
  function saveUserCart() {
    if (database.currentUser) {
      const user = GetUserById(currentuser);
      user.cart = cart; // Save cart to user data
      SaveDataToLocalStorage(database); // Save the data to local storage
    } else {
      database.guestCart = cart; // Save guest cart to the database
      SaveDataToLocalStorage(database); // Save the data to local storage
    }
  }

  // Load the cart based on whether the user is logged in or not
  loadCart(); // Load cart for guest
  // Check if cart is empty or not

  // Load the cart data
  function loadCart() {
    cartTable.innerHTML = ""; // Clear the table before reloading it
    //let currentuser = GetDataFromLocalStorage(database).currentUser;

    loadUserCart();
    checkEmptyCart();

    //console.log(cart);
    cart.forEach((item) => {
      let product = GetProductById(item.id);

      // Create a new row for each item
      let row = document.createElement("tr");
      row.setAttribute("data-id", item.id); // Set a unique data-id for each row

      row.innerHTML = `
           <td  style="width: 20%;" > <div >
<img src="${product.images[0]}"
      product.name
    }" class="img-thumbnail" style="height:7em " >
           </td>


           <td style=" vertical-align: middle;">${product.name}</td>
          
            <td style=" vertical-align: middle;">${product.price.toFixed(
              2
            )}</td>
            <td style=" vertical-align: middle;">
                <input type="number" min="1" max="${
                  product.stock
                }" class="form-control w-50 quantity-input" value="${
        item.quantity
      }" data-id="${item.id}">
            </td>
            <td id="leftinStock${
              product.id
            }" style=" vertical-align: middle;"> ${
        product.stock - item.quantity
      }
            </td>
            <td style=" vertical-align: middle;" class="item-total">${(
              product.price * item.quantity
            ).toFixed(2)}</td>
            <td style=" vertical-align: middle;"><button class="btn btn-danger delete-btn" data-id="${
              item.id
            }">X</button></td>
        `;

      // Append the row to the table
      cartTable.appendChild(row);
    });

    // Attach event listeners to the delete buttons and quantity inputs
    attachEventListeners();

    // Update the total calculation
    getTotal();
  }

  console.log(cart.length);

  //Check if the cart is empty and update the cart table accordingly
  function checkEmptyCart() {
    /*
    
    1/ check if user login or not [currentuser == null] no user login => when user click checkout alert 
    2/ user already login but having empty cart when click checkout redirect to home page 

    
    */
    if (cart.length === 0) {
      let Checkoutbtn = document.getElementById("Checkoutbtn");
      cartTable.innerHTML = `<tr><td colspan="5" class="text-center">Your cart is empty. Start shopping!</td></tr>`;
      document.getElementById("Checkoutbtn").innerText = "Continue Shopping ";
      // Checkoutbtn.disabled = false;
      // const newButton = Checkoutbtn.cloneNode(true);
      // Checkoutbtn.replaceWith(newButton);
      Checkoutbtn.addEventListener("click", function () {
        location.assign("/E-commerce/Home.html"); // go to watch to products
      }); // fire here
    } else {
      // can't fire here  where problem ? need debug this code
      Checkoutbtn.disabled = false;
      const newButton = Checkoutbtn.cloneNode(true);
      Checkoutbtn.replaceWith(newButton);
      // loadCart(); // Load cart if it's not empty
      // Checkoutbtn.disabled = false;
      // Checkoutbtn.replaceWith(Checkoutbtn.cloneNode(true));
      //  let Checkoutbtn = document.getElementById("Checkoutbtn");
      Checkoutbtn.addEventListener("click", function () {
        //  alert("hi");
        if (currentuser == null) {
          // no one login
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You need to sign in in order to make an order",
          }).then(() => {
            location.assign("/E-commerce/authentication/login/login.html"); //login
          });
        } else {
          location.assign("/E-commerce/Cart Design/checkout.html");
        }
      });
    }
  }

  // Delete row function outside of loadCart
  function deleteRow(id) {
    // console.log(id); true id
    if (currentuser == null) {
      // Handle guest cart (remove item from guest cart)
      let itemIndex = database.GuestCart.findIndex((item) => item.id === id);
      if (itemIndex > -1) {
        database.GuestCart.splice(itemIndex, 1); // Remove item from guest cart
      }
    } else {
      // Handle user cart (remove item from user cart)
      let itemIndex = database.users[currentuser - 1].cart.findIndex(
        (item) => item.id === id
      );
      database.users[currentuser - 1].cart.splice(itemIndex, 1);
      SaveDataToLocalStorage(database);
    }

    saveUserCart(); // Save the updated cart data
    loadCart(); // Re-load the cart to reflect the changes
  }

  // Attach event listeners to delete buttons and quantity input fields
  function attachEventListeners() {
    // Delete button event listener
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const itemId = parseInt(button.getAttribute("data-id"));
        // Set the item to be deleted
        itemToDelete = itemId;

        // Show the modal
        const modal = new bootstrap.Modal(
          document.getElementById("confirmDeleteModal")
        );
        modal.show();
      });
    });

    // Quantity input event listener
    const quantityInputs = document.querySelectorAll(".quantity-input");
    quantityInputs.forEach((input) => {
      input.addEventListener("click", function () {
        const itemId = parseInt(input.getAttribute("data-id"));
        const newQuantity = parseInt(input.value);

        updateCartItemQuantity(itemId, newQuantity); // Update the cart with the new quantity
        getTotal(); // Recalculate the total
      });
    });

    // Confirm deletion action
    document
      .getElementById("confirmDeleteButton")
      .addEventListener("click", function () {
        if (itemToDelete !== null) {
          //  console.log(itemToDelete);
          deleteRow(itemToDelete); // Perform the deletion
        }

        // Hide the modal
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("confirmDeleteModal")
        );
        modal.hide();
      });
  }

  // Update the quantity of an item in the cart
  function updateCartItemQuantity(id, quantity) {
    if (database.currentUser == null) {
      // Update guest cart
      let item = database.GuestCart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    } else {
      // Update user cart
      let user = GetUserById(database.currentUser);
      let item = database.users[currentuser - 1].cart.find(
        (item) => item.id === id
      );
      console.log(item);
      if (item) {
        item.quantity = quantity;
      }
    }
    saveUserCart(); // Save updated cart data to local storage
    loadCart();
    let stock = document.getElementById("leftinStock" + id).innerText;
    if (stock == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You reached the max stock",
      });
    }
  }

  // Function to calculate and display the total and subtotal
  function getTotal() {
    let total = 0;

    // Loop through cart and calculate the total price
    cart.forEach((item) => {
      let product = GetProductById(item.id);
      let itemTotal = product.price * item.quantity;

      // Update the subtotal for each item (price * quantity)
      const itemRow = document.querySelector(`tr[data-id="${item.id}"]`);
      const itemTotalCell = itemRow.querySelector(".item-total");
      itemTotalCell.textContent = itemTotal.toFixed(2);

      // Add to the overall total
      total += itemTotal;
    });

    // Update the subtotal display in the tfoot section
    subtotalCell.textContent = total.toFixed(2);
  }
});
