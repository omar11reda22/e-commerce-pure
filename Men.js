// fetch data from json File
async function getData() {
  const url = "productData.json";
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
  }
}

// let test = getData();

// Add Data within the container
async function AppendData(jsonData) {
  // jsonData = await getData();

  //console.log(jsonData);

  let containerForProducts = this.document.getElementById("productList");
  // reset container
  let vv = jsonData[2];

  containerForProducts.innerHTML = "";
  jsonData.forEach((product) => {
    containerForProducts.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div id = product class="product   rounded position-relative">
                <img src="${product.image}" alt="Product 1" class="img-fluid rounded" style="height: 300px; object-fit: cover;">
                <h5>${product.name}</h5>
                <p>$${product.price}</p>

                <!-- Overlay that appears on hover -->
                <div class="overlay d-flex align-items-center justify-content-center">
                    <button class="bttn">View Details</button>
                </div>
            </div>
        </div>


        `;

    // after 3s will blur is removed
    setTimeout(() => {
      let products = document.getElementsByClassName("img-fluid");
      for (let i = 0; i < products.length; i++) {
        if (i % 2 == 1) {
          products[i].style.filter = "none";
        }
      }
    }, 3000);

    // after 3s will blur is removed
    setTimeout(() => {
      let products = document.getElementsByClassName("img-fluid");
      for (let i = 0; i < products.length; i++) {
        if (i % 2 == 0) {
          products[i].style.filter = "none";
        }
      }
    }, 5000);
  });
}

window.addEventListener("load", async function () {
  // to append the data from the json file
  let jsonData = await getData();
  AppendData(jsonData);
//   let prdct = document.getElementsByClassName("img-fluid");
//   prdct.addEventListener("mouseover", function () {
//     console.log(this);
//   }); // end of event


let imgs = [
  "/E-commerce/imgs/1.jpg",
  "/E-commerce/imgs/1.jpg",
  "/E-commerce/imgs/1.jpg",
  "/E-commerce/imgs/1.jpg",
  "/E-commerce/imgs/1.jpg",
];

let prdct = this.document.getElementsByClassName('img-fluid');

for(let i =0; i < prdct.length; i++){
let originalsrc = prdct[i].src;
prdct[i].addEventListener('mouseover',function(){
prdct[i].src = imgs[1];
prdct[i].style.transition = ".5s";
});
prdct[i].addEventListener('mouseout',function(){
this.src = originalsrc;
}); // out of hover 

}

// } // end of loop 
// prdct[2].addEventListener('mouseover',function(){
// this.src = "/E-commerce/imgs/1.jpg";
// }); // end 




//   for (let i = 0; i < prdct.length; i++) {
//     prdct[i].addEventListener('mouseover', function() {
      
//     });
 //} // end of loop
 // end of event


  //   let searchInput = this.document.getElementById("searchInput");
  //   searchInput.addEventListener("keyup", function () {
  //     let filterType = document.getElementById("searchBy").value;
  //     console.log(filterType);
  //     let filteredData = jsonData.filter((product) => {
  //       switch (filterType) {
  //         case "name":
  //           return product.name.toLowerCase().includes(searchInput.value);
  //         case "category":
  //           return product.category.toLowerCase().includes(searchInput.value);
  //         // case"price":
  //         //     return product.price.toLowerCase().includes(searchInput.value);
  //       }
  //     }); // end of filteration
  //     AppendData(filteredData);
  //   }); // end of filter
}); // end of load

/*

 <div class="col-md-4 mb-4" id="productInfo">
        <div class="card">
            <img src="${product.image}" class="card-img-top productImage" alt="Product Image">
            <div class="card-body">
                <h5 class="card-title" id="productName">${product.name}</h5>
                <p class="card-text" id="productCategory"><strong>Category:</strong>${product.category}</p>
                <p class="card-text" id="productDescription">${product.category}</p>
                <p class="card-text" id="productPrice"><strong>Price:</strong> $${product.price}</p>
                <button class="btn btn-success">Add to Cart</button>
            </div>
        </div>
    </div>
*/
