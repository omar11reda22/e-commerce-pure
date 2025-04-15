import { GetCurrentUser, GetUserById, GetBrandById, GetAllProducts, GetAllOrders, RemoveProduct, GetProductById } from "../../finalscript.js";



let userId = Number.parseInt(JSON.parse(localStorage.getItem("currentUser")));
//console.log(userId);



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
// console.log(GetIndexOfUser());

function UpdateUserProducts(product) {
    let allusers = GetAllUsers();
    let index = GetIndexOfUser();
    let user = GetUserById(userId);
    user.products = product;
    allusers[index] = user;
    localStorage.setItem("users", JSON.stringify(allusers));

}

function ValidToDelete(id) {
    let chk = true;
    let allorders = GetAllOrders();
    // console.log(allorders);
    allorders.forEach((order) => {
        // console.log(order.status)
        if (order.status == "Processing") {
            order.items.forEach(item => {
                if (item.id == id) {
                    console.log(item)
                    chk = false;
                    return chk;
                }
            })
        }
    })
    return chk;
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
    // localStorage.setItem("currentUser", 6);

function GetProductRelatedToSeller(id) {
   // console.log(GetCurrentUser())
    let user = GetUserById(id);
  //  console.log(user);
    let prodIds = user.products;
   // console.log(prodIds);
    let products = GetAllProducts();
   // console.log(products);
    return products.filter(product => prodIds.includes(product.id));
}


let producuts = GetProductRelatedToSeller(userId);
console.log(producuts)
let container = document.getElementById("productData");
$(document).ready(function() {

});

container.innerHTML = "";
producuts.forEach((prod) => {
    container.innerHTML += `
            <tr>
                <td>${prod.name}</td>
                <td>${prod.gender}</td>
                <td>${prod.price}$</td>
                <td>${prod.sales}</td>
                <td>${prod.date}</td>
                <td>${prod.stock}</td>
                <td>${GetBrandById(prod.brandId).name}</td>
                <td>
                <a><i data-id='${prod.id}'  class="updateBtn p-2 fa-regular fa-pen-to-square"></i></a> |
                <a><i data-id='${prod.id}' class="deleteBtn p-2 fa-solid fa-trash-can"></i></a>
                <td>
            </tr>
        `
})


// $('#example').DataTable({
//     paging: true,
//     searching: true,
//     ordering: true,
//     info: true
// });

// document.getElementById("example").DataTable({
//     paging: true,
//     searching: true,
//     ordering: true,
//     info: true
// });

// $(document).ready(function() {
    // const products = [
    //     { name: "Classic Watch", gender: "Unisex", price: 199.99, sales: 10, date: "2023-12-01", stock: 5, brandId: 1 },
    //     { name: "Sport Watch", gender: "Male", price: 149.99, sales: 20, date: "2023-12-02", stock: 15, brandId: 2 },
    //     // Add more products as needed
    // ];

    // function GetBrandById(brandId) {
    //     const brands = [
    //         { id: 1, name: "Elegant Timepieces" },
    //         { id: 2, name: "Sporty Watches Co." },
    //         // Add more brands as needed
    //     ];
    //     return brands.find(brand => brand.id === brandId) || { name: "Unknown" };
    // }





//     let products = GetProductRelatedToSeller(userId);
//     console.log(products);
//     function populateTable(products) {

//         const container = document.getElementById('productData');
//         container.innerHTML = '';
//         products.forEach(prod => {
//             container.innerHTML += `
//                 <tr>
//                     <td>${prod.name}</td>
//                     <td>${prod.gender}</td>
//                     <td>${prod.price}$</td>
//                     <td>${prod.sales}</td>
//                     <td>${prod.date}</td>
//                     <td>${prod.stock}</td>
//                     <td>${GetBrandById(prod.brandId).name}</td>
//                     <td>
//                         <a><i data-id='${prod.id}' class="updateBtn p-2 fa-regular fa-pen-to-square"></i></a> |
//                         <a><i data-id='${prod.id}' class="deleteBtn p-2 fa-solid fa-trash-can"></i></a>
//                     </td>
//                 </tr>
//             `;
//         });

//         // Ensure the table is initialized after data population
//         $('#example').DataTable({
//             paging: true,
//             searching: true,
//             ordering: true,
//             info: true
//         });

//         console.log("DataTable initialized successfully with rows:", $('#example').DataTable().rows().count());
//     }

//     populateTable(products);
// });






document.querySelectorAll(".updateBtn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const prodId = event.target.dataset.id;
        console.log(prodId);
        document.cookie = `updateProd=${encodeURIComponent(prodId)}; path=/; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}`;
        window.location.href = "pages/ui-features/dropdowns.html";
    });
});



document.querySelectorAll(".deleteBtn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const prodId = event.target.dataset.id;
        console.log(prodId)
        console.log(ValidToDelete(prodId));
        if (ValidToDelete(prodId)) {
            let prod = GetProductById(prodId);
            ShowDeleteConfirmation(prod);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You Can't Delete This Product!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }

    });
});



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

            // LoadProducts();
            location.reload();
        }
    });
}








export function GetNumProductBasedOnStatus(status) {
    let count = 0;
    let producuts = GetProductRelatedToSeller(userId);
    let allorders = GetAllOrders();
    producuts.forEach((prod) => {
        allorders.forEach((order) => {
            if (order.status == status) {
                order.items.forEach((item) => {
                    if (item.id == prod.id) {
                        count += item.quantity;
                    }
                })
            }
        })
    })

    return count;
}

// set analysis

document.getElementById("Shipped").innerHTML = GetNumProductBasedOnStatus("Shipped");
document.getElementById("Processing").innerHTML = GetNumProductBasedOnStatus("Processing");
document.getElementById("Delivered").innerHTML = GetNumProductBasedOnStatus("Delivered");


const shipped = GetNumProductBasedOnStatus("Shipped");
const processing = GetNumProductBasedOnStatus("Processing");
const delivered = GetNumProductBasedOnStatus("Delivered");

// Get context of the canvas element
const ctx = document.getElementById('traffic-chartt').getContext('2d');

// Create the chart
const productStatusChart = new Chart(ctx, {
    type: 'bar', // Chart type
    data: {
        labels: ['Shipped', 'Processing', 'Delivered'],
        datasets: [{
            label: '# of Products',
            data: [shipped, processing, delivered], // Data for the chart
            backgroundColor: [
                'rgba(254, 150, 150, 0.5)',
                'rgba(72, 163, 236, 0.5)',
                'rgba(68, 211, 192, 0.5)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Number of Products Based on Status'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
