const database1 = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      password: "securepassword123",
      cart: [],
      accountType: "Customer",
      products: [],
      orderIds: [101, 102, 103],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      password: "anothersecurepassword456",
      cart: [],
      accountType: "Seller",
      products: [1, 2],
      orderIds: [104, 105],
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      password: "yetanothersecurepassword789",
      cart: [],
      accountType: "Admin",
      products: [],
      orderIds: [],
    },
    {
      id: 4,
      name: "Robert Brown",
      email: "robertb@example.com",
      password: "password12345",
      cart: [],
      accountType: "Customer",
      products: [],
      orderIds: [106, 107],
    },
    {
      id: 5,
      name: "Emma Davis",
      email: "emmad@example.com",
      password: "password67890",
      cart: [],
      accountType: "Customer",
      products: [],
      orderIds: [108, 109],
    },
    {
      id: 6,
      name: "Liam Wilson",
      email: "liamwilson@example.com",
      password: "liampassword987",
      cart: [],
      accountType: "Seller",
      products: [3, 4],
      orderIds: [110, 111],
    },
    {
      id: 7,
      name: "Sophia Martinez",
      email: "sophiam@example.com",
      password: "sophiapassword321",
      cart: [],
      accountType: "Seller",
      products: [5, 6],
      orderIds: [112, 113],
    },
    {
      id: 8,
      name: "Ethan Lee",
      email: "ethanlee@example.com",
      password: "ethanpassword654",
      cart: [],
      accountType: "Customer",
      products: [],
      orderIds: [114, 115],
    },
    {
      id: 9,
      name: "Mia Gonzalez",
      email: "miagonzalez@example.com",
      password: "miapassword789",
      cart: [],
      accountType: "Seller",
      products: [7, 8],
      orderIds: [116, 117],
    },
    {
      id: 10,
      name: "William Taylor",
      email: "williamtaylor@example.com",
      password: "williamsecurepassword123",
      cart: [],
      accountType: "Customer",
      products: [],
      orderIds: [118, 119],
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
      sales: 30,
      stock: 10,
      brandId: 1,
      date: "2023-11-01",
      images: [
        "/E-commerce/Brands/cartier/cart2.jpg",
        "https://www.cartier.com/ballon-bleu2.jpg",
      ],
      gender: "Men",
    },
    {
      id: 2,
      name: "Rolex Submariner",
      price: 8999.99,
      sales: 50,
      stock: 15,
      brandId: 2,
      date: "2023-10-15",
      images: [
        "/E-commerce/Brands/Rolex/rolex3.jpeg",
        "https://www.rolex.com/submariner2.jpg",
      ],
      gender: "Men",
    },
    {
      id: 3,
      name: "IWC Portugieser Chronograph",
      price: 7999.99,
      sales: 25,
      stock: 12,
      brandId: 3,
      date: "2023-11-20",
      images: [
        "/E-commerce/Brands/IWC/iwc2.jpeg",
        "https://www.iwc.com/portugieser2.jpg",
      ],
      gender: "Men",
    },
    {
      id: 4,
      name: "Panerai Luminor Marina",
      price: 7499.99,
      sales: 20,
      stock: 8,
      brandId: 4,
      date: "2023-12-01",
      images: [
        "/E-commerce/Brands/Panerai/pan2.jpeg",
        "https://www.panerai.com/luminor2.jpg",
      ],
      gender: "Men",
    },
    {
      id: 5,
      name: "Seiko Prospex Diver",
      price: 899.99,
      sales: 80,
      stock: 25,
      brandId: 5,
      date: "2023-11-25",
      images: [
        "/E-commerce/Brands/Seiko/sek2.jpeg",
        "https://www.seiko.com/prospex2.jpg",
      ],
      gender: "Men",
    },
    {
      id: 6,
      name: "Tank Louis Cartier",
      price: 6199.99,
      sales: 15,
      stock: 5,
      brandId: 1,
      date: "2023-12-10",
      images: [
        "/E-commerce/Brands/cartier/cart4.jpeg",
        "https://www.cartier.com/tank2.jpg",
      ],
      gender: "Women",
    },
    {
      id: 7,
      name: "Rolex Daytona",
      price: 12999.99,
      sales: 40,
      stock: 10,
      brandId: 2,
      date: "2023-10-10",
      images: [
        "/E-commerce/Brands/Rolex/rolex1.jpeg",
        "https://www.rolex.com/daytona2.jpg",
      ],
      gender: "Men",
    },
    {
      id: 8,
      name: "IWC Pilot's Watch",
      price: 8999.99,
      sales: 22,
      stock: 7,
      brandId: 3,
      date: "2023-11-05",
      images: [
        "/E-commerce/Brands/IWC/iwc1.jpeg",
        "https://www.iwc.com/pilot2.jpg",
      ],
      gender: "Men",
    },
    {
      id: 9,
      name: "Panerai Radiomir",
      price: 8299.99,
      sales: 18,
      stock: 10,
      brandId: 4,
      date: "2023-11-30",
      images: [
        "/E-commerce/Brands/Panerai/pan1.jpeg",
        "https://www.panerai.com/radiomir2.jpg",
      ],
      gender: "Men",
    },
    {
      id: 10,
      name: "Seiko Presage Cocktail Time",
      price: 499.99,
      sales: 95,
      stock: 30,
      brandId: 5,
      date: "2023-12-12",
      images: [
        "/E-commerce/Brands/Seiko/sek2.jpeg",
        "https://www.seiko.com/presage2.jpg",
      ],
      gender: "Women",
    },
  ],
  brands: [
    {
      id: 1,
      name: "Cartier",
      images: ["/E-commerce/Brands/cartier.jpeg", "elegant2.jpg"],
    },
    {
      id: 2,
      name: "Rolex",
      images: ["/E-commerce/Brands/rolex.jpeg", "sporty2.jpg"],
    },
    {
      id: 3,
      name: "IWC",
      images: ["/E-commerce/Brands/iwc.jpeg", "trendy2.jpg"],
    },
    {
      id: 4,
      name: "Panerai",
      images: ["/E-commerce/Brands/panerai.jpeg", "luxury2.jpg"],
    },
    {
      id: 5,
      name: "Seiko",
      images: ["/E-commerce/Brands/sekio1.png", "fashion2.jpg"],
    },
  ],
};

