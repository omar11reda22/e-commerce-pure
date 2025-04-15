import { GetAllBrands,
        GetUserById,
        GetAllProducts,
        product,
        GetBrandsName,
        GetBrandIdBasedOnName 
    } from "./../../../script.js"


function GetAllUsers() {
    return JSON.parse(localStorage.getItem("users"))
}

function GetIndexOfUser() {
    let UserIndex;
    let users = GetAllUsers();
    users.forEach((user, index) => {
        if (user.id == userId) {
            return UserIndex = index;
        }
    })
    return UserIndex;
}

function UpdateUserData(_id) {
    let allusers = GetAllUsers();
    let index = GetIndexOfUser();
    let user = GetUserById(userId);
    user.products.push(Number.parseInt(_id));
    allusers[index] = user;
    localStorage.setItem("users", JSON.stringify(allusers));
}




let userId = Number.parseInt(JSON.parse(localStorage.getItem("currentUser")));


function GetAppropriateId() {
    let flag = true;
    let products = GetAllProducts();
    let createdid = 0;
    do {
        createdid = (Math.random() * 1000).toFixed();
        products.forEach((product) => {
            if (product.id == createdid) {
                flag = true;
            } else {
                flag = false;
            }
        })

    } while (flag);
    return createdid;
}




function GetBrandsWithNames() {
    let alloptions = GetBrandsName();
    let container = document.getElementById("productBrand");
    alloptions.forEach((option) => {
        let element = `<option value="${option}">${option}</option>`
        container.innerHTML += `<option value="${option}">${option}</option>`;
    })
}
GetBrandsWithNames();


let prodName = document.getElementById("productName");
let prodStock = document.getElementById("productStock");
let prodPrice = document.getElementById("productPrice");
let prodBrand = document.getElementById("productBrand");
let prodGender = document.querySelector("input[name=gender]:checked");
let productPhotoOne = document.getElementById("productImgOne");
let productPhotoTwo = document.getElementById("productImgTwo");
let productPhotoThree = document.getElementById("productImgThree");
const allowedExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];



let currentdate = new Date();

let isValid = true;

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





function validateProductPhoto(photoElement, errorElementId) {
    if (photoElement.value === "") {
        document.getElementById(errorElementId).innerHTML = "Required Field!";
        isValid = false;
    } else {
        let extension = photoElement.value.split("\\").pop().split(".").pop();
        let test = allowedExtensions.some(ext => ext.toLowerCase() === extension.toLowerCase());
        if (!test) {
            document.getElementById(errorElementId).innerHTML = "Must Be From Type Image";
            isValid = false;
        } else {
            document.getElementById(errorElementId).innerHTML = "";
            isValid = true;
        }
    }
}




document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sidebarCollapse').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('collapsed');
    });
});










// register events 
prodName.addEventListener("keyup", validateProdName);
prodPrice.addEventListener("keyup", validateProdPrice);
prodStock.addEventListener("keyup", validateProdStock);
prodBrand.addEventListener("change", validateProdBrand);

document.getElementsByName("gender").forEach(radio => { radio.addEventListener("change", validateProdGender); });


productPhotoOne.addEventListener("change", function () {
    validateProductPhoto(productPhotoOne, "prodImgOne");
});
productPhotoTwo.addEventListener("change", function () {
    validateProductPhoto(productPhotoTwo, "prodImgTwo");
});
productPhotoThree.addEventListener("change", function () {
    validateProductPhoto(productPhotoThree, "prodImgThree");
});

document.getElementById("CreateProd").addEventListener("submit", function (e) {
    e.preventDefault();

    // Call all validation functions before form submission
    validateProdName();
    validateProdPrice();
    validateProdStock();
    validateProdBrand();
    validateProductPhoto(productPhotoOne, "prodImgOne");
    validateProductPhoto(productPhotoTwo, "prodImgTwo");
    validateProductPhoto(productPhotoThree, "prodImgThree");
    validateProdGender();

    console.log(isValid)

    if (isValid) {
        let NewId = Number.parseInt(GetAppropriateId());
        let brandid = GetBrandIdBasedOnName(prodBrand.value);
        let date = `${currentdate.getFullYear()}-${currentdate.getMonth()}-${currentdate.getDate()}`;
        let images = [productPhotoOne.value.split("\\").pop(), productPhotoTwo.value.split("\\").pop(), productPhotoThree.value.split("\\").pop()];
        // console.log(NewId);
        // console.log(prodName.value);
        // console.log(prodPrice.value);
        // console.log(prodStock.value);
        // console.log(prodGender);
        // console.log(brandid);
        // console.log(date);
        // console.log(images);

        let CreatedProduct = new product(NewId, prodName.value, Number.parseFloat(prodPrice.value), Number.parseInt(prodStock.value), 0, brandid, date, images, document.querySelector("input[name=gender]:checked").value);
        let products = GetAllProducts();
        products.push(CreatedProduct);
        localStorage.setItem("products", JSON.stringify(products));
        UpdateUserData(NewId);
        window.location.href = "./../../../index.html";
    }
});