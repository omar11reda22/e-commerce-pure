import {
  SaveDataToLocalStorage,
  GetUserById,
  database,
  GetProductById,
  Getallusers,
  GetAllOrders,
  GetOrderById,
} from "../finalscript.js";
import { loadnavbar } from "../navbar.js";

let color = "black";
loadnavbar(color);
let itemToDelete = null; // To hold the item that the user wants to delete
let ooo = GetAllOrders();
let userss = Getallusers();
// Ensure the database is saved to local storage
if (!localStorage.getItem("users")) {
  database = JSON.parse(localStorage.getItem("database"));
}

// Ensure currentUser is initialized
if (!localStorage.getItem("currentUser")) {
  //localStorage.setItem('currentUser', JSON.stringify(database.currentUser));
  console.log("Initialized currentUser in local storage.");
}

let userID = JSON.parse(localStorage.getItem("currentUser"));
//console.log(userID);
// Get the current user by ID

let currentUser = GetUserById(userID);
console.log(currentUser);

if (currentUser == null) {
  console.error("No user found with the given ID.");
} else {
  console.log("Current user loaded:", currentUser);
  populateUserData(currentUser);
  populateOrderHistory(currentUser);
}

// Select DOM elements
const editButton = document.getElementById("editButton");
const saveButton = document.getElementById("saveButton");

// Helper function to populate user data into the HTML
function populateUserData(user) {
  // Update user name
  const userNameElement = document.getElementById("user-name");
  if (userNameElement)
    userNameElement.textContent =
      user.firstName + " " + user.lastName || "Not provided";

  //username in image
  const userNameElementinImag = document.getElementById("Hi-userName");
  if (userNameElementinImag)
    userNameElementinImag.textContent =
      user.firstName + " " + user.lastName || "Not provided";

  // Update user email
  const userEmailElement = document.getElementById("user-email");
  if (userEmailElement)
    userEmailElement.textContent = user.email || "Not provided";

  // Update user mobile number
  const userMobileElement = document.getElementById("user-mobile");
  if (userMobileElement)
    userMobileElement.textContent = user.mobileNumber || "Not provided";

  // Update address fields
  if (user.address) {
    const streetElement = document.getElementById("edit-street");
    const cityElement = document.getElementById("edit-city");
    const governorateElement = document.getElementById("edit-governorate");

    if (streetElement)
      streetElement.textContent = user.address.street || "Not provided";
    if (cityElement)
      cityElement.textContent = user.address.city || "Not provided";
    if (governorateElement)
      governorateElement.textContent =
        user.address.governorate || "Not provided";
  } else {
    // Handle case where address is not available
    const streetElement = document.getElementById("edit-street");
    const cityElement = document.getElementById("edit-city");
    const governorateElement = document.getElementById("edit-governorate");

    if (streetElement) streetElement.textContent = "Not provided";
    if (cityElement) cityElement.textContent = "Not provided";
    if (governorateElement) governorateElement.textContent = "Not provided";
  }
}

// Helper function to populate order history
function populateOrderHistory(user) {
  console.log(user);
  const ordersContainer = document.querySelector(".orders-table-body");
  if (!ordersContainer) return; // Exit if the container is not found

  ordersContainer.innerHTML = ""; // Clear existing content

  // Fetch user orders from database
  
  const userOrders = ooo.filter(
    (order) => order.customerId === user.id
  );
  console.log(userOrders);
  userOrders.forEach((order) => {
    const tableRow = document.createElement("tr");

    // Order ID cell
    const orderIdCell = document.createElement("td");
    orderIdCell.textContent = order.orderId;

    // Products cell
    const productsCell = document.createElement("td");
    let productNames = [];
    order.items.forEach((item) => {
      let product = GetProductById(item.id)?.name || "Unknown";
      productNames.push(product);
    });
    productsCell.textContent = productNames.join(", ");

    //Addrss cell
    const addressCell = document.createElement("td");
    let orderAddrss =
      GetOrderById(order.orderId).customerDetails.address.city +
        " " +
        GetOrderById(order.orderId).customerDetails.address.street || "Unknown";
    addressCell.textContent = orderAddrss;

    // Total Price cell
    const totalPriceCell = document.createElement("td");
    totalPriceCell.textContent = `$${order.totalPrice.toFixed(2)}`;

    // Status cell
    const statusCell = document.createElement("td");
    const statusBadge = document.createElement("span");
    statusBadge.className = "badge rounded-pill";

    // Assign status-specific classes
    if (order.status === "Delivered" || order.status === "Shipped") {
      statusBadge.classList.add("bg-success");
    } else if (order.status === "Pending" || order.status === "Processing") {
      statusBadge.classList.add("bg-warning");
    } else {
      statusBadge.classList.add("bg-danger");
    }
    statusBadge.textContent = order.status;
    statusCell.appendChild(statusBadge);

    //Cancel button
    const cancelBtnCell = document.createElement("td");

    if (order.status === "Processing") {
      cancelBtnCell.innerHTML = `<Button data-id = ${order.orderId} class = "cancel-btn btn-sm btn-danger ">Cancel</Button>`;
      orderIdCell.textContent = order.orderId;

    }

    // Append cells to row
    tableRow.appendChild(orderIdCell);
    tableRow.appendChild(productsCell);
    tableRow.appendChild(addressCell);
    tableRow.appendChild(totalPriceCell);
    tableRow.appendChild(statusCell);
    if (cancelBtnCell) {
      tableRow.appendChild(cancelBtnCell);
    }

    // Append row to table body
    ordersContainer.appendChild(tableRow);
    console.log(userOrders);

    attachEventListeners();

  });
}

