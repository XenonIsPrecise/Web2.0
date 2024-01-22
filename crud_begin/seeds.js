const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/khetBari')
.then(()=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.log("Not connected to database")
    console.log(err)
});

const sampleProducts =[
    {
        name:'apple',
        price:12,
        category:'fruit'
    }
    ,
    {
        name:'banana',
        price:10,
        category:'fruit'
    },
    {
        name:'potato',
        price:20,
        category:'vegetable'
    },
    {
        name:'milk',
        price:25,
        category:'dairy'
    }
]

Product.insertMany(sampleProducts)
.then(res=>{
    console.log(res)
})
.catch(e=>{
    console.log(e)
})

// const p = new Product({
//     name:'Grapes',
//     price:100,
//     category:'fruit'
// })

// p.save().then(p=>{
//     console.log(p)
// })
// .catch(e=>{
//     console.log(e)
// })