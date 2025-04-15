import { GetCurrentUser, GetUserById, GetBrandById, GetAllProducts, GetAllOrders, RemoveProduct, GetProductById, GetAllBrands } from "./../../../../finalscript.js";
import { loadnavbar } from "../../../../navbar.js";
let color = "#004985";
loadnavbar(color);
let userId = Number.parseInt(JSON.parse(localStorage.getItem("currentUser")));

function GetProductRelatedToSeller(id) {
    let user = GetUserById(id);
    let prodIds = user.products;
    let products = GetAllProducts();
    return products.filter(product => prodIds.includes(product.id));
}

class productBrand
{
    constructor(_brandId, _relatedProd, _TotalEarn)
    {
        this.BrandId = _brandId;
        this.RelatedProducts= _relatedProd;
        this.TotalEarn = _TotalEarn;
    }
}

function AnalysisOnBrand (id)
{
    let products = GetProductRelatedToSeller(id);
    console.log(products);
    let brands = GetAllBrands();
    console.log(brands);
    let ordres = GetAllOrders();
    console.log(ordres);
    let analysisRes = [];

    for (var i=0; i<brands.length; i++)
    {
        let brandid = brands[i].id;
        let relatedProd = [];
        
        products.forEach((prod) => {
            if (prod.brandId == brandid)
                relatedProd.push(prod.id);
        })
        let totalEarn = 0;
        ordres.forEach((order) => {
            if (order.status != "canceled"){

                if (relatedProd.length >0)
                    {
                    order.items.forEach((item) => {
                    if (relatedProd.includes(item.id)) {
                        totalEarn += item.price * item.quantity;
                    }
                })
            }
        }
        })

        analysisRes.push(new productBrand(brandid, relatedProd, totalEarn));
    }
    return analysisRes;
}

let brandProduct = AnalysisOnBrand(userId);
// brandProduct = []
console.log(brandProduct);


let maxOne;
let minOne;
if (brandProduct.length)
{
    maxOne = brandProduct.reduce((max, item) => 
        item.TotalEarn > max.TotalEarn ? item : max
    );
    
    minOne = brandProduct.reduce((max, item) => 
        item.TotalEarn < max.TotalEarn ? item : max
    );

}

console.log(minOne)


// if (maxOne.TotalEarn != 0)
// {
//     if (maxOne.TotalEarn == minOne.TotalEarn)
//     {
//         document.getElementById("equalcase").classList.remove("d-none");
//     }
//     document.getElementById("TopBrand").innerHTML += GetBrandById(maxOne.BrandId).name;
//     document.getElementById("NumOfProdForTop").innerHTML += (maxOne.RelatedProducts).length;
//     document.getElementById("TotalRevenueForTop").innerHTML += maxOne.TotalEarn + "$";


//     document.getElementById("LowestBrand").innerHTML += GetBrandById(minOne.BrandId).name
//     document.getElementById("NumOfProdForLowest").innerHTML += (minOne.RelatedProducts).length;
//     document.getElementById("TotalRevenueForLowest").innerHTML += minOne.TotalEarn + "$";

// } else {

//     document.getElementById("TopBrand").innerHTML += "NO Brand To Retrieve";
//     document.getElementById("NumOfProdForTop").innerHTML += "-";
//     document.getElementById("TotalRevenueForTop").innerHTML += "-";
    
    
//     document.getElementById("LowestBrand").innerHTML += "NO Brand To Retrieve";
//     document.getElementById("NumOfProdForLowest").innerHTML += " -";
//     document.getElementById("TotalRevenueForLowest").innerHTML += " -";
// }