// Edit and Save Functions
function makeEditable() {
  // Make other fields editable
  const profileFields = document.querySelectorAll(".card-body p.text-muted");
  profileFields.forEach((field) => {
    const currentValue = field.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentValue;
    input.className = "form-control mb-2";
    input.id = field.id;
    field.replaceWith(input);
  });

  //cancel order function
  // // Replace content with input fields for address components
  // const streetElement = document.getElementById('edit-street');
  // const cityElement = document.getElementById('edit-city');
  // const governorateElement = document.getElementById('edit-governorate');

  // if (streetElement) {
  //     streetElement.innerHTML = `<input type="text" id="input-street" value="${address.street}" class="form-control mb-2">`;
  // }
  // if (cityElement) {
  //     cityElement.innerHTML = `<input type="text" id="input-city" value="${address.city}" class="form-control mb-2">`;
  // }
  // if (governorateElement) {
  //     governorateElement.innerHTML = `<input type="text" id="input-governorate" value="${address.governorate}" class="form-control mb-2">`;
  // }

  editButton.disabled = true;
  saveButton.disabled = false;
}

function saveChanges() {
  // Update general profile fields
  const nameInput = document.getElementById("user-name");
  const emailInput = document.getElementById("user-email");
  const mobileInput = document.getElementById("user-mobile");

  currentUser.name = nameInput?.value || currentUser.name;
  currentUser.email = emailInput?.value || currentUser.email;
  currentUser.mobileNumber = mobileInput?.value || currentUser.mobileNumber;

  console.log(nameInput.value);

  // Update address fields
  const streetInput = document.getElementById("edit-street");
  const cityInput = document.getElementById("edit-city");
  const governorateInput = document.getElementById("edit-governorate");

  currentUser.address = {
    street: streetInput?.value || currentUser.address.street,
    city: cityInput?.value || currentUser.address.city,
    governorate: governorateInput?.value || currentUser.address.governorate,
  };



  // Update user in database.users
  const userIndex = userss.findIndex(
    (user) => user.id === currentUser.id
  );
  if (userIndex !== -1) {
    userss[userIndex] = { ...currentUser }; // Replace the existing user with the updated one
  } else {
    console.error("Failed to update user: User not found in database.");
  }

  //database.currentUser = currentUser;
  //SaveDataToLocalStorage(database);

  //to change input fields back to Paragraphs
  const profileFields = document.querySelectorAll(
    ".card-body input.form-control"
  );
  profileFields.forEach((field) => {
    const currentValue = field.value;
    const p = document.createElement("p");
    p.innerText = currentValue;
    p.className = "text-muted mb-0";
    p.id = field.id;
    field.replaceWith(p);
  });

  // Update the UI with new data
  populateUserData(currentUser);

  editButton.disabled = false;
  saveButton.disabled = true;

  console.log(
    "Profile updated successfully and saved to localStorage!",
    currentUser
  );
}

function attachEventListeners() {
  // Delete button event listener
  const deleteButtons = document.querySelectorAll(".cancel-btn");

  console.log(deleteButtons);

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("cc");
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

  // Confirm deletion action
  document
    .getElementById("confirmDeleteButton")
    .addEventListener("click", function () {
      if (itemToDelete !== null) {
        //  console.log(itemToDelete);
        cancelRow(itemToDelete); // Perform the deletion
      }

      // Hide the modal
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("confirmDeleteModal")
      );
      modal.hide();
    });
}
function cancelRow(itemId) {
  let orderIndex = ooo.findIndex(
    (order) => order.orderId === itemId
  );

  ooo[orderIndex].status = "Canceled";

 //
 // SaveDataToLocalStorage(database);
 localStorage.setItem("orders", JSON.stringify(ooo));

  populateOrderHistory(currentUser);

  console.log(orderIndex);
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("confirmDeleteModal")
  );
  modal.hide();
}
// Event Listeners
editButton.addEventListener("click", makeEditable);
saveButton.addEventListener("click", saveChanges);
