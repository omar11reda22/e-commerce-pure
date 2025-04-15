import { loadnavbar } from "../../navbar.js";
window.addEventListener("load", function () {
  let color = "Black";
  loadnavbar(color);
  let allImg = document.querySelectorAll(".subImg");
  let mainImg = document.querySelector(".mainProdImg");
  allImg.forEach((element) => {
    element.addEventListener("click", function (e) {
      mainImg.src = e.target.src;
    });
  });

  // fetching id to show productbyid
  let usrlparam = new URLSearchParams(this.window.location.search);
  let productid = Number(usrlparam.get("id")); // getting id from url
  let products = JSON.parse(this.localStorage.getItem("products"));
  let brand = JSON.parse(this.localStorage.getItem("brands"));
  // this function return a brand
  function getbrandbyid(id) {
    return brand.find((p) => p.id == id);
  }

  let product = products.find((p) => p.id == productid);
  //console.log(product);
  //console.log(getbrandbyid(product.brandId).name);
  if (product) {
    let containerofdetail = this.document.getElementById("product-detail");
    containerofdetail.innerHTML = `
      <div class="row g-4 align-items-center">
    <!-- Product Image -->
    <div class="col-12 col-md-6">
      <img id="main-image" src="${product.images[0]}" 
        class="w-100 h-auto rounded shadow-sm mainProdImg" 
        alt="Main Product Image">
    </div>

    <!-- Product Details -->
    <div class="col-12 col-md-6">
      <h2 class="fw-bold mb-3 text-uppercase">${product.name}</h2>
      <p class="text-muted mb-1"><strong>Brand:</strong> ${
        getbrandbyid(product.brandId).name
      }</p>
      <p class="text-muted mb-1"><strong>Gender:</strong> ${product.gender}</p>
      <p class="text-muted mb-3"><strong>Case Size:</strong> <span class="badge bg-light text-dark fs-6 px-3 py-2 border">3.55 mm</span></p>

      <!-- Quantity Section -->
      <div class="mb-4">
        <h5 class="text-muted mb-2">Quantity:</h5>
        <div class="input-group" style="max-width: 150px;">
          <button id="decrease-btn" class="btn btn-outline-secondary" type="button">-</button>
          <input type="number" id="product-count" class="form-control text-center" value="1" readonly>
          <button id="increase-btn" class="btn btn-outline-secondary" type="button">+</button>
        </div>
        <small id="feedback" class="form-text text-danger d-none">Quantity must be between 1 and 10.</small>
      </div>

      <!-- Add to Cart -->
      <div>
        <button id="add-to-cart-btn" class="btn btn-primary btn-lg px-4 shadow-sm w-35">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
`;
  }

  // decreament and increament count
  let increamentBtn = this.document.getElementById("increase-btn");
  let decreaseBtn = this.document.getElementById("decrease-btn");
  let countValue = this.document.getElementById("product-count");
  decreaseBtn.addEventListener("click", function () {
    if (countValue.value > 1) {
      countValue.value--;
    }
  }); // end of decrease

  increamentBtn.addEventListener("click", function () {
    if (countValue.value < product.stock) {
      countValue.value++;
    }
  }); // end of increament

  let btn = this.document.getElementById("add-to-cart-btn");
  let quantity = this.document.getElementById("product-count");
  btn.addEventListener("click", function () {
    // Prepare the new cart item
    const newcart = {
      id: Number(productid),
      price: product.price,
      name: product.name,
      quantity: Number.parseInt(quantity.value),
    };

    // Retrieve users array and guestCart from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let guestCart = JSON.parse(localStorage.getItem("GuestCart")) || [];

    // Retrieve the current user
    let currentuser = JSON.parse(localStorage.getItem("currentUser")); // null if not logged in

    if (currentuser !== null) {
      // User is logged in
      let user = users.find((p) => p.id == currentuser);
      
      if (!user.cart) {
        user.cart = []; // Initialize the user's cart if not present
      }

      let existingProduct = user.cart.find((item) => item.id == productid);

      if (existingProduct) {
        existingProduct.quantity += Number.parseInt(quantity.value);
      } else {
        user.cart.push(newcart);
      }

      localStorage.setItem("users", JSON.stringify(users)); // Update users in localStorage
    } else {
      // No user logged in: Add to guestCart
      let existingProduct = guestCart.find((item) => item.id == productid);

      if (existingProduct) {
        existingProduct.quantity += Number.parseInt(quantity.value);
      } else {
        guestCart.push(newcart);
      }

      localStorage.setItem("GuestCart", JSON.stringify(guestCart)); // Save guestCart to localStorage
    }

  //  alert("Item saved to cart successfully!");
    // Redirect to the cart page
    window.location.href = "/E-commerce/Cart Design/Cart.html";
  });

}); // end of load
