import { database } from './script.js';
import { GetUserById, GetProductById, SaveDataToLocalStorage } from './script.js';

let cart;
const cartTable = document.getElementById("cartTable");
const subtotalCell = document.getElementById("subtotal");

let itemToDelete = null; // To hold the item that the user wants to delete

// Function to load the cart from the user data if logged in
function loadUserCart() {
    if (database.currentUser) {
        const user = GetUserById(database.currentUser);
        if (user.cart) {
            cart = user.cart;
            loadCart(); // Load the cart if available
        }
    } else {
        cart = database.guestCart; // If no user is logged in, use guest cart
        loadCart(); // Load cart for guest
    }
}

// Function to save the cart to the user data if logged in
function saveUserCart() {
    if (database.currentUser) {
        const user = GetUserById(database.currentUser);
        user.cart = cart; // Save cart to user data
        SaveDataToLocalStorage(database); // Save the data to local storage
    } else {
        database.guestCart = cart; // Save guest cart to the database
        SaveDataToLocalStorage(database); // Save the data to local storage
    }
}

// Load the cart based on whether the user is logged in or not
loadUserCart();

// Check if cart is empty or not
checkEmptyCart();

// Load the cart data
function loadCart() {
    cartTable.innerHTML = ''; // Clear the table before reloading it

    cart.forEach(item => {
        let product = GetProductById(item.id);

        // Create a new row for each item
        let row = document.createElement('tr');
        row.setAttribute('data-id', item.id); // Set a unique data-id for each row

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>
                <input type="number" min="1" max="${product.stock}" class="form-control w-25 quantity-input" value="${item.quantity}" data-id="${item.id}">
            </td>
            <td class="item-total">${(product.price * item.quantity).toFixed(2)}</td>
            <td><button class="btn btn-danger delete-btn" data-id="${item.id}">X</button></td>
        `;
        
        // Append the row to the table
        cartTable.appendChild(row);
    });

    // Attach event listeners to the delete buttons and quantity inputs
    attachEventListeners();

    // Update the total calculation
    getTotal();
}

// Check if the cart is empty and update the cart table accordingly
function checkEmptyCart() {
    if (cart.length === 0) {
        cartTable.innerHTML = `<tr><td colspan="5" class="text-center">Your cart is empty. Start shopping!</td></tr>`;
        document.querySelector('.btn-success').disabled = true; // Disable checkout button
    } else {
        document.querySelector('.btn-success').disabled = false; // Enable checkout button
        loadCart(); // Load cart if it's not empty
    }
}

// Delete row function outside of loadCart
function deleteRow(id) {
    if (database.currentUser == null) {
        // Handle guest cart (remove item from guest cart)
        let itemIndex = database.guestCart.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            database.guestCart.splice(itemIndex, 1); // Remove item from guest cart
        }
    } else {
        // Handle user cart (remove item from user cart)
        let user = GetUserById(database.currentUser);
        let itemIndex = user.cart.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            user.cart.splice(itemIndex, 1); // Remove item from user cart
        }
    }
    loadCart(); // Re-load the cart to reflect the changes
    saveUserCart(); // Save the updated cart data
}

// Attach event listeners to delete buttons and quantity input fields
function attachEventListeners() {
    // Delete button event listener
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(button.getAttribute('data-id'));
            // Set the item to be deleted
            itemToDelete = itemId;

            // Show the modal
            const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
            modal.show();
        });
    });

    // Quantity input event listener
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach(input => {
        input.addEventListener('input', function() {
            const itemId = parseInt(input.getAttribute('data-id'));
            const newQuantity = parseInt(input.value);

            updateCartItemQuantity(itemId, newQuantity); // Update the cart with the new quantity
            getTotal(); // Recalculate the total
        });
    });

    // Confirm deletion action
    document.getElementById('confirmDeleteButton').addEventListener('click', function() {
        if (itemToDelete !== null) {
            deleteRow(itemToDelete); // Perform the deletion
        }

        // Hide the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('confirmDeleteModal'));
        modal.hide();
    });
}

// Update the quantity of an item in the cart
function updateCartItemQuantity(id, quantity) {
    if (database.currentUser == null) {
        // Update guest cart
        let item = database.guestCart.find(item => item.id === id);
        if (item) {
            item.quantity = quantity;
        }
    } else {
        // Update user cart
        let user = GetUserById(database.currentUser);
        let item = user.cart.find(item => item.id === id);
        if (item) {
            item.quantity = quantity;
        }
    }
    saveUserCart(); // Save updated cart data to local storage
}

// Function to calculate and display the total and subtotal
function getTotal() {
    let total = 0;

    // Loop through cart and calculate the total price
    cart.forEach(item => {
        let product = GetProductById(item.id);
        let itemTotal = product.price * item.quantity;

        // Update the subtotal for each item (price * quantity)
        const itemRow = document.querySelector(`tr[data-id="${item.id}"]`);
        const itemTotalCell = itemRow.querySelector('.item-total');
        itemTotalCell.textContent = itemTotal.toFixed(2);

        // Add to the overall total
        total += itemTotal;
    });

    // Update the subtotal display in the tfoot section
    subtotalCell.textContent = total.toFixed(2);
}

//
