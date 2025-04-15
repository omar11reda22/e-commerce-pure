import { GetBrandsName, GetProductById, GetAllBrands,GetBrandIdBasedOnName, GetBrandById, GetAllProducts, product } from "./../../../../finalscript.js"

import { loadnavbar } from "../../../../navbar.js";
let color = "#004985";
loadnavbar(color);
let currentProduct = GetProductById(Number.parseInt(localStorage.getItem("SaleId")));

console.log(currentProduct);

let currentdate = new Date();


function GetIndexOfProduct() {
    let prodIndex;
    let products = GetAllProducts();
    products.forEach((prod, index) => {
        if (prod.id == currentProduct.id) {
            prodIndex = index;
        }
    })
    return prodIndex;
}



function getCookieValue(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}




function GetBrandsWithNames() {
    let alloptions = GetBrandsName();
    let container = document.getElementById("productBrand");
    alloptions.forEach((option) => {
        let element = `<option value="${option}">${option}</option>`
        // console.log(element);
        container.innerHTML += `<option value="${option}">${option}</option>`;
    })
}
GetBrandsWithNames();


document.getElementsByName("gender").forEach((element) => {
    if (element.value == currentProduct.gender) {
        element.checked = true;
    }
})





document.getElementById("productBrand").value = GetBrandById(currentProduct.brandId).name;
document.getElementById("productName").value = currentProduct.name;
document.getElementById("productStock").value = currentProduct.stock;
document.getElementById("productPreviousPrice").value = currentProduct.previousPrice;
document.getElementById("productCurrentPrice").value = currentProduct.price;


document.getElementById("productBrand")
document.querySelector("input[name=gender]:checked");




let isValid = true;


let prodName = document.getElementById("productName");
let prodStock = document.getElementById("productStock");
let prodBrand = document.getElementById("productBrand");
let prodGender = document.querySelector("input[name=gender]:checked");
let prodCurrentPrice = document.getElementById("productCurrentPrice");
let prodPreviousPrice = document.getElementById("productPreviousPrice");


function validateProdCurrentPrice() {
    if (isNaN(prodCurrentPrice.value) || Number.parseInt(prodCurrentPrice.value) < 1) {
        document.getElementById("prodCurrentPrice").innerHTML = "Invalid Entry";
        isValid = false;
    } else if (Number.parseInt(prodCurrentPrice.value) >= Number.parseInt(prodPreviousPrice.value))
    {
        document.getElementById("prodCurrentPrice").innerHTML = "Current price Must Be Lower than previous price";
        isValid = false;
    }
     else {
        document.getElementById("prodCurrentPrice").innerHTML = "";
        isValid = true;
    } 
}

function validateProdPreviousPrice ()
{
    if (prodPreviousPrice.value.trim() == "")
    {
        document.getElementById("prodPreviousPrice").innerHTML = "Price Required!";
        isValid = false;
    } else if (isNaN(prodPreviousPrice.value) || Number.parseInt(prodPreviousPrice.value) < 1) {
        document.getElementById("prodPreviousPrice").innerHTML = "Invalid Entry";
        isValid = false;
    }else if (Number.parseInt(prodCurrentPrice.value) > Number.parseInt(prodPreviousPrice.value))
    {
        document.getElementById("prodPreviousPrice").innerHTML = "Current price Must Be Higher than previous price";
        isValid = false;
    }
    else {
        document.getElementById("prodPreviousPrice").innerHTML = "";
        isValid = true;
    }
}


prodCurrentPrice.addEventListener("keyup", validateProdCurrentPrice);
prodPreviousPrice.addEventListener("keyup", validateProdPreviousPrice);



document.getElementById("UpdateProduct").addEventListener("submit", function (e) {

    e.preventDefault();


    validateProdCurrentPrice();
    validateProdPreviousPrice();

    let errorMSG = document.querySelectorAll("error");
    errorMSG.forEach((error) => error.innerHTML = "");

    let isValid = true;

    if (isValid) {



        // let brandid = GetBrandIdBasedOnName(prodBrand.value);

        // let CreatedProduct = new product(currentProduct.id, prodName.value, Number.parseFloat(prodCurrentPrice.value), Number.parseInt(prodStock.value), currentProduct.sales, brandid, currentProduct.date, images, prodGender.value)
        let allProducts = GetAllProducts();

        if (prodCurrentPrice.value.trim() == "")
        {
            prodCurrentPrice.value = prodPreviousPrice.value;
        }

        currentProduct.price = Number.parseFloat(prodCurrentPrice.value);
        currentProduct.previousPrice = Number.parseFloat(prodPreviousPrice.value);
        console.log(currentProduct);

        allProducts[GetIndexOfProduct()] = currentProduct;



        localStorage.setItem("products", JSON.stringify(allProducts));
        window.location.href = "/E-commerce/Seller/pages/ui-features/SalesManagement.html";

    }
})