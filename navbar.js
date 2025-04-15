export function loadnavbar(color) {
  let navv = document.getElementById("navv");

  let emailuser = sessionStorage.getItem("email");
  // If no one is logged in
  if (!emailuser) {
    navv.style.display = "block";
    navv.innerHTML = `
            <nav class="navbar navbar-expand-lg" style="color: ${color};">
  <div class="container-fluid">
    <!-- Left side -->
    <div class="navbar-nav me-auto">
      <a class="nav-link" style="color: ${color};" href="#bb" id="brandLink">Brands</a>
      <a class="nav-link" style="color: ${color};" href="#contact">Contact Us</a>
    </div>

    <!-- Center -->
    <a class="navbar-brand mx-auto text-center" style="color: ${color};" href="/E-commerce/Home.html">
      Wristly
    </a>

    <!-- Right side -->
    <div class="navbar-nav ms-auto">
      <a class="nav-link" style="color: ${color};" href="#best" id = "bestlink">Best Seller</a>
      <a class="nav-link" style="color: ${color};" href="#new" id = "newlink">New Arrival</a>
      <a class="nav-link" style="color: ${color};" href="/E-commerce/authentication/login/login.html" title="Sign In">
        <i class="bi bi-person"></i>
      </a>
      <a class="nav-link" style="color: ${color};" href="/E-commerce/Cart Design/Cart.html" title="Cart">
        <i class="bi bi-cart3"></i>
      </a>
    </div>
  </div>
</nav>
  `;
    attachEventListeners();
    return;
  }

  // If a user is logged in
  let accounttype = getaccounttype(emailuser);
  if (accounttype === "Admin") {
    navv.style.display = "block";
    navv.innerHTML = `
   <nav class="navbar navbar-expand-lg" style="color: ${color};">
    <div class="container-fluid">
      <!-- Left side -->
      <div class="navbar-nav me-auto">
        <a class="nav-link" style="color: ${color};" href="#best" id = "bestlink">Best Seller</a>
        <a class="nav-link" style="color: ${color};" href="/E-commerce/Admin panel/home.html">Admin panel</a>
      </div>

      <!-- Center -->
      <a class="navbar-brand mx-auto text-center" style="color: ${color};" href="/E-commerce/Home.html">
       Wristly
      </a>

      <!-- Right side -->
      <div class="navbar-nav ms-auto sign-out">
        <span class="nav-link" id="userEmail" style="color: ${color};">Hello <strong >${emailuser}</strong></span>
        <a id="signout" class="nav-link" style="color: ${color};" href="#" title="Sign Out">
          <i class="bi bi-box-arrow-right"></i>
        </a>
      </div>
    </div>
  </nav>
  `;
  }else if (accounttype === "Seller") {
    navv.style.display = "block";
    navv.innerHTML = `
      <nav class="navbar navbar-expand-lg" style="color: ${color};">
        <div class="container-fluid">
          <!-- Left side -->
          <div class="navbar-nav me-auto">
            <a class="nav-link" style="color: ${color};" href="/E-commerce/Seller/index.html">Seller Dashboard</a>
            <a class="nav-link" style="color: ${color};" href="#products" id="productsLink">My Products</a>
          </div>

          <!-- Center -->
          <a class="navbar-brand mx-auto text-center" style="color: ${color};" href="/E-commerce/Home.html">
            Wristly
          </a>

          <!-- Right side -->
          <div class="navbar-nav ms-auto sign-out">
            <span class="nav-link" id="userEmail" style="color: ${color}; cursor: pointer;">Hello <strong>${emailuser}</strong></span>
            <a id="signout" class="nav-link" style="color: ${color};" href="#" title="Sign Out">
              <i class="bi bi-box-arrow-right"></i>
            </a>
          </div>
        </div>
      </nav>
    `; 
  
   } else {
    navv.style.display = "block";
    navv.innerHTML = `
   <nav class="navbar navbar-expand-lg" style="color: ${color};">
    <div class="container-fluid">
      <!-- Left side -->
      <div class="navbar-nav me-auto">
        <a class="nav-link" style="color: ${color};" href="#best" id = "bestlink">Best Seller</a>
        <a class="nav-link" style="color: ${color};" href="#new" id = "newlink">New Arrival</a>
        <a class="nav-link" style="color: ${color};" href="#bb" id="brandLink">Brands</a>
      </div> 

      <!-- Center -->
      <a class="navbar-brand mx-auto text-center" style="color: ${color};" href="/E-commerce/Home.html">
      Wristly
      </a>

      <!-- Right side -->
      <div class="navbar-nav ms-auto sign-out">
        <span class="nav-link" id="userEmail" style="color: ${color};">Hello <strong>${emailuser}</strong></span>
        <a id="signout" class="nav-link" style="color: ${color};" href="#" title="Sign Out">
          <i class="bi bi-box-arrow-right"></i>
        </a>
        <a class="nav-link" style="color: ${color};" href="/E-commerce/Cart Design/Cart.html" title="Cart">
          <i class="bi bi-cart3"></i>
        </a>
      </div>
    </div>
  </nav>
  `;
    attachEventListeners();

  }
  
 let userEmail = document.getElementById("userEmail");
 if (userEmail) {
   userEmail.addEventListener("click", () => {
     window.location.href = "/E-commerce/userprofile/UserProfile.html";
   });
 }



function attachEventListeners() {
  let brandLink = document.getElementById("brandLink");
  if (brandLink) {
    brandLink.addEventListener("click", (event) => {
      event.preventDefault();
      const brandSection = document.getElementById("bb"); // Locate the Brands section
      if (brandSection) {
        brandSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  let bestLink = document.getElementById("bestlink");
  if (bestLink) {
    bestLink.addEventListener("click", (event) => {
      event.preventDefault();
      const bestSection = document.getElementById("best");
      if (bestSection) {
        bestSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  let newLink = document.getElementById("newlink");
  if (newLink) {
    newLink.addEventListener("click", (event) => {
      event.preventDefault();
      const newSection = document.getElementById("new");
      if (newSection) {
        newSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
}




  // Handle signout event
  let signout = document.getElementById("signout");
  signout.addEventListener("click", function () {
    sessionStorage.removeItem("email");
    localStorage.setItem("currentUser", JSON.stringify(null));
    navv.style.display = "none";
    window.location.href = "/E-commerce/Home.html";
  });
}

let userss = JSON.parse(localStorage.getItem("users"));
function getaccounttype(email) {
  let type = null;
  userss.forEach((element) => {
    if (element.email == email) {
      type = element.accountType;
    }
  });
  return type;
}


