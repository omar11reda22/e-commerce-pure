/* 


const database = {
    users: [
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            password: "securepassword123",
            cart: [],
            accountType: "Customer",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "janesmith@example.com",
            password: "anothersecurepassword456",
            cart: [],
            accountType: "seller",
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alicejohnson@example.com",
            password: "yetanothersecurepassword789",
            cart: [],
            accountType: "admin",
        },
        // Add more users as needed
    ],
    orders: [
        {
            orderId: 101,
            items: [
                {
                    id: 1,
                    title: "Classic Watch",
                    description: "Elegant classic watch with leather strap.",
                    images: ["watch1.jpg", "watch1_alt.jpg"],
                    sellerId: 10,
                    category: "Watches",
                    stock: 20,
                    price: 199.99,
                    quantity: 1,
                    type: "Leather",
                },
                {
                    id: 2,
                    title: "Sport Watch",
                    description: "Durable sport watch with various features.",
                    images: ["watch2.jpg", "watch2_alt.jpg"],
                    sellerId: 11,
                    category: "Watches",
                    stock: 30,
                    price: 149.99,
                    quantity: 2,
                    type: "Smart Watch",
                },
            ],
            customerId: 1,
            status: "Shipped",
            date: "2023-12-03",
            customerDetails: {
                firstName: "John",
                lastName: "Doe",
                address: {
                    street: "123 Main St",
                    city: "Mansoura",
                    zipCode: "12345",
                },
                email: "johndoe@example.com",
                phone: "123-456-7890",
            },
        },
        {
            orderId: 102,
            items: [
                {
                    id: 3,
                    title: "Luxury Watch",
                    description: "High-end luxury watch with gold plating.",
                    images: ["watch3.jpg", "watch3_alt.jpg"],
                    sellerId: 12,
                    category: "Watches",
                    stock: 15,
                    price: 599.99,
                    quantity: 1,
                    type: "Luxury",
                },
            ],
        customerId: 2,
        status: "Processing",
        date: "2023-12-04",
        customerDetails: {
            firstName: "Jane",
            lastName: "Smith",
            address: {
                street: "456 Elm St",
                city: "Cairo",
                zipCode: "67890",
            },
            email: "janesmith@example.com",
            phone: "987-654-3210",
        },
    },
    // Add more orders as needed
],
products: [
    {
        id: 1,
        name: "Classic Watch",
        description: "Elegant classic watch with leather strap.",
        images: ["watch1.jpg", "watch1_alt.jpg"],
        price: 199.99,
        prevPrice: 249.99,
        category: "Watches",
        color: "Brown",
        sellerId: 10,
        stock: 20,
        brandId: 1,
        type: "Leather",
    },
    {
        id: 2,
        name: "Sport Watch",
        description: "Durable sport watch with various features.",
        images: ["watch2.jpg", "watch2_alt.jpg"],
        price: 149.99,
        prevPrice: 199.99,
        category: "Watches",
        color: "Black",
        sellerId: 11,
        stock: 30,
        brandId: 2,
        type: "Smart Watch",
    },
    {
        id: 3,
        name: "Luxury Watch",
        description: "High-end luxury watch with gold plating.",
        images: ["watch3.jpg", "watch3_alt.jpg"],
        price: 599.99,
        prevPrice: 799.99,
        category: "Watches",
        color: "Gold",
        sellerId: 12,
        stock: 15,
        brandId: 1,
        type: "Luxury",
    },
    // Add more products as needed
],
brands: [
    {
        id: 1,
        name: "Elegant Timepieces",
        description: "Luxurious and elegant watches for every occasion.",
    },
    {
        id: 2,
        name: "Sporty Watches Co.",
        description: "Durable and feature-packed watches for active lifestyles.",
    },
    // Add more brands as needed
],
};



*/


