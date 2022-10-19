import bcrypt from 'bcryptjs';

const data= {
    users: [
        {
            name:'Rakshay',
            email:'rakshay@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin:true,
        },
        {
            name:'Rahul',
            email:'rahulgupta916205@gmail.com',
            password: bcrypt.hashSync('4321', 8),
            isAdmin:false,
        },
        
    ],
    products:[
        {
            
            name:'HRX Shoes',
            category:'Shoes',
            image:'/images/p1.jpg',
            price:2999, 
            countInStock: 10,
            brand:'HRX',
            rating:4.5,
            numReviews:117,
            description:'high quality product',
        },
        {
            
            name:'Wrogn Grey T-Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:799,
            countInStock: 18,
            brand:'Wrogn',
            rating:4.0,
            numReviews:89,
            description:'high quality product',
        },
        {
            
            name:'Raodster Jeans',
            category:'Jeans',
            image:'/images/p3.jpg',
            price:699,
            countInStock: 30,
            brand:'Roadster',
            rating:3.5,
            numReviews:97,
            description:'high quality product',
        },
        {
            
            name:'Apple SmartWatch',
            category:'SmartWatch',
            image:'/images/p4.jpg',
            price:29999,
            countInStock: 0,
            brand:'Apple',
            rating:5.0,
            numReviews:110,
            description:'high quality product',
        },
        {
            
            name:'Samsung Galaxy Note 20 Ultra',
            category:'Smartphones',
            image:'/images/p5.jpg',
            price:60999,
            countInStock: 21,
            brand:'Samsung',
            rating:4.5,
            numReviews:189,
            description:'high quality product',
        },
        {
            
            name:'HRX Slippers',
            category:'Slippers',
            image:'/images/p6.jpg',
            price:499,
            countInStock: 31,
            brand:'HRX',
            rating:3.5,
            numReviews:87,
            description:'high quality product',
        }
    ]
}
export default data; 