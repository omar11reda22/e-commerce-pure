
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('form.needs-validation');
        
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

        // Custom validation for form submission
        form.addEventListener('submit', function(event) {
            let isValid = true;

            // Validate first name
            if (!firstName.value.trim() || !nameRegex.test(firstName.value.trim())) {
                firstNameError.textContent = 'First name is required (2-50 characters, letters only, no numbers or special characters).';
                firstNameError.style.display = 'block';
                isValid = false;
            } else {
                firstNameError.style.display = 'none';
            }

            // Validate last name
            if (!lastName.value.trim() || !nameRegex.test(lastName.value.trim())) {
                lastNameError.textContent = 'Last name is required (2-50 characters, letters only, no numbers or special characters).';
                lastNameError.style.display = 'block';
                isValid = false;
            } else {
                lastNameError.style.display = 'none';
            }

            // Validate mobile number
            if (!mobileRegex.test(mobileNumber.value.trim())) {
                mobileNumberError.textContent = 'Please enter a valid mobile number (e.g., +2012345678).';
                mobileNumberError.style.display = 'block';
                isValid = false;
            } else {
                mobileNumberError.style.display = 'none';
            }

            // Validate email
            if (email.value.trim() && !emailRegex.test(email.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }

            // Validate address
            if (!address.value.trim()) {
                addressError.textContent = 'Shipping address is required.';
                addressError.style.display = 'block';
                isValid = false;
            } else {
                addressError.style.display = 'none';
            }

            // Validate governorate selection
            if (governorate.value === '') {
                governorateError.textContent = 'Please select a valid governorate.';
                governorateError.style.display = 'block';
                isValid = false;
            } else {
                governorateError.style.display = 'none';
            }

            // Validate city input
            if (!city.value.trim()) {
                cityError.textContent = 'City is required.';
                cityError.style.display = 'block';
                isValid = false;
            } else {
                cityError.style.display = 'none';
            }

            // If any of the fields are invalid, prevent form submission
            if (!isValid) {
                event.preventDefault();
            }
        });

        // Dynamically add or remove valid/invalid feedback based on user input
        form.addEventListener('input', function(event) {
            const target = event.target;

            if (target.value.trim()) {
                target.classList.add('is-valid');
                target.classList.remove('is-invalid');
            } else {
                target.classList.add('is-invalid');
                target.classList.remove('is-valid');
            }
        });
    });
  






////////////////////////////////////////////////////////






    document.addEventListener('DOMContentLoaded', function() {
        const orderSummaryTable = document.getElementById("orderSummaryTable");
        const orderSubtotalCell = document.getElementById("orderSubtotal");
    
        // Load cart data from localStorage
        const cartData = loadCartFromLocalStorage();
    
        if (cartData && cartData.guestCart) {
            const cart = cartData.guestCart; // If the user is a guest
            displayOrderSummary(cart);
        } else if (cartData && cartData.currentUser) {
            const user = GetUserById(cartData.currentUser);
            const cart = user.cart; // If the user is logged in
            displayOrderSummary(cart);
        } else {
            orderSummaryTable.innerHTML = `<tr><td colspan="4" class="text-center">Your cart is empty.</td></tr>`;
        }
    
        function displayOrderSummary(cart) {
            let total = 0;
            cart.forEach(item => {
                let product = GetProductById(item.id);
                let itemTotal = product.price * item.quantity;
    
                // Add row for each cart item
                let row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>${item.quantity}</td>
                    <td>${itemTotal.toFixed(2)}</td>
                `;
                orderSummaryTable.appendChild(row);
    
                // Add to the total
                total += itemTotal;
            });
    
            // Update the subtotal in the footer
            orderSubtotalCell.textContent = total.toFixed(2);
        }
    });
    