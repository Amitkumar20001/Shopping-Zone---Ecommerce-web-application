import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Amit',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Acer',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
    
      name:'Microsoft Surafce Laptop1',
      category: 'Laptops',
      image: '/images/p1.jpg',
      price: 80000,
      countInStock: 10,
      brand: 'Microsoft',
      rating: 4.5,
      numReviews: 280,
      description: 'High quality product',
  },
  {
     
     name:'Microsoft Surafce Laptop2',
     category: 'Laptops',
     image: '/images/p2.jpg',
     price: 70000,
     countInStock: 10,
     brand: 'Microsoft',
     rating: 3.5,
     numReviews: 190,
     description: 'High quality product',
 },
 {
    
     name:'Lenovo 3EIN slim3',
     category: 'Laptops',
     image: '/images/p3.jpg',
     price: 65000,
     countInStock: 0,
     brand: 'Microsoft',
     rating: 4,
     numReviews: 100,
     description: 'High quality product',
 },
 {
   
     name:'Microsoft Surafce Laptop4',
     category: 'Laptops',
     image: '/images/p4.jpg',
     price: 80000,
     countInStock: 10,
     brand: 'Microsoft',
     rating: 5,
     numReviews: 310,
     description: 'High quality product',
 },
 {
    
     name:'Microsoft Surafce Laptop5',
     category: 'Laptops',
     image: '/images/p3.jpg',
     price: 78000,
     countInStock: 10,
     brand: 'Microsoft',
     rating: 4.5,
     numReviews: 10,
     description: 'High quality product',
 },
 {
   
     name:'Microsoft Surafce Laptop6',
     category: 'Laptops',
     image: '/images/p2.jpg',
     price: 80000,
     countInStock: 10,
     brand: 'Microsoft',
     rating: 5,
     numReviews: 340,
     description: 'High quality product',
 },
 {
   
        name:'Sony Smart TV',
        category: 'TVs',
        image: '/images/t3.jpg',
        price: 18000,
        countInStock: 10,
        brand: 'Sony',
        rating: 5,
        numReviews: 340,
        description: 'High quality product',
},
  ],
};
export default data;