if (!brandProduct.length)
{
    document.getElementById("TopBrand").innerHTML += "No Brand To retrieve";
    document.getElementById("NumOfProdForTop").innerHTML += "N/A";
    document.getElementById("TotalRevenueForTop").innerHTML += "-";

    document.getElementById("LowestBrand").innerHTML += "No Brand To retrieve";
    document.getElementById("NumOfProdForLowest").innerHTML += "N/A";
    document.getElementById("TotalRevenueForLowest").innerHTML += "-";
}else 
{

    if (maxOne && maxOne.TotalEarn !== 0) {
        // Check if the revenue is equal for both brands
        if (maxOne.TotalEarn === minOne.TotalEarn) {
            document.getElementById("equalcase").classList.remove("d-none");
        }
    
        // Ensure that GetBrandById returns a valid brand name
        const maxBrand = GetBrandById(maxOne.BrandId);
        const minBrand = GetBrandById(minOne.BrandId);
    
        if (maxBrand && minBrand) {
            document.getElementById("TopBrand").innerHTML += maxBrand.name || "Brand data not available";
            document.getElementById("NumOfProdForTop").innerHTML += (maxOne.RelatedProducts && maxOne.RelatedProducts.length) || "N/A";
            document.getElementById("TotalRevenueForTop").innerHTML += maxOne.TotalEarn + "$";
    
            document.getElementById("LowestBrand").innerHTML += minBrand.name || "Brand data not available";
            document.getElementById("NumOfProdForLowest").innerHTML += (minOne.RelatedProducts && minOne.RelatedProducts.length) || "N/A";
            document.getElementById("TotalRevenueForLowest").innerHTML += minOne.TotalEarn + "$";
        } else {
            // Fallback if brand data is invalid
            document.getElementById("TopBrand").innerHTML += "No valid brand data";
            document.getElementById("NumOfProdForTop").innerHTML += "N/A";
            document.getElementById("TotalRevenueForTop").innerHTML += "-";
    
            document.getElementById("LowestBrand").innerHTML += "No valid brand data";
            document.getElementById("NumOfProdForLowest").innerHTML += "N/A";
            document.getElementById("TotalRevenueForLowest").innerHTML += "-";
        }
    
    } else {
        // Fallback for when maxOne.TotalEarn is 0 or undefined
        document.getElementById("TopBrand").innerHTML += "NO Brand To Retrieve";
        document.getElementById("NumOfProdForTop").innerHTML += "-";
        document.getElementById("TotalRevenueForTop").innerHTML += "-";
    
        document.getElementById("LowestBrand").innerHTML += "NO Brand To Retrieve";
        document.getElementById("NumOfProdForLowest").innerHTML += " -";
        document.getElementById("TotalRevenueForLowest").innerHTML += " -";
    }
}










// let container = document.getElementById("productData");

// container.innerHTML = "";
// brandProduct.forEach((brand) => {
//     container.innerHTML += 
//     `
//     <tr>
//         <td>${GetBrandById(brand.BrandId).name}</td>
//         <td>${(brand.RelatedProducts).length}</td>
//         <td>${brand.TotalEarn} $</td>
//     </tr>
//     `
// })

$(document).ready(function () {
    let container = $('#productData'); // Using jQuery for the tbody element
    container.empty(); // Clear existing content

    // Populate table rows dynamically
    brandProduct.forEach((brand) => {
        container.append(`
            <tr>
                <td>${GetBrandById(brand.BrandId).name}</td>
                <td>${(brand.RelatedProducts).length}</td>
                <td>${brand.TotalEarn} $</td>
            </tr>
        `);
    });

    // Initialize DataTables
    $('#productTable').DataTable({
        responsive: true, // Makes the table responsive
        paging: true,     // Enables pagination
        searching: true,  // Enables search bar
        ordering: true,   // Enables sorting
        order: [[2, 'desc']], // Default sort by Total Revenue in descending order
        columnDefs: [
            { targets: [1], searchable: false }, // Disable search on "Number Of Product"
        ]
    });
});





document.addEventListener("DOMContentLoaded", function() {
    // Your existing code...

    let brands = brandProduct.map(brand => GetBrandById(brand.BrandId).name);
    let totalEarnings = brandProduct.map(brand => brand.TotalEarn);

    let ctx = document.getElementById('brandComparisonChart').getContext('2d');
    let brandComparisonChart = new Chart(ctx, {
        type: 'bar', // Bar chart
        data: {
            labels: brands,
            datasets: [{
                label: 'Total Earnings ($)',
                data: totalEarnings,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

