// current user 







const database = {
    currentUser: [],
    GuestCart: [],
    users: [
        { id: 1, firstName: "John", lastName: "Doe", email: "johndoe@example.com", password: "securepassword123", cart: [], accountType: "Customer", products: [], orderIds: [101, 102, 103], address: { street: "202 Palm St", city: "Sharm El Sheikh", governorate: "South Sinai" }, mobileNumber: "01289253822", image: "user1.jpg" },
        { id: 2, firstName: "Jane", lastName: "Smith", email: "janesmith@example.com", password: "anothersecurepassword456", cart: [], accountType: "Seller", products: [1, 2, 10, 11, 12, 13, 14, 15], orderIds: [104, 105], address: { street: "10 Gala", city: "Mansoura", governorate: "Dak" }, mobileNumber: "01543234567", image: "user2.jpg" },
        { id: 3, firstName: "Alice", lastName: "Johnson", email: "alicejohnson@example.com", password: "yetanothersecurepassword789", cart: [], accountType: "Admin", products: [], orderIds: [], address: { street: "20 Nasser", city: "Mallawi", governorate: "Minya" }, mobileNumber: "01123456789", image: "user3.jpg" },
        { id: 4, firstName: "Robert", lastName: "Brown", email: "robertb@example.com", password: "password12345", cart: [], accountType: "Customer", products: [], orderIds: [106, 107], address: { street: "202 Palm St", city: "Dairot", governorate: "Asyot" }, mobileNumber: "01234567890", image: "user4.jpg" },
        { id: 5, firstName: "Emma", lastName: "Davis", email: "emmad@example.com", password: "password67890", cart: [], accountType: "Customer", products: [], orderIds: [108, 109], address: { street: "202 Palm St", city: "Sharm El Sheikh", governorate: "South Sinai" }, mobileNumber: "01298765432", image: "user5.jpg" },
        { id: 6, firstName: "Liam", lastName: "Wilson", email: "liamwilson@example.com", password: "liampassword987", cart: [], accountType: "Seller", products: [3, 4], orderIds: [110, 111], address: { street: "202 Palm St", city: "Sharm El Sheikh", governorate: "South Sinai" }, mobileNumber: "01567890123", image: "user6.jpg" },
        { id: 7, firstName: "Sophia", lastName: "Ethan", email: "sophiam@example.com", password: "sophiapassword321", cart: [], accountType: "Seller", products: [5, 6], orderIds: [112, 113], address: { street: "202 Palm St", city: "Sharm El Sheikh", governorate: "South Sinai" }, mobileNumber: "01112345678", image: "user7.jpg" },
        { id: 8, firstName: "John", lastName: "Martinez", email: "ethanlee@example.com", password: "ethanpassword654", cart: [], accountType: "Customer", products: [], orderIds: [114, 115], address: { street: "202 Palm St", city: "Sharm El Sheikh", governorate: "South Sinai" }, mobileNumber: "01234567891", image: "user8.jpg" },
        { id: 9, firstName: "Lee", lastName: "Doe", email: "miagonzalez@example.com", password: "miapassword789", cart: [], accountType: "Seller", products: [7, 8], orderIds: [116, 117], address: { street: "202 Palm St", city: "Sharm El Sheikh", governorate: "South Sinai" }, mobileNumber: "01234567892", image: "user9.jpg" },
        { id: 10, firstName: "John", lastName: "Doe", email: "williamtaylor@example.com", password: "williamsecurepassword123", cart: [], accountType: "Customer", products: [], orderIds: [118, 119], address: { street: "202 Palm St", city: "Sharm El Sheikh", governorate: "South Sinai" }, mobileNumber: "01234567893", image: "user10.jpg" }
    ],
    orders: [
        { orderId: 101, items: [{ id: 1, price: 199.99, quantity: 2 }, { id: 2, price: 149.99, quantity: 1 }], customerId: 1, totalPrice: 549.97, date: "2023-12-03", status: "Shipped", customerDetails: { firstName: "John", lastName: "Doe", address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" }, email: "johndoe@example.com", phone: "123-456-7890" } },
        { orderId: 102, items: [{ id: 3, price: 599.99, quantity: 1 }, { id: 1, price: 199.99, quantity: 3 }], customerId: 1, totalPrice: 1199.95, date: "2023-12-04", status: "Processing", customerDetails: { firstName: "John", lastName: "Doe", address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" }, email: "johndoe@example.com", phone: "123-456-7890" } },
        { orderId: 103, items: [{ id: 2, price: 149.99, quantity: 2 }, { id: 4, price: 299.99, quantity: 1 }], customerId: 1, totalPrice: 599.97, date: "2023-12-05", status: "Shipped", customerDetails: { firstName: "John", lastName: "Doe", address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" }, email: "johndoe@example.com", phone: "123-456-7890" } },
        { orderId: 104, items: [{ id: 5, price: 119.99, quantity: 1 }], customerId: 2, totalPrice: 119.99, date: "2023-12-06", status: "Delivered", customerDetails: { firstName: "Jane", lastName: "Smith", address: { street: "456 Oak St", city: "Cairo", zipCode: "67890" }, email: "janesmith@example.com", phone: "234-567-8901" } },
        { orderId: 105, items: [{ id: 6, price: 149.99, quantity: 2 }, { id: 7, price: 399.99, quantity: 1 }], customerId: 2, totalPrice: 699.97, date: "2023-12-07", status: "Processing", customerDetails: { firstName: "Jane", lastName: "Smith", address: { street: "456 Oak St", city: "Cairo", zipCode: "67890" }, email: "janesmith@example.com", phone: "234-567-8901" } },
        { orderId: 106, items: [{ id: 8, price: 229.99, quantity: 2 }, { id: 9, price: 99.99, quantity: 3 }], customerId: 5, totalPrice: 859.95, date: "2023-12-08", status: "Shipped", customerDetails: { firstName: "Robert", lastName: "Brown", address: { street: "789 Pine St", city: "Alexandria", zipCode: "11223" }, email: "robertb@example.com", phone: "345-678-9012" } },
        { orderId: 107, items: [{ id: 10, price: 129.99, quantity: 1 }, { id: 11, price: 179.99, quantity: 2 }], customerId: 5, totalPrice: 489.97, date: "2023-12-09", status: "Processing", customerDetails: { firstName: "Robert", lastName: "Brown", address: { street: "789 Pine St", city: "Alexandria", zipCode: "11223" }, email: "robertb@example.com", phone: "345-678-9012" } },
        { orderId: 108, items: [{ id: 12, price: 249.99, quantity: 1 }, { id: 13, price: 199.99, quantity: 1 }], customerId: 4, totalPrice: 449.98, date: "2023-12-10", status: "Delivered", customerDetails: { firstName: "Emma", lastName: "Davis", address: { street: "234 Maple St", city: "Tanta", zipCode: "45678" }, email: "emmad@example.com", phone: "456-789-0123" } },
        { orderId: 109, items: [{ id: 14, price: 329.99, quantity: 1 }, { id: 15, price: 89.99, quantity: 1 }], customerId: 4, totalPrice: 419.98, date: "2023-12-11", status: "Processing", customerDetails: { firstName: "Emma", lastName: "Davis", address: { street: "234 Maple St", city: "Tanta", zipCode: "45678" }, email: "emmad@example.com", phone: "456-789-0123" } },
        { orderId: 110, items: [{ id: 16, price: 139.99, quantity: 2 }], customerId: 5, totalPrice: 279.98, date: "2023-12-12", status: "Shipped", customerDetails: { firstName: "Liam", lastName: "Wilson", address: { street: "567 Birch St", city: "Giza", zipCode: "78901" }, email: "liamwilson@example.com", phone: "567-890-1234" } },
        { orderId: 111, items: [{ id: 17, price: 149.99, quantity: 3 }, { id: 18, price: 299.99, quantity: 1 }], customerId: 8, totalPrice: 749.96, date: "2023-12-13", status: "Processing", customerDetails: { firstName: "Liam", lastName: "Wilson", address: { street: "567 Birch St", city: "Giza", zipCode: "78901" }, email: "liamwilson@example.com", phone: "567-890-1234" } },
        { orderId: 112, items: [{ id: 19, price: 199.99, quantity: 2 }, { id: 20, price: 159.99, quantity: 1 }], customerId: 8, totalPrice: 559.97, date: "2023-12-14", status: "Shipped", customerDetails: { firstName: "Olivia", lastName: "Taylor", address: { street: "890 Cedar St", city: "Ismailia", zipCode: "23456" }, email: "oliviataylor@example.com", phone: "678-901-2345" } },
        { orderId: 113, items: [{ id: 21, price: 109.99, quantity: 4 }], customerId: 8, totalPrice: 439.96, date: "2023-12-15", status: "Delivered", customerDetails: { firstName: "Olivia", lastName: "Taylor", address: { street: "890 Cedar St", city: "Ismailia", zipCode: "23456" }, email: "oliviataylor@example.com", phone: "678-901-2345" } },
        { orderId: 114, items: [{ id: 22, price: 299.99, quantity: 1 }, { id: 23, price: 89.99, quantity: 3 }], customerId: 4, totalPrice: 569.96, date: "2023-12-16", status: "Processing", customerDetails: { firstName: "Mia", lastName: "Martin", address: { street: "101 Poplar St", city: "Hurghada", zipCode: "34567" }, email: "miamartin@example.com", phone: "789-012-3456" } },
        { orderId: 115, items: [{ id: 10, price: 129.99, quantity: 1 }, { id: 25, price: 179.99, quantity: 2 }], customerId: 4, totalPrice: 489.97, date: "2023-12-17", status: "Shipped", customerDetails: { firstName: "Mia", lastName: "Martin", address: { street: "101 Poplar St", city: "Hurghada", zipCode: "34567" }, email: "miamartin@example.com", phone: "789-012-3456" } },
        { orderId: 116, items: [{ id: 1, price: 199.99, quantity: 2 }, { id: 2, price: 149.99, quantity: 1 }], customerId: 1, totalPrice: 549.97, date: "2023-12-03", status: "Processing", customerDetails: { firstName: "John", lastName: "Doe", address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" }, email: "johndoe@example.com", phone: "123-456-7890" } },
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
        },
        {
            id: 16,
            name: "Smart Pro Watch",
            price: 359.99,
            sales: 40,
            stock: 25,
            brandId: 2,
            date: "2023-11-30",
            images: ["smartpro1.jpg", "smartpro2.jpg"],
            gender: "Unisex"
        },
        {
            id: 17,
            name: "Diamond Watch",
            price: 999.99,
            sales: 10,
            stock: 5,
            brandId: 1,
            date: "2023-12-01",
            images: ["diamond1.jpg", "diamond2.jpg", "diamond3.jpg"],
            gender: "Women"
        },
        {
            id: 18,
            name: "Explorer Watch",
            price: 179.99,
            sales: 60,
            stock: 30,
            brandId: 3,
            date: "2023-10-25",
            images: ["explorer1.jpg"],
            gender: "Men"
        },
        {
            id: 19,
            name: "Casual Watch",
            price: 109.99,
            sales: 90,
            stock: 70,
            brandId: 4,
            date: "2023-11-12",
            images: ["casual1.jpg", "casual2.jpg"],
            gender: "Unisex"
        },
        {
            id: 20,
            name: "High-Tech Watch",
            price: 449.99,
            sales: 25,
            stock: 20,
            brandId: 2,
            date: "2023-12-08",
            images: ["hightech1.jpg", "hightech2.jpg", "hightech3.jpg"],
            gender: "Unisex"
        },
        {
            id: 21,
            name: "Traveler Watch",
            price: 219.99,
            sales: 30,
            stock: 50,
            brandId: 5,
            date: "2023-12-09",
            images: ["traveler1.jpg"],
            gender: "Unisex"
        },
        {
            id: 22,
            name: "Executive Watch",
            price: 529.99,
            sales: 15,
            stock: 25,
            brandId: 1,
            date: "2023-10-20",
            images: ["executive1.jpg", "executive2.jpg"],
            gender: "Men"
        },
        {
            id: 23,
            name: "Mountain Watch",
            price: 189.99,
            sales: 50,
            stock: 45,
            brandId: 4,
            date: "2023-11-01",
            images: ["mountain1.jpg", "mountain2.jpg"],
            gender: "Unisex"
        },
        {
            id: 24,
            name: "Urban Watch",
            price: 199.99,
            sales: 35,
            stock: 40,
            brandId: 3,
            date: "2023-12-03",
            images: ["urban1.jpg"],
            gender: "Women"
        },
        {
            id: 25,
            name: "Marine Watch",
            price: 299.99,
            sales: 20,
            stock: 30,
            brandId: 5,
            date: "2023-12-04",
            images: ["marine1.jpg", "marine2.jpg"],
            gender: "Men"
        },
        {
            id: 1000,
            name: "Zara Watch",
            price: 299.99,
            sales: 75,
            stock: 15,
            brandId: 5,
            date: "2023-12-04",
            images: ["zara1.jpg", "zara2.jpg"],
            gender: "Men"
        }




    ],
    brands: [
        { id: 1, name: "Elegant Timepieces", images: ["elegant1.jpg", "elegant2.jpg"], description: "Sophisticated and timeless watches designed for elegance and class." },
        { id: 2, name: "Sporty Watches Co.", images: ["sporty1.jpg", "sporty2.jpg"], description: "Durable and stylish watches perfect for athletes and active lifestyles." },
        { id: 3, name: "Trendy Watches", images: ["trendy1.jpg", "trendy2.jpg"], description: "Fashion-forward watches that keep you up-to-date with the latest trends." },
        { id: 4, name: "Luxury Timepieces", images: ["luxury1.jpg", "luxury2.jpg"], description: "High-end, luxurious watches crafted with precision and sophistication." },
        { id: 5, name: "Fashionable Watches", images: ["fashion1.jpg", "fashion2.jpg"], description: "Chic and fashionable watches that add a touch of style to any outfit." }
    ],
};


// Save Data To LocalStorage 
function SaveDataToLocalStorage(database) {
    for (var key in database) {
        localStorage.setItem(key, JSON.stringify(database[key]));
    }
}


// load data from local storage
export function GetDataFromLocalStorage(database) {
    for (var key in database) {
        database[key] = JSON.parse(localStorage.getItem(key));
    }
    return database;
}

// Add New User
export function AddUser(user) {
    if (GetUserById(user.id)) {
        console.log("already exist")
    } else {
        database.users.push(user);
        SaveDataToLocalStorage(database);
    }
}

// get user by id

export function GetUserById(id) {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = null;
    users.forEach((Element) => {
        if (Element.id == id)
            user = Element;
    })
    return user;
}


// get user by email

export function GetUserByEmail(email) {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = null;
    users.forEach((Element) => {
        if (Element.email == email)
            user = Element;
    })
    return user;
}


// get all Products 
export function GetAllProducts() {
    return JSON.parse(localStorage.getItem("products"));
}


// get product by id
export function GetProductById(id) {
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
export function AddProduct(product) {
    if (!GetProductById(product.id)) {
        database.products.push(product);
        SaveDataToLocalStorage(database);
    } else {
        console.log("already exist");
    }
}


// remove product => check if this produc inside an orders 
export function RemoveProduct(product) {
    //console.log(product);
    let updatedProds = database.products.filter((element) => element.id !== product.id)
    //console.log(updatedProds)
    database.products = updatedProds;
    SaveDataToLocalStorage(database);
}

// Get All Brands 
export function GetAllBrands() {
    return JSON.parse(localStorage.getItem("brands"));
}


// get brand by id 
export function GetBrandById(id) {
    let brand = null;
    GetAllBrands().forEach((element) => {
        if (element.id == id) {
            brand = element;
        }
    })
    return brand;
}


// add new brand
export function AddBrand(brand) {
    if (!GetBrandById(brand.id)) {
        database.brands.push(brand);
        SaveDataToLocalStorage(database);
    } else {
        console.log("already exsit");
    }
}

// remove brand
export function RemoveBrand(brand) {
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

// get all orders 
export function GetAllOrders() {
    return JSON.parse(localStorage.getItem("orders"));
}


// get Current User
export function GetCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"))[0];
}
// console.log(GetCurrentUser())


// get products related to seller 
export function GetProductRelatedToSeller(id) {
    let user = GetUserById(id);
    let prodIds = user.products;
    let products = GetAllProducts();
    return products.filter(product => prodIds.includes(product.id));
}

// class for product
export class product {
    constructor(_id, _name, _price, _stock, _sale, _brandId, _Date, _images, _gender) {
        this.id = _id,
            this.name = _name,
            this.price = _price,
            this.sales = _sale,
            this.stock = _stock,
            this.brandId = _brandId,
            this.date = _Date,
            this.images = _images,
            this.gender = _gender
    }
}

// get all brand names 
export function GetBrandsName() {
    let brands = GetAllBrands();
    let brandNames = [];
    brands.forEach((brand) => brandNames.push(brand.name));
    return brandNames;
}

// get brand based on name of it

export function GetBrandIdBasedOnName(_name) {
    let id;
    GetAllBrands().forEach((brand) => {
        if (brand.name == _name) {
            id = brand.id;
            return
        }
    })
    return id;
}


