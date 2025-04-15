import { GetCurrentUser, GetUserById, GetBrandById, GetAllProducts, GetAllOrders, RemoveProduct, GetProductById, GetAllBrands } from "./../../../../finalscript.js";
import { loadnavbar } from "../../../../navbar.js";
let color = "#004985";
loadnavbar(color);
let userId = Number.parseInt(JSON.parse(localStorage.getItem("currentUser")));

class productBrand
{
    constructor(_Location, _relatedProd, _TotalEarn, _itemSold, _Transactions)
    {
        this.Location = _Location;
        this.RelatedProducts= _relatedProd;
        this.TotalEarn = _TotalEarn;
        this.ItemSold = _itemSold;
        this.Transactions = _Transactions;
    }
}

function GetProductRelatedToSeller(id) {
    let user = GetUserById(id);
    let prodIds = user.products;
    let products = GetAllProducts();
    return products.filter(product => prodIds.includes(product.id));
}

function getLoations ()
{
    let orders = GetAllOrders();


    let towns =[];
    orders.forEach((order) => {
        towns.push(order.customerDetails.address.city);
    })
    towns = [...new Set(towns)]
    return towns;
}
console.log(getLoations())



function AnalysisOnGovernorate (id)
{
    let products = GetProductRelatedToSeller(id);
    let productids = [];
    products.forEach((prod) => {
        productids.push(prod.id);
    })
    console.log(productids)
    let orders = GetAllOrders();
    let locations = getLoations();

    let analysisRes = [];

    for (var i=0; i<locations.length; i++)
    {
        let totalEarn = 0;
        let relatedProd = [];
        let solditem = 0;
        let transaction = 0;
        orders.forEach((order) => {
            if (order.status != "canceled")
            {
                if (order.customerDetails.address.city == locations[i])
                    {
                        let flag = 0;
                        order.items.forEach((item) => {
                            if (productids.includes(item.id)) {
                                totalEarn += item.price * item.quantity;
                                relatedProd.push(item.id);
                                solditem += item.quantity;
                                if (flag == 0)
                                {
                                    transaction++;
                                    flag++;
                                }
                            }
                        })
                    }
                }

            })
        analysisRes.push(new productBrand(locations[i], relatedProd, totalEarn, solditem, transaction));
    }
    return analysisRes;
}

console.log(AnalysisOnGovernorate (userId));

let analysisData = AnalysisOnGovernorate(userId)

function GetTopProductId(Governorate) {
    let maxOne = null; // Default value if no result is found

    analysisData.forEach((location) => {
        if (location.Location === Governorate) { // Corrected the comparison
            if (location.RelatedProducts.length != 0)
            {

                let max = location.RelatedProducts[0]; // Start with the first product
                
                location.RelatedProducts.forEach((prod) => {
                    if (prod.sales > max.sales) { // Compare sales to find the top product
                        max = prod;
                    }
                });
                // Set the top product for this location
                maxOne = max;
            }
        }
    });

    return maxOne;
}

let container = document.getElementById("productData");
container.innerHTML = "";

analysisData.forEach((location) => {
    const topProductId = GetTopProductId(location.Location);
    const topProductName = topProductId ? GetProductById(topProductId).name : 'N/A';

    container.innerHTML += `
    <tr>
        <td>${location.Location}</td>
        <td>${location.TotalEarn}$</td>
        <td>${location.Transactions}</td>
        <td>${location.ItemSold}</td>
        <td>${topProductName}</td>
    </tr>
    `;
});

$(document).ready(function() {
    $('#productTable').DataTable({
        responsive: true,
        paging: true,
        searching: true,
        ordering: true,
        order: [[1, 'desc']], 
    });
});
function getHighestAndLowestRevenueGov (analysisData, condition)
{
    if (analysisData || analysisData.length != 0)
    {
        if (condition == 1)
            return analysisData.sort((govA, govB) => govA.TotalEarn - govB.TotalEarn)[0];
        else 
            return analysisData.sort((govA, govB) => govB.TotalEarn - govA.TotalEarn)[0];
    }

}

console.log(getHighestAndLowestRevenueGov(analysisData, 1));


let maxone = getHighestAndLowestRevenueGov(analysisData, 0);
let minone = getHighestAndLowestRevenueGov(analysisData, 1);

if (maxone)
{
    document.getElementById("highestRevenueGov").innerHTML += ` ${maxone.Location}`
    document.getElementById("highestRevenueAmount").innerHTML += ` ${maxone.TotalEarn} $`
}else 
{
    document.getElementById("highestRevenueGov").innerHTML += ` No Product to Share`
    document.getElementById("highestRevenueAmount").innerHTML += ` -`
}

if (minone)
{
    document.getElementById("lowestRevenueGov").innerHTML += ` ${minone.Location}`;
    document.getElementById("lowestRevenueAmount").innerHTML += ` ${minone.TotalEarn} $`
}else 
{
    document.getElementById("lowestRevenueGov").innerHTML += ` No Product To Share`;
    document.getElementById("lowestRevenueAmount").innerHTML += ` - $`
}






document.addEventListener("DOMContentLoaded", function() {
    let locations = analysisData.map(data => data.Location);
    let totalEarnings = analysisData.map(data => data.TotalEarn);
    let transactions = analysisData.map(data => data.Transactions);
    let itemsSold = analysisData.map(data => data.ItemSold);

    if (analysisData.length === 0 || totalEarnings.every(e => e === 0)) {
        document.getElementById('locationComparisonChart').style.display = 'none';
        document.getElementById('noDataMessage').style.display = 'block';
    } else {
        let ctx = document.getElementById('locationComparisonChart').getContext('2d');
        let locationComparisonChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: locations,
                datasets: [
                    {
                        label: 'Total Earnings ($)',
                        data: totalEarnings,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Transactions',
                        data: transactions,
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Items Sold',
                        data: itemsSold,
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        borderColor: 'rgba(255, 159, 64, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
});
