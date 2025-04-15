import { GetBrandsName, GetProductById, GetAllBrands,GetBrandIdBasedOnName, GetBrandById, GetAllProducts, product } from "./../../../script.js"
// import { GetBrandsWithNames } from "./../AddProduct/AddProduct.js";

// import {validateProdName, validateProdPrice, validateProdStock, validateProdBrand, validateProdGender} from "./../AddProduct/AddProduct.js"



let currentProduct = GetProductById(getCookieValue("updateProd"));

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



console.log(currentProduct.id);

document.getElementsByName("gender").forEach((element) => {
    if (element.value == currentProduct.gender) {
        element.checked = true;
    }
})










document.getElementById("productBrand").value = GetBrandById(currentProduct.brandId).name;
document.getElementById("productName").value = currentProduct.name;
document.getElementById("productStock").value = currentProduct.stock;
document.getElementById("productPrice").value = currentProduct.price;
document.getElementById("productBrand")
document.querySelector("input[name=gender]:checked");




let isValid = true;


let prodName = document.getElementById("productName");
let prodStock = document.getElementById("productStock");
let prodPrice = document.getElementById("productPrice");
let prodBrand = document.getElementById("productBrand");
let prodGender = document.querySelector("input[name=gender]:checked");
let productPhotoOne = document.getElementById("productImgOne");
let productPhotoTwo = document.getElementById("productImgTwo");
let productPhotoThree = document.getElementById("productImgThree");
const allowedExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];



function validateProdName() {
    if (prodName.value.trim() === "") {
        document.getElementById("prodName").innerHTML = "Product Name Is Required!";
        isValid = false;
    } else {
        document.getElementById("prodName").innerHTML = "";
        isValid = true;
    }
}

function validateProdPrice() {
    if (prodPrice.value.trim() === "") {
        document.getElementById("prodPrice").innerHTML = "Price Required!";
        isValid = false;
    } else if (isNaN(prodPrice.value) || Number.parseInt(prodPrice.value) < 1) {
        document.getElementById("prodPrice").innerHTML = "Invalid Entry";
        isValid = false;
    } else {
        document.getElementById("prodPrice").innerHTML = "";
        isValid = true;
    }
}


function validateProdStock() {
    if (prodStock.value.trim() === "" || Number.parseInt(prodStock.value) < 1) {
        document.getElementById("prodStock").innerHTML = "Invalid Entry!";
        isValid = false;
    } else if (isNaN(prodStock.value)) {
        document.getElementById("prodStock").innerHTML = "Price Should be a Number";
        isValid = false;
    } else {
        document.getElementById("prodStock").innerHTML = "";
        isValid = true;
    }
}


function validateProdBrand() {
    if (prodBrand.value === "") {
        document.getElementById("prodBrand").innerHTML = "Brand Is Required";
        isValid = false;
    } else {
        document.getElementById("prodBrand").innerHTML = "";
        isValid = true;
    }
}


function validateProdGender() 
{
    let prodGender = document.querySelector("input[name=gender]:checked");
    console.log(prodGender);
    if (!prodGender) 
    { 
        document.getElementById("prodGender").innerHTML = "Product Gender is required!"; 
        isValid = false; 
    } else 
    { 
        document.getElementById("prodGender").innerHTML = ""; 
        isValid = true; 
    } 
}







prodName.addEventListener("keyup", validateProdName);
prodPrice.addEventListener("keyup", validateProdPrice);
prodStock.addEventListener("keyup", validateProdStock);
prodBrand.addEventListener("change", validateProdBrand);

document.getElementsByName("gender").forEach(radio => { radio.addEventListener("change", validateProdGender); });

















