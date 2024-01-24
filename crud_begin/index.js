const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const path = require('path');
const methodOverride = require('method-override')


const Product = require('./models/product');
const App = require('testem/lib/app');


mongoose.connect('mongodb://localhost:27017/khetBari')
.then(()=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.log("Not connected to database")
    console.log(err)
});

app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/products',async(req,res)=>{
    const products = await Product.find({})
    res.render('products/index', {products})
})

app.get('/products/new',(req,res)=>{
    res.render('products/new')
})

app.post('/products', async(req,res)=>{
    const newProduct = Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show', {product})
})

app.get('/products/:id/edit', async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product})
})

app.put('/products/:id', async (req, res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id , req.body, {runValidators : true}, {new:true})
    res.redirect(`/products/${product._id}`)
})


app.listen(3000,()=>{
    console.log("Connected to port 3000");
})

app.get('/home',(req,res)=>{
    res.send("This is the homepage")
})