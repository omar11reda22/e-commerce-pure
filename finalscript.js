// current user
export const database = {
  currentUser: null,
  GuestCart: [],
  users: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      password: "securepassword123",
      cart: [],
      accountType: "Customer",
      products: [],
      orderIds: [101, 102, 103],
      address: {
        street: "202 Palm St",
        city: "Sharm El Sheikh",
        governorate: "South Sinai",
      },
      mobileNumber: "01289253822",
      image: "user1.jpg",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "janesmith@example.com",
      password: "anothersecurepassword456",
      cart: [],
      accountType: "Seller",
      products: [1, 2, 10, 11, 12, 13, 14, 15],
      orderIds: [104, 105],
      address: { street: "10 Gala", city: "Mansoura", governorate: "Dak" },
      mobileNumber: "01543234567",
      image: "user2.jpg",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alicejohnson@example.com",
      password: "yetanothersecurepassword789",
      cart: [],
      accountType: "Admin",
      products: [],
      orderIds: [],
      address: { street: "20 Nasser", city: "Mallawi", governorate: "Minya" },
      mobileNumber: "01123456789",
      image: "user3.jpg",
    },
    {
      id: 4,
      firstName: "Robert",
      lastName: "Brown",
      email: "robertb@example.com",
      password: "password12345",
      cart: [],
      accountType: "Customer",
      products: [],
      orderIds: [106, 107],
      address: { street: "202 Palm St", city: "Dairot", governorate: "Asyot" },
      mobileNumber: "01234567890",
      image: "user4.jpg",
    },
    {
      id: 5,
      firstName: "Emma",
      lastName: "Davis",
      email: "emmad@example.com",
      password: "password67890",
      cart: [],
      accountType: "Customer",
      products: [],
      orderIds: [108, 109],
      address: {
        street: "202 Palm St",
        city: "Sharm El Sheikh",
        governorate: "South Sinai",
      },
      mobileNumber: "01298765432",
      image: "user5.jpg",
    },
    {
      id: 6,
      firstName: "Liam",
      lastName: "Wilson",
      email: "liamwilson@example.com",
      password: "liampassword987",
      cart: [],
      accountType: "Seller",
      products: [3, 4],
      orderIds: [110, 111],
      address: {
        street: "202 Palm St",
        city: "Sharm El Sheikh",
        governorate: "South Sinai",
      },
      mobileNumber: "01567890123",
      image: "user6.jpg",
    },
    {
      id: 7,
      firstName: "Sophia",
      lastName: "Ethan",
      email: "sophiam@example.com",
      password: "sophiapassword321",
      cart: [],
      accountType: "Seller",
      products: [5, 6],
      orderIds: [112, 113],
      address: {
        street: "202 Palm St",
        city: "Sharm El Sheikh",
        governorate: "South Sinai",
      },
      mobileNumber: "01112345678",
      image: "user7.jpg",
    },
    {
      id: 8,
      firstName: "John",
      lastName: "Martinez",
      email: "ethanlee@example.com",
      password: "ethanpassword654",
      cart: [],
      accountType: "Customer",
      products: [],
      orderIds: [114, 115],
      address: {
        street: "202 Palm St",
        city: "Sharm El Sheikh",
        governorate: "South Sinai",
      },
      mobileNumber: "01234567891",
      image: "user8.jpg",
    },
    {
      id: 9,
      firstName: "Lee",
      lastName: "Doe",
      email: "miagonzalez@example.com",
      password: "miapassword789",
      cart: [],
      accountType: "Seller",
      products: [7, 8],
      orderIds: [116, 117],
      address: {
        street: "202 Palm St",
        city: "Sharm El Sheikh",
        governorate: "South Sinai",
      },
      mobileNumber: "01234567892",
      image: "user9.jpg",
    },
    {
      id: 10,
      firstName: "John",
      lastName: "Doe",
      email: "williamtaylor@example.com",
      password: "williamsecurepassword123",
      cart: [],
      accountType: "Customer",
      products: [],
      orderIds: [118, 119],
      address: {
        street: "202 Palm St",
        city: "Sharm El Sheikh",
        governorate: "South Sinai",
      },
      mobileNumber: "01234567893",
      image: "user10.jpg",
    },
  ],
  orders: [
    {
      orderId: 101,
      items: [
        { id: 1, price: 199.99, quantity: 2 },
        { id: 2, price: 149.99, quantity: 1 },
      ],
      customerId: 1,
      totalPrice: 549.97,
      date: "2023-12-03",
      status: "Shipped",
      cancelMSG: "",
      customerDetails: {
        firstName: "John",
        lastName: "Doe",
        address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" },
        email: "johndoe@example.com",
        phone: "123-456-7890",
      },
    },
    {
      orderId: 102,
      items: [
        { id: 3, price: 599.99, quantity: 1 },
        { id: 1, price: 199.99, quantity: 3 },
      ],
      customerId: 1,
      totalPrice: 1199.95,
      date: "2023-12-04",
      status: "Processing",
      cancelMSG: "",
      customerDetails: {
        firstName: "John",
        lastName: "Doe",
        address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" },
        email: "johndoe@example.com",
        phone: "123-456-7890",
      },
    },
    {
      orderId: 103,
      items: [
        { id: 2, price: 149.99, quantity: 2 },
        { id: 4, price: 299.99, quantity: 1 },
      ],
      customerId: 1,
      totalPrice: 599.97,
      date: "2023-12-05",
      status: "Shipped",
      cancelMSG: "",
      customerDetails: {
        firstName: "John",
        lastName: "Doe",
        address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" },
        email: "johndoe@example.com",
        phone: "123-456-7890",
      },
    },
    {
      orderId: 104,
      items: [{ id: 5, price: 119.99, quantity: 1 }],
      customerId: 2,
      totalPrice: 119.99,
      date: "2023-12-06",
      status: "canceled",
      cancelMSG: "",
      customerDetails: {
        firstName: "Jane",
        lastName: "Smith",
        address: { street: "456 Oak St", city: "Cairo", zipCode: "67890" },
        email: "janesmith@example.com",
        phone: "234-567-8901",
      },
    },
    {
      orderId: 105,
      items: [
        { id: 6, price: 149.99, quantity: 2 },
        { id: 7, price: 399.99, quantity: 1 },
      ],
      customerId: 2,
      totalPrice: 699.97,
      date: "2023-12-07",
      status: "Processing",
      cancelMSG: "",
      customerDetails: {
        firstName: "Jane",
        lastName: "Smith",
        address: { street: "456 Oak St", city: "Cairo", zipCode: "67890" },
        email: "janesmith@example.com",
        phone: "234-567-8901",
      },
    },
    {
      orderId: 106,
      items: [
        { id: 8, price: 229.99, quantity: 2 },
        { id: 9, price: 99.99, quantity: 3 },
      ],
      customerId: 5,
      totalPrice: 859.95,
      date: "2023-12-08",
      status: "Shipped",
      cancelMSG: "",
      customerDetails: {
        firstName: "Robert",
        lastName: "Brown",
        address: {
          street: "789 Pine St",
          city: "Alexandria",
          zipCode: "11223",
        },
        email: "robertb@example.com",
        phone: "345-678-9012",
      },
    },
    {
      orderId: 107,
      items: [
        { id: 10, price: 129.99, quantity: 1 },
        { id: 11, price: 179.99, quantity: 2 },
      ],
      customerId: 5,
      totalPrice: 489.97,
      date: "2023-12-09",
      status: "Processing",
      cancelMSG: "",
      customerDetails: {
        firstName: "Robert",
        lastName: "Brown",
        address: {
          street: "789 Pine St",
          city: "Alexandria",
          zipCode: "11223",
        },
        email: "robertb@example.com",
        phone: "345-678-9012",
      },
    },
    {
      orderId: 108,
      items: [
        { id: 12, price: 249.99, quantity: 1 },
        { id: 13, price: 199.99, quantity: 1 },
      ],
      customerId: 4,
      totalPrice: 449.98,
      date: "2023-12-10",
      status: "canceled",
      cancelMSG: "",
      customerDetails: {
        firstName: "Emma",
        lastName: "Davis",
        address: { street: "234 Maple St", city: "Tanta", zipCode: "45678" },
        email: "emmad@example.com",
        phone: "456-789-0123",
      },
    },
    {
      orderId: 109,
      items: [
        { id: 14, price: 329.99, quantity: 1 },
        { id: 15, price: 89.99, quantity: 1 },
      ],
      customerId: 4,
      totalPrice: 419.98,
      date: "2023-12-11",
      status: "Processing",
      cancelMSG: "",
      customerDetails: {
        firstName: "Emma",
        lastName: "Davis",
        address: { street: "234 Maple St", city: "Tanta", zipCode: "45678" },
        email: "emmad@example.com",
        phone: "456-789-0123",
      },
    },
    {
      orderId: 110,
      items: [{ id: 16, price: 139.99, quantity: 2 }],
      customerId: 5,
      totalPrice: 279.98,
      date: "2023-12-12",
      status: "Shipped",
      cancelMSG: "",
      customerDetails: {
        firstName: "Liam",
        lastName: "Wilson",
        address: { street: "567 Birch St", city: "Giza", zipCode: "78901" },
        email: "liamwilson@example.com",
        phone: "567-890-1234",
      },
    },
    {
      orderId: 111,
      items: [
        { id: 17, price: 149.99, quantity: 3 },
        { id: 18, price: 299.99, quantity: 1 },
      ],
      customerId: 8,
      totalPrice: 749.96,
      date: "2023-12-13",
      status: "Processing",
      cancelMSG: "",
      customerDetails: {
        firstName: "Liam",
        lastName: "Wilson",
        address: { street: "567 Birch St", city: "Giza", zipCode: "78901" },
        email: "liamwilson@example.com",
        phone: "567-890-1234",
      },
    },
    {
      orderId: 112,
      items: [
        { id: 19, price: 199.99, quantity: 2 },
        { id: 20, price: 159.99, quantity: 1 },
      ],
      customerId: 8,
      totalPrice: 559.97,
      date: "2023-12-14",
      status: "Shipped",
      cancelMSG: "",
      customerDetails: {
        firstName: "Olivia",
        lastName: "Taylor",
        address: { street: "890 Cedar St", city: "Ismailia", zipCode: "23456" },
        email: "oliviataylor@example.com",
        phone: "678-901-2345",
      },
    },
    {
      orderId: 113,
      items: [{ id: 21, price: 109.99, quantity: 4 }],
      customerId: 8,
      totalPrice: 439.96,
      date: "2023-12-15",
      status: "canceled",
      cancelMSG: "",
      customerDetails: {
        firstName: "Olivia",
        lastName: "Taylor",
        address: { street: "890 Cedar St", city: "Ismailia", zipCode: "23456" },
        email: "oliviataylor@example.com",
        phone: "678-901-2345",
      },
    },
    {
      orderId: 114,
      items: [
        { id: 22, price: 299.99, quantity: 1 },
        { id: 23, price: 89.99, quantity: 3 },
      ],
      customerId: 4,
      totalPrice: 569.96,
      date: "2023-12-16",
      status: "Processing",
      cancelMSG: "",
      customerDetails: {
        firstName: "Mia",
        lastName: "Martin",
        address: {
          street: "101 Poplar St",
          city: "Hurghada",
          zipCode: "34567",
        },
        email: "miamartin@example.com",
        phone: "789-012-3456",
      },
    },
    {
      orderId: 115,
      items: [
        { id: 10, price: 129.99, quantity: 1 },
        { id: 25, price: 179.99, quantity: 2 },
      ],
      customerId: 4,
      totalPrice: 489.97,
      date: "2023-12-17",
      status: "Shipped",
      cancelMSG: "",
      customerDetails: {
        firstName: "Mia",
        lastName: "Martin",
        address: {
          street: "101 Poplar St",
          city: "Hurghada",
          zipCode: "34567",
        },
        email: "miamartin@example.com",
        phone: "789-012-3456",
      },
    },
    {
      orderId: 116,
      items: [
        { id: 1, price: 199.99, quantity: 2 },
        { id: 2, price: 149.99, quantity: 1 },
      ],
      customerId: 1,
      totalPrice: 549.97,
      date: "2023-12-03",
      status: "Processing",
      cancelMSG: "",
      customerDetails: {
        firstName: "John",
        lastName: "Doe",
        address: { street: "123 Main St", city: "Mansoura", zipCode: "12345" },
        email: "johndoe@example.com",
        phone: "123-456-7890",
      },
    },
  ],
  products: [
    {
      id: 1,
      name: "Ballon Bleu de Cartier",
      price: 5299.99,
      previousPrice: 5499.99,
      sales: 30,
      stock: 10,
      brandId: 1,
      date: "2023-11-01",
      images: [
        "/E-commerce/Brands/cartier/cart1.jpeg",
        "/E-commerce/Brands/cartier/cart2.jpg",
        "/E-commerce/Brands/cartier/cart3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 2,
      name: "Rolex Submariner",
      price: 8999.99,
      previousPrice: 9499.99,
      sales: 50,
      stock: 15,
      brandId: 2,
      date: "2023-10-15",
      images: [
        "/E-commerce/Brands/Rolex/rolex1.jpeg",
        "/E-commerce/Brands/Rolex/rolex2.jpeg",
        "/E-commerce/Brands/Rolex/rolex3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 3,
      name: "IWC Portugieser Chronograph",
      price: 7999.99,
      previousPrice: 8299.99,
      sales: 25,
      stock: 12,
      brandId: 3,
      date: "2023-11-20",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 4,
      name: "Panerai Luminor Marina",
      price: 7499.99,
      previousPrice: 7699.99,
      sales: 20,
      stock: 8,
      brandId: 4,
      date: "2023-12-01",
      images: [
        "/E-commerce/Brands/Panerai/pan1.jpeg",
        "/E-commerce/Brands/Panerai/pan2.jpeg",
        "/E-commerce/Brands/Panerai/pan3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 5,
      name: "Seiko Prospex Diver",
      price: 899.99,
      previousPrice: 999.99,
      sales: 80,
      stock: 25,
      brandId: 5,
      date: "2023-11-25",
      images: [
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek2.jpeg",
        "/E-commerce/Brands/Seiko/sek3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 6,
      name: "Tank Louis Cartier",
      price: 6199.99,
      previousPrice: 6399.99,
      sales: 15,
      stock: 5,
      brandId: 1,
      date: "2023-12-10",
      images: [
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek2.jpeg",
        "/E-commerce/Brands/Seiko/sek3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 7,
      name: "Rolex Daytona",
      price: 12999.99,
      previousPrice: 13499.99,
      sales: 40,
      stock: 10,
      brandId: 2,
      date: "2023-10-10",
      images: [
        "/E-commerce/Brands/Rolex/rolex1.jpeg",
        "/E-commerce/Brands/Rolex/rolex2.jpeg",
        "/E-commerce/Brands/Rolex/rolex3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 8,
      name: "IWC Pilot's Watch",
      price: 8999.99,
      previousPrice: 9199.99,
      sales: 22,
      stock: 7,
      brandId: 3,
      date: "2023-11-05",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 9,
      name: "Panerai Radiomir",
      price: 8299.99,
      previousPrice: 8499.99,
      sales: 18,
      stock: 10,
      brandId: 4,
      date: "2023-11-30",
      images: [
        "/E-commerce/Brands/Panerai/pan1.jpeg",
        "/E-commerce/Brands/Panerai/pan2.jpeg",
        "/E-commerce/Brands/Panerai/pan3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 10,
      name: "Seiko Presage Cocktail Time",
      price: 499.99,
      previousPrice: 549.99,
      sales: 95,
      stock: 30,
      brandId: 5,
      date: "2023-12-12",
      images: [
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek2.jpeg",
        "/E-commerce/Brands/Seiko/sek3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 11,
      name: "cartier cartier VG43",
      price: 122.99,
      previousPrice: 549.99,
      sales: 40,
      stock: 15,
      brandId: 1,
      date: "2023-12-13",
      images: [
        "/E-commerce/Brands/cartier/cart1.jpeg",
        "/E-commerce/Brands/cartier/cart2.jpg",
        "/E-commerce/Brands/cartier/cart3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 12,
      name: "cartier V^6767 YYY",
      price: 699.99,
      previousPrice: 249.99,
      sales: 33,
      stock: 12,
      brandId: 1,
      date: "2023-10-12",
      images: [
        "/E-commerce/Brands/cartier/cart1.jpeg",
        "/E-commerce/Brands/cartier/cart2.jpg",
        "/E-commerce/Brands/cartier/cart3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 13,
      name: "LO cartier LO",
      price: 777.99,
      previousPrice: 500.99,
      sales: 66,
      stock: 100,
      brandId: 1,
      date: "2023-3-10",
      images: [
        "/E-commerce/Brands/cartier/cart1.jpeg",
        "/E-commerce/Brands/cartier/cart2.jpg",
        "/E-commerce/Brands/cartier/cart3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 14,
      name: "cartier GGGH",
      price: 200.99,
      previousPrice: 100.99,
      sales: 55,
      stock: 200,
      brandId: 1,
      date: "2023-12-14",
      images: [
        "/E-commerce/Brands/cartier/cart1.jpeg",
        "/E-commerce/Brands/cartier/cart2.jpg",
        "/E-commerce/Brands/cartier/cart3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 15,
      name: "cartier V23",
      price: 567.99,
      previousPrice: 549.99,
      sales: 22,
      stock: 88,
      brandId: 1,
      date: "2023-03-12",
      images: [
        "/E-commerce/Brands/cartier/cart1.jpeg",
        "/E-commerce/Brands/cartier/cart2.jpg",
        "/E-commerce/Brands/cartier/cart3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 16,
      name: "cartier Presage cartier cartier",
      price: 344.99,
      previousPrice: 122.99,
      sales: 67,
      stock: 31,
      brandId: 1,
      date: "2023-09-24",
      images: [
        "/E-commerce/Brands/cartier/cart1.jpeg",
        "/E-commerce/Brands/cartier/cart2.jpg",
        "/E-commerce/Brands/cartier/cart3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 17,
      name: "cartier Presage cartier Time",
      price: 777.99,
      previousPrice: 549.99,
      sales: 70,
      stock: 13,
      brandId: 1,
      date: "2023-04-22",
      images: [
        "/E-commerce/Brands/cartier/cart1.jpeg",
        "/E-commerce/Brands/cartier/cart2.jpg",
        "/E-commerce/Brands/cartier/cart3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 18,
      name: "IWC USA",
      price: 232.99,
      previousPrice: 100.99,
      sales: 30,
      stock: 20,
      brandId: 3,
      date: "2023-08-12",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 19,
      name: "IWC Presage Cocktail Time",
      price: 499.99,
      previousPrice: 549.99,
      sales: 10,
      stock: 12,
      brandId: 3,
      date: "2023-07-30",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 20,
      name: "C IWC V5000",
      price: 499.99,
      previousPrice: 100.99,
      sales: 95,
      stock: 122,
      brandId: 3,
      date: "2023-07-22",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 21,
      name: "HHH IWC HHH",
      price: 12000.99,
      previousPrice: 549.99,
      sales: 35,
      stock: 100,
      brandId: 3,
      date: "2023-07-13",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 22,
      name: "LVG$% IWC Presage Cocktail ",
      price: 3333.99,
      previousPrice: 549.99,
      sales: 12,
      stock: 30,
      brandId: 3,
      date: "2023-07-12",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 23,
      name: "IWC V222",
      price: 499.99,
      previousPrice: 549.99,
      sales: 14,
      stock: 25,
      brandId: 3,
      date: "2023-06-24",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 24,
      name: "IWC V5 ",
      price: 477.99,
      previousPrice: 549.99,
      sales: 22,
      stock: 39,
      brandId: 3,
      date: "2023-06-22",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 25,
      name: "IWC Presage TCP Time",
      price: 222.99,
      previousPrice: 100.99,
      sales: 2,
      stock: 10,
      brandId: 3,
      date: "2023-06-19",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 26,
      name: "LLL IWC TLI",
      price: 17000.99,
      previousPrice: 20000.99,
      sales: 80,
      stock: 95,
      brandId: 3,
      date: "2023-06-14",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 27,
      name: "IWC PPP Presage  ",
      price: 128.99,
      previousPrice: 549.99,
      sales: 48,
      stock: 90,
      brandId: 3,
      date: "2023-06-13",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 28,
      name: "LL IWC LOW  Time",
      price: 50000.1,
      previousPrice: 44000.8,
      sales: 1,
      stock: 3,
      brandId: 3,
      date: "2023-06-2",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 29,
      name: "IWC CGB Cocktail ",
      price: 1000.99,
      previousPrice: 999.99,
      sales: 44,
      stock: 80,
      brandId: 3,
      date: "2023-05-12",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "/E-commerce/Brands/IWC/iwc3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 30,
      name: "C Panerai C ",
      price: 555.99,
      previousPrice: 549.99,
      sales: 70,
      stock: 95,
      brandId: 4,
      date: "2023-05-10",
      images: [
        "/E-commerce/Brands/Panerai/pan1.jpeg",
        "/E-commerce/Brands/Panerai/pan2.jpeg",
        "/E-commerce/Brands/Panerai/pan3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 31,
      name: "Panerai ML",
      price: 12000.99,
      previousPrice: 1000.99,
      sales: 4,
      stock: 7,
      brandId: 4,
      date: "2023-05-5",
      images: [
        "/E-commerce/Brands/Panerai/pan1.jpeg",
        "/E-commerce/Brands/Panerai/pan2.jpeg",
        "/E-commerce/Brands/Panerai/pan3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 32,
      name: "Panerai  GGG Time",
      price: 200.99,
      previousPrice: 288.99,
      sales: 40,
      stock: 50,
      brandId: 4,
      date: "2023-05-5",
      images: [
        "/E-commerce/Brands/Panerai/pan1.jpeg",
        "/E-commerce/Brands/Panerai/pan2.jpeg",
        "/E-commerce/Brands/Panerai/pan3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 33,
      name: " Presage Panerai Time",
      price: 1444.99,
      previousPrice: 549.99,
      sales: 40,
      stock: 102,
      brandId: 4,
      date: "2023-04-9",
      images: [
        "/E-commerce/Brands/Panerai/pan1.jpeg",
        "/E-commerce/Brands/Panerai/pan2.jpeg",
        "/E-commerce/Brands/Panerai/pan3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 34,
      name: "L Rolex Presage L",
      price: 1000.99,
      previousPrice: 100.99,
      sales: 4,
      stock: 10,
      brandId: 2,
      date: "2023-12-12",
      images: [
        "/E-commerce/Brands/Rolex/rolex1.jpeg",
        "/E-commerce/Brands/Rolex/rolex2.jpeg",
        "/E-commerce/Brands/Rolex/rolex3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 35,
      name: "GG Rolex GLG",
      price: 4444.99,
      previousPrice: 749.99,
      sales: 36,
      stock: 70,
      brandId: 2,
      date: "2023-04-5",
      images: [
        "/E-commerce/Brands/Rolex/rolex1.jpeg",
        "/E-commerce/Brands/Rolex/rolex2.jpeg",
        "/E-commerce/Brands/Rolex/rolex3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 36,
      name: "Rolex  Cocktail ",
      price: 4000.99,
      previousPrice: 549.99,
      sales: 10,
      stock: 12,
      brandId: 2,
      date: "2023-04-3",
      images: [
        "/E-commerce/Brands/Rolex/rolex1.jpeg",
        "/E-commerce/Brands/Rolex/rolex2.jpeg",
        "/E-commerce/Brands/Rolex/rolex3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 37,
      name: "Rolex LLL",
      price: 2950.99,
      previousPrice: 549.99,
      sales: 35,
      stock: 99,
      brandId: 2,
      date: "2023-04-2",
      images: [
        "/E-commerce/Brands/Rolex/rolex1.jpeg",
        "/E-commerce/Brands/Rolex/rolex2.jpeg",
        "/E-commerce/Brands/Rolex/rolex3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 38,
      name: "RRR Rolex",
      price: 499.99,
      previousPrice: 549.99,
      sales: 12,
      stock: 22,
      brandId: 2,
      date: "2023-04-4",
      images: [
        "/E-commerce/Brands/Rolex/rolex1.jpeg",
        "/E-commerce/Brands/Rolex/rolex2.jpeg",
        "/E-commerce/Brands/Rolex/rolex3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 39,
      name: "Rolex Presage Cocktail Time",
      price: 400.99,
      previousPrice: 200.99,
      sales: 60,
      stock: 100,
      brandId: 2,
      date: "2023-01-12",
      images: [
        "/E-commerce/Brands/Rolex/rolex1.jpeg",
        "/E-commerce/Brands/Rolex/rolex2.jpeg",
        "/E-commerce/Brands/Rolex/rolex3.jpeg",
      ],
      gender: "Women",
    },
    {
      id: 40,
      name: "Seiko  LLL",
      price: 4000,
      previousPrice: 549.99,
      sales: 30,
      stock: 60,
      brandId: 5,
      date: "2023-01-1",
      images: [
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek1.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 41,
      name: "TL Seiko ",
      price: 8000.99,
      previousPrice: 549.99,
      sales: 77,
      stock: 100,
      brandId: 5,
      date: "2023-07-12",
      images: [
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek1.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 42,
      name: "Seiko TRA CO Time",
      price: 700.99,
      previousPrice: 90.99,
      sales: 40,
      stock: 96,
      brandId: 5,
      date: "2023-05-5",
      images: [
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek1.jpeg",
      ],
      gender: "Men",
    },
    {
      id: 43,
      name: "Seiko Presage TTT",
      price: 333.99,
      previousPrice: 240.99,
      sales: 28,
      stock: 30,
      brandId: 5,
      date: "2023-11-10",
      images: [
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek1.jpeg",
        "/E-commerce/Brands/Seiko/sek1.jpeg",
      ],
      gender: "Women",
    },
  ],
  brands: [
    {
      id: 1,
      name: "Cartier",
      images: ["/E-commerce/Brands/cartier.jpeg", "elegant2.jpg"],
      description:
        "Cartier is a prestigious French luxury goods brand known for its high-end jewelry and timepieces, symbolizing elegance and sophistication.",
    },
    {
      id: 2,
      name: "Rolex",
      images: ["/E-commerce/Brands/rolex.jpeg", "sporty2.jpg"],
      description:
        "Rolex is a renowned Swiss watch manufacturer famous for its precision, durability, and iconic designs, often associated with success and luxury.",
    },
    {
      id: 3,
      name: "IWC",
      images: ["/E-commerce/Brands/iwc.jpeg", "trendy2.jpg"],
      description:
        "IWC (International Watch Company) is a Swiss luxury watchmaker celebrated for its engineering excellence and timeless designs.",
    },
    {
      id: 4,
      name: "Panerai",
      images: ["/E-commerce/Brands/panerai.jpeg", "luxury2.jpg"],
      description:
        "Panerai is an Italian luxury watch brand known for its bold designs, impeccable craftsmanship, and ties to the military and diving history.",
    },
    {
      id: 5,
      name: "Seiko",
      images: ["/E-commerce/Brands/sekio1.png", "fashion2.jpg"],
      description:
        "Seiko is a Japanese watchmaker celebrated for its innovation, reliable craftsmanship, and a broad range of timepieces that combine style and functionality.",
    },
  ],
};

// Save Data To LocalStorage
export function SaveDataToLocalStorage(database) {
  for (var key in database) {
    localStorage.setItem(key, JSON.stringify(database[key]));
  }
}

//SaveDataToLocalStorage(database)
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
    console.log("already exist");
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
    if (Element.id == id) user = Element;
  });
  return user;
}

export function Getallusers() {
  return JSON.parse(localStorage.getItem("users"));
}

// get user by email

export function GetUserByEmail(email) {
  let users = JSON.parse(localStorage.getItem("users"));
  let user = null;
  users.forEach((Element) => {
    if (Element.email == email) user = Element;
  });
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
  });
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
  let updatedProds = database.products.filter(
    (element) => element.id !== product.id
  );
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
  });
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
      let updatedBrands = database.brands.filter((element) => element != brand);
      database.brands = updatedBrands;
      SaveDataToLocalStorage(database);
    }
  });
}

// get all orders
export function GetAllOrders() {
  return JSON.parse(localStorage.getItem("orders"));
}

// get order by id 

export function GetOrderById(id) {
  let order;
  GetAllOrders().forEach((ord) => {
    if (ord.orderId == id) {
      order = ord;
      return;
    }
  });
  return order;
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
  return products.filter((product) => prodIds.includes(product.id));
}

// class for product
export class product {
  constructor(
    _id,
    _name,
    _price,
    _stock,
    _sale,
    _brandId,
    _Date,
    _images,
    _gender,
    _prev = 0
  ) {
    (this.id = _id),
      (this.name = _name),
      (this.price = _price),
      (this.sales = _sale),
      (this.stock = _stock),
      (this.brandId = _brandId),
      (this.date = _Date),
      (this.images = _images),
      (this.gender = _gender);
    this.previousPrice = _prev;
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
      return;
    }
  });
  return id;
}

// get all sellers 

export function getallsellers(){
  let users = Getallusers();
 return users.filter((user) => user.accountType === "Seller"); 
}

