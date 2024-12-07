
window.addEventListener("load", function () {
    let allImg = document.querySelectorAll(".subImg");
    let mainImg = document.querySelector(".mainProdImg");
    allImg.forEach((element) => {
        element.addEventListener("click", function (e) {
            mainImg.src = e.target.src;
        })
    })



    // decreament and increament count 
    let increamentBtn = this.document.getElementById("increase-btn");
    let decreaseBtn = this.document.getElementById("decrease-btn");
    let countValue = this.document.getElementById("product-count");
    decreaseBtn.addEventListener("click", function () {
        if (countValue.value > 1){
            countValue.value--;
        }
    })// end of decrease 

    increamentBtn.addEventListener("click", function () {
        if (countValue.value < 10){
            countValue.value++;
        }
    })// end of increament






})// end of load





