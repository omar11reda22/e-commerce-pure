import { loadnavbar } from "../../navbar.js";

let color = "Black";
loadnavbar(color);

export function GetAllBrands() {
  return JSON.parse(localStorage.getItem("brands"));
}

// Get brand by ID
export function GetBrandById(id) {
  let brand = null;
  GetAllBrands().forEach((element) => {
    if (element.id == id) {
      brand = element;
    }
  });
  return brand;
}

function GetMenProduct() {
  let allProducts = JSON.parse(localStorage.getItem("products"));
  return allProducts.filter(
    (product) => product.gender === "Men" || product.gender === "Unisex"
  );
}

function ApplyFilters() {
  let priceFilter = document.getElementById("priceFilter").value;
  let brandFilter = document.getElementById("brandFilter").value;
  let products = GetMenProduct();

  if (priceFilter) {
    products = products.filter((product) => {
      let price = parseFloat(product.price);
      if (priceFilter === "0-50") return price < 50;
      if (priceFilter === "50-100") return price >= 50 && price <= 100;
      if (priceFilter === "100-200") return price >= 100 && price <= 200;
      if (priceFilter === "200+") return price > 200;
    });
  }

  if (brandFilter) {
    products = products.filter((product) => product.brandId == brandFilter);
  }

  RenderProducts(products);
}

function RenderProducts(products) {
  let containerForProducts = document.getElementById("productList");
  containerForProducts.innerHTML = "";

  products.forEach((product) => {
    let brand = GetBrandById(product.brandId); // Fetch brand details by brandId
    containerForProducts.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div class="product card p-3 shadow-sm rounded position-relative">
                <img src="${
                  product.images[0]
                }" alt="Product Image" class="img-fluid rounded" style="height: 300px; object-fit: cover;">
                <h5 class="mt-2 text-primary" style="color: #006ea5;">${
                  product.name
                }</h5>
                ${GetSale(product.price, product.previousPrice)}
                <h5 class="text-secondary">Brand: ${
                  brand ? brand.name : "Unknown"
                }</h5>
                <div class="overlay d-flex align-items-center justify-content-center">
                    <button class="btn btn-light btn-lg show-more" style="color: #006ea5; border: 2px solid #006ea5;" data-id="${
                      product.id
                    }">View Details</button>
                </div>
            </div>
        </div>
        `;
  });

  // Bind event listeners after the elements are added to the DOM
  document.querySelectorAll(".show-more").forEach((button) => {
    button.addEventListener("click", function (e) {
      let productId = e.target.dataset.id;
      window.location.href = `/E-commerce/Product Details/details.html?id=${productId}`;
    });
  });
}

function GetSale(price, prevPrice) {
  if (price !== prevPrice) {
    return `
        <div class="d-flex align-items-baseline">
            <strong>Price: </strong>
            <span id="currentPrice" class="text-success ms-2 fw-bold">${price} $</span>
        </div>
        <div class="card-text" id="previousPriceWrapper">
            <del id="previousPrice" class="text-muted">${prevPrice} $</del>
        </div>
        `;
  } else {
    return `
        <div class="d-flex align-items-baseline">
            <strong>Price: </strong>
            <span id="currentPrice" class="text-success ms-2 fw-bold">${price} $</span>
        </div>
        `;
  }
}

function PopulateBrandDropdown() {
  let brandDropdown = document.getElementById("brandFilter");
  brandDropdown.innerHTML = `<option value="">All</option>`; // Default option

  let brands = GetAllBrands();
  brands.forEach((brand) => {
    brandDropdown.innerHTML += `
            <option value="${brand.id}">${brand.name}</option>
        `;
  });
}

// Call functions on page load
window.addEventListener("load", function () {
  PopulateBrandDropdown();
  RenderProducts(GetMenProduct());
});

document.getElementById("applyFilter").addEventListener("click", ApplyFilters);
