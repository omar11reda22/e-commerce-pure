window.addEventListener("load", function () {
  AOS.init({
    duration: 1000, // Animation duration
    easing: "ease-out", // Easing function
    once: false, // Animation triggers only once
    offset: 200, // Trigger the animation when the section is 200px away from the viewport
  });

  let vd = this.document.getElementById("vd");
  let nav = this.document.getElementById("nav");
  let text = this.document.getElementById("text");
  let logo = this.document.getElementById("logo");
  setTimeout(() => {
    // vd.style.filter = "blur(0px)";
    //nav.style.opacity = "1";
    //  nav.style.transform = "translateY(0)";
    // text.style.opacity = "1";
    // text.style.transform = "translatex(0)";
    //  vd.style.transition = ".6s ";
    ////  nav.style.transition = "2s";
    //  text.style.transition = "2s ";
  }, 1000);

  //   document.getElementById("hamburger").addEventListener("click", () => {
  //     const dropdown = document.getElementById("dropdown");
  //     dropdown.style.display =
  //       dropdown.style.display === "block" ? "none" : "block";
  //   });

  //   function getdata(database) {
  //     for (let key in database) {
  //       database[key] = JSON.parse(localStorage.getItem(key));
  //     }
  //     return database;
  //   }

  // let obj = JSON.parse(this.localStorage.getItem("products"))
  // console.log(obj);
  // for(let product in obj){
  //     if(obj[product].price >= 400)
  //     console.log(obj[product]);
  // }

  // show all brands
  let brandd = this.document.getElementById("brand");
  console.log(JSON.parse(this.localStorage.getItem("products")));

  let brands = JSON.parse(localStorage.getItem("brands"));

  brands.forEach((element) => {
    //console.log(element);
    brand.innerHTML += `
    <div class = "col-lg col-md-3 col-sm-4 col-6">
      <a class = "show-brand" href="" data-id = "${element.id}"><img style="height: 200px; width: 200px;" src="${element.images[0]}" class="img-fluid rounded" alt="">
</a>

    </div>
    
    `;
  });

  // go to brands
  let brandshow = this.document.querySelectorAll(".show-brand");
  brandshow.forEach((brnd) => {
    brnd.addEventListener("click", function (e) {
      e.preventDefault();
      let brandid = e.currentTarget.dataset.id;
      window.location.href = `brand-detail.html?id=${brandid}`;
    }); // end of event
  });

  // show a best seller

  let besto = this.document.getElementById("best-seler");
  let products = JSON.parse(this.localStorage.getItem("products"));
  let count = 0;
  products
    .sort((a, b) => b.sales - a.sales)
    .forEach((element) => {
      if (count < 4) {
        besto.innerHTML += `
    <div class="col-lg-3 col-md-6 info">
            
            <img class= "cls"
              src="${element.images[0]}"
              alt=""
            />
            <p style="color: aqua">${element.gender}</p>
            <h5>${element.name}</h5>
            <p>EGP ${element.price}</p>
            <button class = "show-more" data-id = "${element.id}">view details</button>
          </div>
   
   `;
        count++;
      }
    });

  //new arrival
  let news = this.document.getElementById("new-arrival");

  products
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 8)
    .forEach((element) => {
      news.innerHTML += `
<div class="col-6 col-sm-4 col-md-3 mb-4 ">
        <div class="card text-center border-0 li-img">
          <img
            class = "cls2"
            src="${element.images[0]}"
            class="card-img-top img-fluid"
            alt="Product Name"
          />
           <div class="overlay d-flex justify-content-center align-items-center">
        <button  class="btn btn-dark quick-view-btn show-more" data-id = "${element.id}">Quick View</button>
          </div>
          <div class="card-body">
            <h6 class="card-title">${element.name}</h6>
            <p class="card-text">EGP ${element.price}</p>
          </div>
        </div>
      </div>

`;
    });

  // add event to view details
  let btn = this.document.querySelectorAll(".show-more");
  btn.forEach((button) => {
    button.addEventListener("click", function (e) {
      productid = e.target.dataset.id;
      window.location.href = `/E-commerce/Product Details/details.html?id=${productid}`;
    }); // end of event
  }); // end of loaping
}); // end of load
