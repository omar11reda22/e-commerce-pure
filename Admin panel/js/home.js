import { GetAllOrders, GetProductById , Getallusers ,getallsellers } from "../../finalscript.js";

window.addEventListener("load", function () {
  // show all users in table
  let main = this.document.getElementById("main");
  main.style.display = "none";

  // users event  ---------------------------------------------------------

  let user = this.document.getElementById("users");
  let allusers = Getallusers();
  /// console.log(allusers);
  user.addEventListener("click", function () {
    main.style.display = "block";
    main.innerHTML = `
    <div class="col-md-12">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row" >
            <div class="col-sm-6 p-0 d-flex justify-content-lg-start  justify-content-center">
              <h2 class="ml-lg-2">Users</h2>
            </div>
          </div>
        </div>
        <table id="usersTable" class="table table-striped table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Role</th>
              <th>Action</th>
              <th>Set Seller</th> <!-- New column for changing account type -->
            </tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
    </div>
  `;

    let tbody = document.getElementById("tbody");
    allusers.forEach((element) => {
      let tr = document.createElement("tr");

      tr.innerHTML = `
      <td></td>
      <td>${element.firstName} ${element.lastName}</td>
      <td>${element.email}</td>
      <td>${element.address.city} ${element.address.governorate}</td>
      <td class="role">${element.accountType}</td>
      <td>
        <i class="bi bi-lock" style="cursor: pointer;" data-email="${element.email}" data-accountType="${element.accountType}"></i>
      </td>
      <td>
        <i class="bi bi-arrow-right-circle" style="cursor: pointer;" data-email="${element.email}" data-accountType="${element.accountType}"></i>
      </td> <!-- New icon to change account type -->
    `;
      tbody.appendChild(tr);
    });

    // Initialize DataTable
    $("#usersTable").DataTable();

    tbody.addEventListener("click", function (event) {
      // Lock icon click handler
      if (event.target.classList.contains("bi-lock")) {
        const email = event.target.getAttribute("data-email");
        const accountType = event.target.getAttribute("data-accountType");

        if (accountType === "Seller") {
          Swal.fire({
            icon: "error",
            title: "Cannot Change Account Type",
            text: "This user is a Seller and cannot be changed to Admin.",
          });
        } else if (accountType === "Customer") {
          Swal.fire({
            title: "Are you sure?",
            text: "Do you want to change this user's account type to Admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!",
          }).then((result) => {
            if (result.isConfirmed) {
              // Update account type
              allusers.forEach((user) => {
                if (user.email === email) {
                  user.accountType = "Admin";
                }
              });

              // Update local storage
              localStorage.setItem("users", JSON.stringify(allusers));

              // Update UI
              Swal.fire(
                "Updated!",
                "User's account type has been changed to Admin.",
                "success"
              );
              event.target.closest("tr").querySelector(".role").textContent =
                "Admin";
            }
          });
        }
      }

      // New icon click handler to change account type to Seller
      if (event.target.classList.contains("bi-arrow-right-circle")) {
        const email = event.target.getAttribute("data-email");
        const accountType = event.target.getAttribute("data-accountType");

        if (accountType === "Admin") {
          Swal.fire({
            icon: "error",
            title: "Invalid Action",
            text: "You cannot change an Admin account type to Seller.",
          });
        } else if (accountType === "Seller") {
          Swal.fire({
            icon: "error",
            title: "Account Type Already Seller",
            text: "This user is already a Seller.",
          });
        } else if (accountType === "Customer") {
          Swal.fire({
            title: "Are you sure?",
            text: "Do you want to change this user's account type to Seller?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!",
          }).then((result) => {
            if (result.isConfirmed) {
              // Update account type
              allusers.forEach((user) => {
                if (user.email === email) {
                  user.accountType = "Seller";
                }
              });

              // Update local storage
              localStorage.setItem("users", JSON.stringify(allusers));

              // Update UI
              Swal.fire(
                "Updated!",
                "User's account type has been changed to Seller.",
                "success"
              );
              event.target.closest("tr").querySelector(".role").textContent =
                "Seller";
            }
          });
        }
      }
    });
  });

  // product evet ----------------------------------------------
  // Reference to 'prod' and products
  let prod = this.document.getElementById("prod");
  let products = JSON.parse(this.localStorage.getItem("products"));
  prod.addEventListener("click", function () {
    main.style.display = "block";
    main.innerHTML = `
    <div class="col-md-12">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6 p-0 d-flex justify-content-lg-start justify-content-center">
              <h2 class="ml-lg-2">Manage Products</h2>
            </div>
          </div>
        </div>
        <table id="productsTable" class="table table-striped table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Gender</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
    </div>
  `;

    // Populate the table with products
    let tbody = document.getElementById("tbody");
    products.forEach((element, index) => {
      let ttr = document.createElement("tr");
      ttr.setAttribute("data-index", index); // Add data-index for easy selection
      ttr.innerHTML = `
      <td></td>
      <td>${element.name}</td>
      <td>${element.date}</td>
      <td>${element.price}</td>
      <td>${element.gender}</td>
      <td>${element.stock}</td>
      <td>
        <a href="#" class="edit" data-index="${index}">
          <i class="material-icons" title="Edit">&#xE254;</i>
        </a>
        <a href="#" class="delete" data-index="${index}">
          <i class="material-icons" title="Delete">&#xE872;</i>
        </a>
      </td>
    `;
      tbody.appendChild(ttr);
    });

    // Initialize DataTable
    $("#productsTable").DataTable();

    // Edit button with SweetAlert
    document.querySelectorAll(".edit").forEach((button) => {
      button.addEventListener("click", function () {
        let index = this.getAttribute("data-index");
        let product = products[index]; // Get the product data for the clicked row

        Swal.fire({
          title: "Edit Product",
          html: `
        <label>Name:</label><input id="swal-edit-name" class="swal2-input" value="${product.name}">
        <label>Date:</label><input id="swal-edit-date" type="date" class="swal2-input" value="${product.date}">
        <label>Price:</label><input id="swal-edit-price" class="swal2-input" value="${product.price}">
        <label>Stock:</label><input id="swal-edit-stock" class="swal2-input" value="${product.stock}">
        <label>Gender:</label><input id="swal-edit-gender" class="swal2-input" value="${product.gender}">
      `,
          showCancelButton: true,
          confirmButtonText: "Save",
          preConfirm: () => {
            return {
              name: document.getElementById("swal-edit-name").value.trim(),
              date: document.getElementById("swal-edit-date").value,
              price: parseFloat(
                document.getElementById("swal-edit-price").value
              ),
              stock: parseInt(document.getElementById("swal-edit-stock").value),
              gender: document.getElementById("swal-edit-gender").value.trim(),
            };
          },
        }).then((result) => {
          if (result.isConfirmed) {
            // Update the product in the array
            products[index] = {
              ...products[index],
              ...result.value,
            };
            localStorage.setItem("products", JSON.stringify(products)); // Save updated products to localStorage

            // Update the DOM without reloading the page
            let row = document.querySelector(`tr[data-index="${index}"]`);
            if (row) {
              row.cells[1].textContent = result.value.name;
              row.cells[2].textContent = result.value.date;
              row.cells[3].textContent = result.value.price.toFixed(2); // Format price
              row.cells[4].textContent = result.value.gender;
              row.cells[5].textContent = result.value.stock;
            }

            Swal.fire(
              "Saved!",
              "Product details have been updated.",
              "success"
            );
          }
        });
      });
    });

    // Delete button with validation and SweetAlert
    document.querySelectorAll(".delete").forEach((button) => {
      button.addEventListener("click", function () {
        let index = this.getAttribute("data-index");
        let productId = products[index].id; // Assuming each product has a unique `id`

        let isProcessing = CheckOrderStatus(productId, "Processing");
        let isShipped = CheckOrderStatus(productId, "Shipped");
        let isInOrder = IsProductInOrder(productId);

        if (isProcessing) {
          Swal.fire(
            "Cannot Delete!",
            "This product is part of an order with status 'Processing'.",
            "error"
          );
          return;
        }

        if (!isInOrder) {
          Swal.fire(
            "Cannot Delete!",
            "This product is not part of any order.",
            "error"
          );
          return;
        }

        // Allow deletion for 'Shipped' products
        Swal.fire({
          title: "Are you sure?",
          text: "You can delete this product as it's part of a 'Shipped' order.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            products.splice(index, 1); // Remove product from array
            localStorage.setItem("products", JSON.stringify(products)); // Update localStorage

            // Remove row from DOM without reloading the page
            let row = document.querySelector(`tr[data-index="${index}"]`);
            if (row) row.remove();

            Swal.fire("Deleted!", "The product has been deleted.", "success");
          }
        });
      });
    });
  });

  // Helper functions
  function CheckOrderStatus(productId, status) {
    let allOrders = GetAllOrders();
    return allOrders.some((order) => {
      return (
        order.status === status &&
        order.items.some((item) => item.id === productId)
      );
    });
  }

  function IsProductInOrder(productId) {
    let allOrders = GetAllOrders();
    return allOrders.some((order) => {
      return order.items.some((item) => item.id === productId);
    });
  }

  function IsProductInOrder(productId) {
    let allOrders = GetAllOrders();
    return allOrders.some((order) => {
      return order.items.some((item) => item.id === productId);
    });
  }

  function GetAllOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
  }

  let name = this.document.getElementById("name");
  let price = this.document.getElementById("price");
  let stock = this.document.getElementById("stocke");
  let date = this.document.getElementById("date");
  let image = this.document.getElementById("image");
  let gender = this.document.getElementById("gender");

  // add a new product button
  // let add = this.document.getElementById("addnewproduct");

  //   add.addEventListener("click", function () {
  //     let product = JSON.parse(localStorage("products")); // this array will push
  //     const newproduct = {
  //       name: name.value,
  //       price: price.value,
  //       stock: stock.value,
  //       date: date.value,
  //       gender: gender,
  //       image: image,
  //     };

  //     product.push(newproduct);
  //     localStorage.setItem("products", JSON.stringify("product"));
  //   }); // end of event

  // return all orders and having a td have a status of all orders and have a button this
  // button will change status of any order [process to shiped to delivered]
  let seller = this.document.getElementById("seller");
  let allsellers = getallsellers(); // return all sellers
  // Add delete icon to each row
  seller.addEventListener("click", function () {
    main.style.display = "block";
    main.innerHTML = `
    <div class="col-md-12">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6 p-0 d-flex justify-content-lg-start justify-content-center">
              <h2 class="ml-lg-2">Manage Sellers</h2>
            </div>
          </div>
        </div>
        <table id="sellersTable" class="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Seller Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Products Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="tbody"></tbody>
        </table>
      </div>
    </div>
  `;

    let tbody = document.getElementById("tbody");
    allsellers.forEach((seller, index) => {
      let ttr = document.createElement("tr");
      ttr.innerHTML = `
      <td>${index + 1}</td>
      <td>${seller.firstName} ${seller.lastName}</td>
      <td>${seller.email}</td>
      <td>${seller.address.street}, ${seller.address.city}, ${
        seller.address.governorate
      }</td>
      <td>${seller.products.length}</td>
      <td>
        <button class="btn btn-danger btn-sm delete-btn" data-seller-id="${
          seller.id
        }">
          <i class="fa fa-trash"></i>
        </button>
      </td>
    `;
      tbody.appendChild(ttr);
    });

    // Initialize DataTable
    if ($.fn.DataTable.isDataTable("#sellersTable")) {
      $("#sellersTable").DataTable().destroy();
    }
    $("#sellersTable").DataTable();

    // Attach delete button event
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const sellerId = this.getAttribute("data-seller-id");
        checkAndDeleteSeller(sellerId);
      });
    });
  });

  // Function to check and delete a seller
  function checkAndDeleteSeller(sellerId) {
    // Find the seller by ID
    const seller = allsellers.find((s) => s.id === sellerId);

    if (!seller) {
      Swal.fire("Error", "Seller not found", "error");
      return;
    }

    // Check if any of the seller's products exist in orders with status "Processing"
    const hasProcessingOrder = orders.some((order) => {
      return (
        order.status === "Processing" &&
        order.products.some((product) => seller.products.includes(product.id))
      );
    });

    if (hasProcessingOrder) {
      Swal.fire(
        "Cannot Delete",
        "This seller has products in processing orders.",
        "warning"
      );
    } else {
      // Proceed with deletion
      deleteSeller(sellerId);
    }
  }

  // Function to delete the seller
  function deleteSeller(sellerId) {
    allsellers = allsellers.filter((s) => s.id !== sellerId); // Remove seller from the list

    // Optionally re-render the table or show a success message
    Swal.fire(
      "Deleted",
      "Seller has been deleted successfully.",
      "success"
    ).then(() => {
      // Re-trigger the seller view to refresh the table
      seller.click();
    });
  }

  let order = this.document.getElementById("order");
  let allorders = GetAllOrders();
  // console.log(allorders);
  //console.log(allorders.length);
  order.addEventListener("click", function () {
    main.style.display = "block";
    main.innerHTML = `
  <div class="col-md-12">
    <div class="table-wrapper">
      <div class="table-title">
        <div class="row">
          <div class="col-sm-6 p-0 d-flex justify-content-lg-start justify-content-center">
            <h2 class="ml-lg-2">Manage Orders</h2>
          </div>
        </div>
      </div>
      <table id="ordersTable" class="table table-striped table-hover">
        <thead>
          <tr>
            <th></th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Change</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
    </div>
  </div>`;

    let tbody = document.getElementById("tbody");

    allorders.forEach((element) => {
      let tr = document.createElement("tr");
      let statusClass = "";
      switch (element.status.toLowerCase()) {
        case "processing":
          statusClass = "process-status";
          break;
        case "shipped":
          statusClass = "shipped-status";
          break;
        case "delivered":
          statusClass = "delivered-status";
          break;
        default:
          statusClass = "default-status";
      }

      tr.innerHTML = `
      <td></td>
      <td>${element.customerDetails.firstName} ${element.customerDetails.lastName}</td>
      <td>${element.date}</td>
      <td>${element.totalPrice}</td>
      <td><span class="${statusClass}">${element.status}</span></td>
      <td>
        <button class="change" data-order-id="${element.orderId}">Change</button>
      </td>
      <td>
        <button class="cancel" data-order-id="${element.orderId}">Cancel</button>
      </td>`;

      tbody.appendChild(tr);
    });

    // Initialize DataTable
    $("#ordersTable").DataTable();

    // Add event listeners for 'Change' and 'Cancel' buttons
    document.addEventListener("click", function (e) {
      if (e.target && e.target.classList.contains("change")) {
        let orderId = parseInt(e.target.getAttribute("data-order-id"), 10);
        let order = allorders.find((o) => o.orderId === orderId);

        if (order && order.status === "Processing") {
          Swal.fire({
            title: "Change Order Status",
            text: "Change status from 'Processing' to 'Shipped'?",
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Yes, Change it!",
            cancelButtonText: "Cancel",
          }).then((result) => {
            if (result.isConfirmed) {
              order.status = "Shipped";

              // Update the UI
              e.target
                .closest("tr")
                .querySelector("td:nth-child(5) span").textContent =
                order.status;
              e.target
                .closest("tr")
                .querySelector("td:nth-child(5) span")
                .classList.replace("process-status", "shipped-status");

              Swal.fire(
                "Success",
                "Order status changed to 'Shipped'.",
                "success"
              );
            }
          });
        } else {
          Swal.fire("Notice", "Order is not in 'Processing'.", "warning");
        }
      }

      if (e.target && e.target.classList.contains("cancel")) {
        let orderId = parseInt(e.target.getAttribute("data-order-id"), 10);
        let order = allorders.find((o) => o.orderId === orderId);

        if (order) {
          if (order.status === "Shipped") {
            Swal.fire({
              title: "Cannot Cancel Order",
              text: "Order already shipped.",
              icon: "error",
              confirmButtonText: "OK",
            });
            return;
          }

          Swal.fire({
            title: "Cancel Order",
            text: "Provide a reason for canceling the order:",
            input: "text",
            inputPlaceholder: "Enter reason here...",
            showCancelButton: true,
            confirmButtonText: "Cancel Order",
            cancelButtonText: "Back",
          }).then((result) => {
            if (result.isConfirmed && result.value) {
              order.status = "Cancelled";

              e.target
                .closest("tr")
                .querySelector("td:nth-child(5) span").textContent =
                order.status;
              e.target
                .closest("tr")
                .querySelector("td:nth-child(5) span")
                .classList.replace(
                  e.target.closest("tr").querySelector("td:nth-child(5) span")
                    .className,
                  "cancelled-status"
                );

              Swal.fire(
                "Cancelled",
                `Order cancelled for reason: "${result.value}".`,
                "success"
              );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire("Notice", "Order was not cancelled.", "info");
            }
          });
        }
      }
    });
  });

  function getStatusClass(status) {
    switch (status.toLowerCase()) {
      case "processing":
        return "process-status";
      case "shipped":
        return "shipped-status";
      case "delivered":
        return "delivered-status";
      case "cancelled":
        return "cancelled-status";
      default:
        return "default-status";
    }
  }
}); // end of loading
