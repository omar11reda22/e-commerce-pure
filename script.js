const database = {
    users: [
        { id: 1, name: "John Doe", email: "johndoe@example.com", password: "securepassword123", cart: [], accountType: "Customer", products: [], orderIds: [101, 102, 103] },
        { id: 2, name: "Jane Smith", email: "janesmith@example.com", password: "anothersecurepassword456", cart: [], accountType: "Seller", products: [1, 2], orderIds: [104, 105] },
        { id: 3, name: "Alice Johnson", email: "alicejohnson@example.com", password: "yetanothersecurepassword789", cart: [], accountType: "Admin", products: [], orderIds: [] },
        { id: 4, name: "Robert Brown", email: "robertb@example.com", password: "password12345", cart: [], accountType: "Customer", products: [], orderIds: [106, 107] },
        { id: 5, name: "Emma Davis", email: "emmad@example.com", password: "password67890", cart: [], accountType: "Customer", products: [], orderIds: [108, 109] },
        { id: 6, name: "Liam Wilson", email: "liamwilson@example.com", password: "liampassword987", cart: [], accountType: "Seller", products: [3, 4], orderIds: [110, 111] },
        { id: 7, name: "Sophia Martinez", email: "sophiam@example.com", password: "sophiapassword321", cart: [], accountType: "Seller", products: [5, 6], orderIds: [112, 113] },
        { id: 8, name: "Ethan Lee", email: "ethanlee@example.com", password: "ethanpassword654", cart: [], accountType: "Customer", products: [], orderIds: [114, 115] },
        { id: 9, name: "Mia Gonzalez", email: "miagonzalez@example.com", password: "miapassword789", cart: [], accountType: "Seller", products: [7, 8], orderIds: [116, 117] },
        { id: 10, name: "William Taylor", email: "williamtaylor@example.com", password: "williamsecurepassword123", cart: [], accountType: "Customer", products: [], orderIds: [118, 119] },
    ],
    orders: [
        { orderId: 101, items: [{ id: 1, price: 199.99, quantity: 2 }, { id: 2, price: 149.99, quantity: 1 }], customerId: 1, totalPrice: 549.97, date: "2023-12-03", status: "Shipped", customerDetails: { firstName: "John", lastName: "Doe", address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" }, email: "johndoe@example.com", phone: "123-456-7890" } },
        { orderId: 102, items: [{ id: 3, price: 599.99, quantity: 1 }, { id: 1, price: 199.99, quantity: 3 }], customerId: 1, totalPrice: 1199.95, date: "2023-12-04", status: "Processing", customerDetails: { firstName: "John", lastName: "Doe", address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" }, email: "johndoe@example.com", phone: "123-456-7890" } },
        { orderId: 103, items: [{ id: 2, price: 149.99, quantity: 2 }, { id: 4, price: 299.99, quantity: 1 }], customerId: 1, totalPrice: 599.97, date: "2023-12-05", status: "Shipped", customerDetails: { firstName: "John", lastName: "Doe", address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" }, email: "johndoe@example.com", phone: "123-456-7890" } },
    ],
    products: [
        {
            id: 1,
            name: "Classic Watch",
            price: 199.99,
            sales: 50,
            stock: 20,
            brandId: 1,
            date: "2023-10-01",
            images: ["classic1.jpg", "classic2.jpg", "classic3.jpg"],
            gender: "Men"
        },
        {
            id: 2,
            name: "Sport Watch",
            price: 149.99,
            sales: 100,
            stock: 30,
            brandId: 2,
            date: "2023-11-15",
            images: ["sport1.jpg", "sport2.jpg"],
            gender: "Unisex"
        },
        {
            id: 3,
            name: "Luxury Watch",
            price: 599.99,
            sales: 20,
            stock: 15,
            brandId: 1,
            date: "2023-12-05",
            images: ["luxury1.jpg", "luxury2.jpg", "luxury3.jpg", "luxury4.jpg"],
            gender: "Women"
        },
        {
            id: 4,
            name: "Smart Watch",
            price: 299.99,
            sales: 30,
            stock: 25,
            brandId: 2,
            date: "2023-11-18",
            images: ["smart1.jpg"],
            gender: "Unisex"
        },
        {
            id: 5,
            name: "Fashion Watch",
            price: 119.99,
            sales: 40,
            stock: 50,
            brandId: 3,
            date: "2023-12-06",
            images: ["fashion1.jpg", "fashion2.jpg"],
            gender: "Women"
        },
        {
            id: 6,
            name: "Sports Watch",
            price: 149.99,
            sales: 60,
            stock: 35,
            brandId: 3,
            date: "2023-10-10",
            images: ["sports1.jpg", "sports2.jpg"],
            gender: "Men"
        },
        {
            id: 7,
            name: "Gold Watch",
            price: 399.99,
            sales: 25,
            stock: 40,
            brandId: 4,
            date: "2023-12-08",
            images: ["gold1.jpg", "gold2.jpg"],
            gender: "Women"
        },
        {
            id: 8,
            name: "Vintage Watch",
            price: 229.99,
            sales: 70,
            stock: 30,
            brandId: 4,
            date: "2023-10-05",
            images: ["vintage1.jpg", "vintage2.jpg", "vintage3.jpg"],
            gender: "Unisex"
        },
        {
            id: 9,
            name: "Eco Watch",
            price: 99.99,
            sales: 80,
            stock: 60,
            brandId: 5,
            date: "2023-11-20",
            images: ["eco1.jpg", "eco2.jpg"],
            gender: "Unisex"
        },
        {
            id: 10,
            name: "Digital Watch",
            price: 129.99,
            sales: 45,
            stock: 50,
            brandId: 5,
            date: "2023-12-10",
            images: ["digital1.jpg", "digital2.jpg"],
            gender: "Men"
        },
        {
            id: 11,
            name: "Minimal Watch",
            price: 179.99,
            sales: 55,
            stock: 25,
            brandId: 1,
            date: "2023-12-12",
            images: ["minimal1.jpg", "minimal2.jpg", "minimal3.jpg"],
            gender: "Women"
        },
        {
            id: 12,
            name: "Chronograph Watch",
            price: 249.99,
            sales: 35,
            stock: 40,
            brandId: 2,
            date: "2023-10-15",
            images: ["chrono1.jpg", "chrono2.jpg"],
            gender: "Men"
        },
        {
            id: 13,
            name: "Elegant Watch",
            price: 329.99,
            sales: 20,
            stock: 30,
            brandId: 3,
            date: "2023-11-25",
            images: ["elegant1.jpg", "elegant2.jpg", "elegant3.jpg"],
            gender: "Women"
        },
        {
            id: 14,
            name: "Outdoor Watch",
            price: 89.99,
            sales: 100,
            stock: 75,
            brandId: 4,
            date: "2023-11-28",
            images: ["outdoor1.jpg"],
            gender: "Unisex"
        },
        {
            id: 15,
            name: "Retro Watch",
            price: 139.99,
            sales: 65,
            stock: 45,
            brandId: 5,
            date: "2023-12-15",
            images: ["retro1.jpg", "retro2.jpg"],
            gender: "Men"
        }

    ],
    brands: [
        { id: 1, name: "Elegant Timepieces", images: ["elegant1.jpg", "elegant2.jpg"] },
        { id: 2, name: "Sporty Watches Co.", images: ["sporty1.jpg", "sporty2.jpg"] },
        { id: 3, name: "Trendy Watches", images: ["trendy1.jpg", "trendy2.jpg"] },
        { id: 4, name: "Luxury Timepieces", images: ["luxury1.jpg", "luxury2.jpg"] },
        { id: 5, name: "Fashionable Watches", images: ["fashion1.jpg", "fashion2.jpg"] },
    ],
};


// Save Data To LocalStorage 
function SaveDataToLocalStorage(database) {
    for (var key in database) {
        localStorage.setItem(key, JSON.stringify(database[key]));
    }
}


// load data from local storage
function GetDataFromLocalStorage(database) {
    for (var key in database) {
        database[key] = JSON.parse(localStorage.getItem(key));
    }
    return database;
}

// Add New User
function AddUser(user) {
    if (GetUserById(user.id)) {
        console.log("already exist")
    } else {
        database.users.push(user);
        SaveDataToLocalStorage(database);
    }
}

// get user by id

function GetUserById(id) {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = null;
    users.forEach((Element) => {
        if (Element.id == id)
            user = Element;
    })
    return user;
}


// get user by email

function GetUserByEmail(email) {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = null;
    users.forEach((Element) => {
        if (Element.email == email)
            user = Element;
    })
    return user;
}


// get all Products 
function GetAllProducts() {
    return JSON.parse(localStorage.getItem("products"));
}


// get product by id
function GetProductById(id) {
    let product;
    GetAllProducts().forEach((prod) => {
        if (prod.id == id) {
            product = prod;
            return;
        }
    })
    return product;
}


// add product 
function AddProduct(product) {
    if (!GetProductById(product.id)) {
        database.products.push(product);
        SaveDataToLocalStorage(database);
    } else {
        console.log("already exist");
    }
}


// remove product => check if this produc inside an orders 
function RemoveProduct(product) {
    //console.log(product);
    let updatedProds = database.products.filter((element) => element.id !== product.id)
    //console.log(updatedProds)
    database.products = updatedProds;
    SaveDataToLocalStorage(database);
}

// Get All Brands 
function GetAllBrands() {
    return JSON.parse(localStorage.getItem("brands"));
}


// get brand by id 
function GetBrandById(id) {
    let brand = null;
    GetAllBrands().forEach((element) => {
        if (element.id == id) {
            brand = element;
        }
    })
    return brand;
}


// add new brand
function AddBrand(brand) {
    if (!GetBrandById(brand.id)) {
        database.brands.push(brand);
        SaveDataToLocalStorage(database);
    } else {
        console.log("already exsit");
    }
}

// remove brand
function RemoveBrand(brand) {
    database.products.forEach((prod) => {
        if (prod.brandId == brand.id) {
            console.log("Can not Make this operation");
        } else {
            let updatedBrands = database.brands.filter(element => element != brand);
            database.brands = updatedBrands;
            SaveDataToLocalStorage(database);
        }

    })
}


