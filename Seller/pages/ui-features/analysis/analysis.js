import { GetCurrentUser, GetUserById, GetBrandById, GetAllProducts, GetAllOrders, RemoveProduct, GetProductById } from "./../../../../finalscript.js";

let userId = Number.parseInt(JSON.parse(localStorage.getItem("currentUser")));


import { loadnavbar } from "../../../../navbar.js";
let color = "#004985";
loadnavbar(color);


function GetProductRelatedToSeller(id) {
    // console.log(GetCurrentUser())
    let user = GetUserById(id);
    // console.log(user);
    let prodIds = user.products;
    // console.log(prodIds);
    let products = GetAllProducts();
    // console.log(products);
    return products.filter(product => prodIds.includes(product.id));
}



export function getTotalEarnForTheordersRelated() {
    let count = 0;
    let producuts = GetProductRelatedToSeller(userId);
    let allorders = GetAllOrders();
    producuts.forEach((prod) => {
        allorders.forEach((order) => {
            if (order.status == "Shipped") {
                order.items.forEach((item) => {
                    if (item.id == prod.id) {
                        count += item.price*item.quantity;
                    }
                })
            }
        })
    })

    return count;
}

// total earn 


if (getTotalEarnForTheordersRelated() == 0)
{
    document.getElementById("earn").innerHTML = "No Revenue";
}else 
{
    document.getElementById("earn").innerHTML = getTotalEarnForTheordersRelated() + " $";
}


let products = GetProductRelatedToSeller(userId);

// max product 
let maxOne = products.reduce((max, item) => (item.sales > max.sales ? item : max));
console.log(maxOne)



// document.getElementById("MShipped").innerHTML = maxOne.name;
// document.getElementById("MnumOfSale").innerHTML += maxOne.sales;


// min product
let lowOne = products.reduce((min, item) => (item.sales < min.sales ? item : min));
console.log(lowOne);


// document.getElementById("LShipped").innerHTML = lowOne.name;
// document.getElementById("LnumOfSale").innerHTML += lowOne.sales;

if (maxOne.sales == lowOne.sales && maxOne.sales > 0)
{
    document.getElementById("sales").classList.remove("d-none");
    document.getElementById("MShipped").innerHTML = maxOne.name;
    document.getElementById("MnumOfSale").innerHTML += maxOne.sales;
    document.getElementById("LShipped").innerHTML = lowOne.name;
    document.getElementById("LnumOfSale").innerHTML += lowOne.sales;
} else if (maxOne.sales == 0 && maxOne.sales == lowOne.sales)
{
    document.getElementById("MShipped").innerHTML = "No products have been shipped yet";
    document.getElementById("MnumOfSale").innerHTML += maxOne.sales;
    document.getElementById("LShipped").innerHTML ="No products have been shipped yet";
    document.getElementById("LnumOfSale").innerHTML += lowOne.sales;
} else 
{
    document.getElementById("MShipped").innerHTML = maxOne.name;
    document.getElementById("MnumOfSale").innerHTML += maxOne.sales;
    document.getElementById("LShipped").innerHTML = lowOne.name;
    document.getElementById("LnumOfSale").innerHTML += lowOne.sales;
}



// fill table 

// let container = document.getElementById("productData");

// container.innerHTML = "";
// products.forEach((prod) => {
//     container.innerHTML += 
//     `
//     <tr>
//         <td>${prod.name}</td>
//         <td>${prod.price}$</td>
//         <td><del>${prod.previousPrice == prod.price ? "No Sales": prod.previousPrice}$</del></td>
//         <td>${prod.sales}</td>
//         <td>${prod.stock}</td>
//         <td>
//             <a href="#" class="btn btn-sm btn-brown" data-id="${prod.id}" id="SaleBTN" title="Make a Sale">
//                 <i class="fas fa-tags"></i> Sale
//             </a>
//         </td>
//     </tr>
//     `
// })




let container = document.getElementById("productData");

container.innerHTML = "";



products.forEach((prod) => {
    let prev = SaleValidate(prod.previousPrice);
    container.innerHTML += `
    <tr>
        <td>${prod.name}</td>
        <td>${prod.price}$</td>
        ${prev}
        <td>${prod.sales}</td>
        <td>${prod.stock}</td>
        <td>
            <a href="#" class="btn btn-sm btn-brown" data-id="${prod.id}" id="SaleBTN" title="Make a Sale">
                <i class="fas fa-tags"></i> Sale
            </a>
        </td>
    </tr>
    `;
});



function SaleValidate (prevPrice)
{
    if (prevPrice == 0)
    {
        return `<td>NO Sale</td>`
    }else 
    {
        return `<td><del>${prevPrice}$</del></td>`

    }
}





// Initialize DataTable after data is loaded
$(document).ready(function () {
    $('#productTable').DataTable({
        responsive: true,
        paging: true,
        searching: true,
        ordering: true,
        info: true,
        columnDefs: [
            { orderable: false, targets: [5] } // Disable sorting on the "Sale" button column
        ],
        language: {
            search: "Filter products:",
            lengthMenu: "Show _MENU_ entries per page",
            info: "Showing _START_ to _END_ of _TOTAL_ products"
        }
    });
});










document.querySelectorAll("#SaleBTN").forEach((btn) => {
    btn.addEventListener("click",  (event) => {
        localStorage.setItem("SaleId", event.target.dataset.id);
        window.location.href =
          "/E-commerce/Seller/pages/ui-features/sales.html";
    })

})




// $(document).ready(function () {
//     let table = $('#productTable').DataTable({
//         data: products,
//         columns: [
//             { data: 'name' },
//             { data: 'price', render: (data) => `$${data}` },
//             { data: 'sales' },
//             { data: 'stock' },
//             {
//                 data: 'id',
//                 render: (data) => `<button class="btn btn-sm btn-danger" onclick="RemoveProduct(${data})">Remove</button>`
//             }
//         ]
//     });
// });