import { GetBrandById, GetAllProducts, product } from "./finalscript.js";
window,
  addEventListener("load", function () {
    // first will catching a id from url by urlsearchingparam [windows.location.url]

    let usrlparam = new URLSearchParams(this.window.location.search);
    let brandid = Number(usrlparam.get("id"));
    //let brand = JSON.parse(this.localStorage.getItem("brands"));
    // this function return a brand
    let brand = GetBrandById(brandid);
    let container = this.document.getElementById("container");
    let products = getproductsbybrandid(brandid);
    if (brand) {
      container.innerHTML = `
     <div class="row mb-4">
            <div class="col-md-4">
                <img src="${
                  brand.images[0]
                }" alt="Brand Image" class="img-fluid rounded">
            </div>
            <div class="col-md-8">
                <p>${brand.name}</p>
                 <p>${brand.description}</p>
            </div>
        </div>

        <h3>Related Products</h3>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        ${products
          .map(
            (p) => `
            <div class="col">
            <div class="card h-100">
            <img src="${p.images[0]}" class="card-img-top">
            <div class="card-body text-center">
             <h5 class="card-title">${p.name}</h5>
             <p class="card-text">$${p.price}</p>
            </div>
            </div>
            </div>
    
            
            `
          )
          .join("")}
    
    `;
    } else {
      container.innerHTML = `<p>Brand is not found sorry</p>`;
    }
  }); // end of loading

// this function will return collection of products having a brand id semiler id in searching url
function getproductsbybrandid(id) {
  // get all products but having a filter by brand id
  let products = GetAllProducts();
  return products.filter((B) => B.brandId == id);
}

//console.log(getproductsbybrandid(3));