document.getElementById("UpdateProduct").addEventListener("submit", function (e) {

    e.preventDefault();

    // Call all validation functions before form submission
    validateProdName();
    validateProdPrice();
    validateProdStock();
    validateProdBrand();



    // validateProductPhoto(productPhotoOne, "prodImgOne");
    // validateProductPhoto(productPhotoTwo, "prodImgTwo");
    // validateProductPhoto(productPhotoThree, "prodImgThree");
    validateProdGender();

    




    let errorMSG = document.querySelectorAll("error");
    errorMSG.forEach((error) => error.innerHTML = "");

    let isValid = true;

    // let prodName = document.getElementById("productName");
    // let prodStock = document.getElementById("productStock");
    // let prodPrice = document.getElementById("productPrice");
    // let prodBrand = document.getElementById("productBrand");
    // let prodGender = document.querySelector("input[name=gender]:checked");
    // let productPhotoOne = document.getElementById("productImgOne");
    // let productPhotoTwo = document.getElementById("productImgTwo");
    // let productPhotoThree = document.getElementById("productImgThree");
    // const allowedExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];


    // if (prodName.value.trim() == "") {
    //     document.getElementById("prodName").innerHTML = "Product Name Is Required !";
    //     isValid = false;
    // }

    // if (prodPrice.value.trim() == "") {
    //     document.getElementById("prodPrice").innerHTML = "Price Required !";
    //     isValid = false;
    // } else if (isNaN(prodPrice.value) || Number.parseInt(prodPrice.value) < 1) {
    //     document.getElementById("prodPrice").innerHTML = "Invalid Entry ";
    //     isValid = false;
    // } 

    // if (prodStock.value.trim() == "" || Number.parseInt(prodStock.value) < 1) {
    //     document.getElementById("prodStock").innerHTML = "Invalid Entry !";
    //     isValid = false;
    // } else if (isNaN(prodStock.value)) {
    //     document.getElementById("prodStock").innerHTML = "Prict Should be Number";
    //     isValid = false;
    // }

    // console.log(prodBrand.value)

    // if (prodBrand.value == "") {
    //     document.getElementById("prodBrand").innerHTML = "Brand Is Required";
    //     isValid = false;
    // }


    // if (prodGender == null) {
    //     document.getElementById("prodGender").innerHTML = "Product Gender is required!"
    //     isValid = false;
    // }


    let images = [];

    if (productPhotoOne.value == "") {
        images.push(currentProduct.images[0]);

    } else if (productPhotoOne.value != "") {
        let chkTypeimgOne = productPhotoOne.value.split("\\");
        let extenstion = chkTypeimgOne.pop().split(".").pop()

        let testOne = allowedExtensions.some((extention) => {
            return extention.toLowerCase() == extenstion.toLowerCase();
        })
        if (!testOne) {
            document.getElementById("prodImgOne").innerHTML = "Must Be From Type Image";
            isValid = false;
        } else {
            images.push(productPhotoOne.value.split("\\").pop());
        }

    }

    if (productPhotoTwo.value == "") {
        images.push(currentProduct.images[1]);
    } else if (productPhotoTwo.value != "") {
        let chkTypeimgTWo = productPhotoTwo.value.split("\\");
        let extenstion = chkTypeimgTWo.pop().split(".").pop()
        let testTwo = allowedExtensions.some((extention) => {
            return extention.toLowerCase() == extenstion.toLowerCase();
        })
        if (!testTwo) {
            document.getElementById("prodImgTwo").innerHTML = "Must Be From Type Image";
            isValid = false;
        } else {
            images.push(productPhotoTwo.value.split("\\").pop());
        }

    }


    if (productPhotoThree.value == "") {
        images.push(currentProduct.images[2]);
    } else if (productPhotoThree.value != "") {
        let chkTypeimgThree = productPhotoThree.value.split("\\");
        let extenstion = chkTypeimgThree.pop().split(".").pop();
        let testThree = allowedExtensions.some((extention) => {
            return extention.toLowerCase() == extenstion.toLowerCase();
        })
        if (!testThree) {
            document.getElementById("prodImgOne").innerHTML = "Must Be From Type Image";
            isValid = false;
        } else {
            images.push(productPhotoThree.value.split("\\").pop());
        }
    }





    if (isValid) {
        let brandid = GetBrandIdBasedOnName(prodBrand.value);

        let CreatedProduct = new product(currentProduct.id, prodName.value, Number.parseFloat(prodPrice.value), Number.parseInt(prodStock.value), currentProduct.sales, brandid, currentProduct.date, images, prodGender.value)
        // console.log(CreatedProduct);
        let allProducts = GetAllProducts();
        allProducts[GetIndexOfProduct()] = CreatedProduct;
        localStorage.setItem("products", JSON.stringify(allProducts));
        window.location.href = "./../../../index.html"

    }
})