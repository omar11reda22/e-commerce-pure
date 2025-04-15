import { GetBrandsName, GetUserById, GetProductById, GetAllBrands, GetBrandIdBasedOnName, GetBrandById, GetAllProducts, product } from "./../../../../finalscript.js"
import { loadnavbar } from "../../../../navbar.js";
let color = "#004985";
loadnavbar(color);
let currentProduct = GetProductById(getCookieValue("deleteProd"));

let userId = Number.parseInt(JSON.parse(localStorage.getItem("currentUser")));


let prodIMG = document.querySelectorAll("#prodIMG img");
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



function GetAllUsers() {
    return JSON.parse(localStorage.getItem("users"))
}

function ShowDeleteConfirmation(product) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            RemoveItme(product.id);
            // window.location.href = "./../../../index.html";

            window.location.href = "/E-commerce/Seller/index.html"
            // LoadProducts();
            // location.reload();
        }
    });
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


function UpdateUserProducts(product) {
    let allusers = GetAllUsers();
    let index = GetIndexOfUser();
    let user = GetUserById(userId);
    user.products = product;
    allusers[index] = user;
    localStorage.setItem("users", JSON.stringify(allusers));

}

function RemoveItme(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    products = products.filter((item) => item.id != id);
    localStorage.setItem("products", JSON.stringify(products));

    // update seller products 
    let user = GetUserById(userId);
    let UpdatedProducts = user.products.filter((prod) => prod != id);
    UpdateUserProducts(UpdatedProducts);
}


document.getElementById("deleteProduct").addEventListener("submit", function (e) {
    e.preventDefault();
    ShowDeleteConfirmation(currentProduct);
});



console.log(currentProduct);
document.getElementById("productBrand").value = GetBrandById(currentProduct.brandId).name;
document.getElementById("productName").value = currentProduct.name;
document.getElementById("productStock").value = currentProduct.stock;
document.getElementById("productPrice").value = currentProduct.price;
document.getElementById("productBrand")
document.querySelector("input[name=gender]:checked");

document.getElementsByName("gender").forEach((element) => {
    if (element.value == currentProduct.gender) {
        element.checked = true;
    }
})

let allImg = document.querySelectorAll(".subImg");
let mainimg = document.getElementById("mainIMG");
allImg.forEach((element) => {
    element.addEventListener("click", function (e) {
        mainimg.src = e.target.src;
    })
})



function RenderIMG() {
    mainimg.src = `${currentProduct.images[0]}`;
    for (var i = 0; i < 3; i++) {
        prodIMG[i].src = `${currentProduct.images[i]}`;
    }
}
RenderIMG();




