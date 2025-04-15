import { loadnavbar } from "../../navbar.js";
function GetMenProduct ()
{
    let menProuct = JSON.parse(localStorage.getItem("products"));
    return menProuct.filter((element) => element.gender == "Men" || element.gender == "Unisex")
}
window.addEventListener("load", function () {
  let color = "White";
  loadnavbar(color);
  let containerForProducts = this.document.getElementById("productList");
  let data = GetMenProduct();

  containerForProducts.innerHTML = "";
  data.forEach((product) => {
    containerForProducts.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="product card p-3 shadow-sm rounded position-relative">
                <img src="${product.images[0]}" alt="Product 1" class="img-fluid rounded" style="height: 300px; object-fit: cover;">
                <h5>${product.name}</h5>
                <p>$${product.price}</p>

                <!-- Overlay that appears on hover -->
                <div class="overlay d-flex align-items-center justify-content-center">
                    <button data-id = ${product.id}  class="btn btn-light btn-lg show-more">View Details</button>
                </div>
            </div>
        </div>
        `;
  });

  // add event in view detail button

  let viewdetails = this.document.querySelectorAll('.show-more');
  viewdetails.forEach((button) => {
    button.addEventListener("click", function (e) {
     let productid = e.target.dataset.id;
      window.location.href = `/E-commerce/Product Details/details.html?id=${productid}`;
    }); // end of event
  }); // end of loaping


// viewdetails.addEventListener('click',function(){
//     alert("say hi");
// });





}) // end of loading 

// 