const database = {
    users: [
        {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            password: "securepassword123",
            cart: [],
            accountType: "Customer",
            products: [],
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "janesmith@example.com",
            password: "anothersecurepassword456",
            cart: [],
            accountType: "seller",
            products: [2],
        },
        {
            id: 3,
            name: "Alice Johnson",
            email: "alicejohnson@example.com",
            password: "yetanothersecurepassword789",
            cart: [],
            accountType: "admin",
            products: [],
        },
        // Add more users as needed
    ],
    orders: [
        {
            orderId: 101,
            items: [
                {
                    id: 1,
                    title: "Classic Watch",
                    description: "Elegant classic watch with leather strap.",
                    images: ["watch1.jpg", "watch1_alt.jpg"],
                    sellerId: 10,
                    category: "Watches",
                    stock: 20,
                    price: 199.99,
                    quantity: 1,
                    type: "Leather",
                },
                {
                    id: 2,
                    title: "Sport Watch",
                    description: "Durable sport watch with various features.",
                    images: ["watch2.jpg", "watch2_alt.jpg"],
                    sellerId: 11,
                    category: "Watches",
                    stock: 30,
                    price: 149.99,
                    quantity: 2,
                    type: "Smart Watch",
                },
            ],
            customerId: 1,
            status: "Shipped",
            date: "2023-12-03",
            customerDetails: {
                firstName: "John",
                lastName: "Doe",
                address: {
                    street: "123 Main St",
                    city: "Mansoura",
                    zipCode: "12345",
                },
                email: "johndoe@example.com",
                phone: "123-456-7890",
            },
        },
        {
            orderId: 102,
            items: [
                {
                    id: 3,
                    title: "Luxury Watch",
                    description: "High-end luxury watch with gold plating.",
                    images: ["watch3.jpg", "watch3_alt.jpg"],
                    sellerId: 12,
                    category: "Watches",
                    stock: 15,
                    price: 599.99,
                    quantity: 1,
                    type: "Luxury",
                },
            ],
            customerId: 2,
            status: "Processing",
            date: "2023-12-04",
            customerDetails: {
                firstName: "Jane",
                lastName: "Smith",
                address: {
                    street: "456 Elm St",
                    city: "Cairo",
                    zipCode: "67890",
                },
                email: "janesmith@example.com",
                phone: "987-654-3210",
            },
        },
        // Add more orders as needed
    ],
    products: [
        {
            id: 1,
            name: "Classic Watch",
            description: "Elegant classic watch with leather strap.",
            images: ["watch1.jpg", "watch1_alt.jpg"],
            price: 199.99,
            prevPrice: 249.99,
            category: "Watches",
            color: "Brown",
            sellerId: 10,
            stock: 20,
            brandId: 1,
            type: "Leather",
            gender: "Unisex",
        },
        {
            id: 2,
            name: "Sport Watch",
            description: "Durable sport watch with various features.",
            images: ["watch2.jpg", "watch2_alt.jpg"],
            price: 149.99,
            prevPrice: 199.99,
            category: "Watches",
            color: "Black",
            sellerId: 11,
            stock: 30,
            brandId: 2,
            type: "Smart Watch",
            gender: "Male",
        },
        {
            id: 3,
            name: "Luxury Watch",
            description: "High-end luxury watch with gold plating.",
            images: ["watch3.jpg", "watch3_alt.jpg"],
            price: 599.99,
            prevPrice: 799.99,
            category: "Watches",
            color: "Gold",
            sellerId: 12,
            stock: 15,
            brandId: 1,
            type: "Luxury",
            gender: "Female",
        },
        // Add more products as needed
    ],
    brands: [
        {
            id: 1,
            name: "Elegant Timepieces",
            description: "Luxurious and elegant watches for every occasion.",
        },
        {
            id: 2,
            name: "Sporty Watches Co.",
            description: "Durable and feature-packed watches for active lifestyles.",
        },
        // Add more brands as needed
    ],
};






// image [] for brand
// orders [] for user 
// date for products 
// remove category from product 
// number of sales for product

// total price for => orders 






// Save Data To LocalStorage 
function SaveDataToLocalStorage(database) {
    for (var key in database) {
        localStorage.setItem(key, JSON.stringify(database[key]));
    }
}


SaveDataToLocalStorage(database);

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


// let user01 ={
//     id: 4,
//     name: "Abanoub",
//     email: "abanoub@example.com",
//     password: "123",
//     cart: [],
//     accountType: "Admin",
//     products: [], 
// }

// AddUser(user01);




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

//console.log(GetUserById(10));




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


// retreve order 
















let b = {
    id: 3,
    name: "casio",
    description: "good watches",
}
AddBrand(b);

RemoveBrand(b);




















/*
let prod = {
    id: 4,
    name: "Smart Watch",
    description: "Elegant classic watch with leather strap.",
    images: ["watch1.jpg", "watch1_alt.jpg"],
    price: 150,
    prevPrice: 199.99,
    category: "Watches",
    color: "black",
    sellerId: 10,
    stock: 20,
    brandId: 1,
    type: "Leather"
}

AddProduct(prod);

RemoveProduct(prod);
*/

/*
function UpdateUserData (user)
{
    let oldVersion = GetUserById(user.id);
    for(var key in user)
    {
    oldVersionkey = user.key;
}
}
*/




// localStorage.setItem("users", JSON.stringify(database.users) )



/*
var user = {
    id: 5,
    name: "abanoub",
    email: "abanoub@gmail.com",
    password: "abanoub123",
    cart: [],
    accountType: "Admin",
}

let e = "abanoub@gmail.com";
console.log(GetUserByEmail("abanoub@gmail.com"))
let user02 = {
    id: 5,
    name: "Nahed",
    email: "Nahed@gmail.com",
    password: "Nahed123",
    cart: [],
    accountType: "customer",
}

UpdateUserData(user02)

AddUser(user);
AddUser(user02)

*/
