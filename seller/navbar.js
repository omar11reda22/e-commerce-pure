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
      <a class="nav-link" style="color: ${color};" href="#">Brands</a>
      <a class="nav-link" style="color: ${color};" href="#">Contact Us</a>
    </div>

    <!-- Center -->
    <a class="navbar-brand mx-auto text-center" style="color: ${color};" href="/E-commerce/Home.html">
      Wristly
    </a>

    <!-- Right side -->
    <div class="navbar-nav ms-auto">
      <a class="nav-link" style="color: ${color};" href="#">Best Seller</a>
      <a class="nav-link" style="color: ${color};" href="#">New Arrival</a>
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
        <a class="nav-link" style="color: ${color};" href="#">Best Seller</a>
        <a class="nav-link" style="color: ${color};" href="/E-commerce/Admin panel/home.html">Admin panel</a>
      </div>

      <!-- Center -->
      <a class="navbar-brand mx-auto text-center" style="color: ${color};" href="/E-commerce/Home.html">
       Wristly
      </a>

      <!-- Right side -->
      <div class="navbar-nav ms-auto sign-out">
        <span class="nav-link" style="color: ${color};">Hello <strong>${emailuser}</strong></span>
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
        <a class="nav-link" style="color: ${color};" href="#">Best Seller</a>
        <a class="nav-link" style="color: ${color};" href="#">New Arrival</a>
      </div>

      <!-- Center -->
      <a class="navbar-brand mx-auto text-center" style="color: ${color};" href="/E-commerce/Home.html">
      Wristly
      </a>

      <!-- Right side -->
      <div class="navbar-nav ms-auto sign-out">
        <span class="nav-link" style="color: ${color};">Hello <strong>${emailuser}</strong></span>
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
  }

  // Handle signout event
  let signout = document.getElementById("signout");
  signout.addEventListener("click", function () {
    sessionStorage.removeItem("email");
    localStorage.setItem("currentUser", JSON.stringify(null));
    navv.style.display = "none";
    window.location.reload();
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
