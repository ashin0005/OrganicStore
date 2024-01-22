const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');


const app = express();
const port = 4000;

//MongoDB connection URL
mongoose.connect('mongodb://localhost:27017/organicStore')
.then(() => {
    console.log('successfully connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:',err);
    process.exit(1);//Exit the application if unable to connect to MongoDB
});





app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('user/login');
});
app.get('/home', (req, res) => {
    res.render('user/index');
});
app.get('/about', (req, res) => {
    res.render('user/about');
});
app.get('/contact', (req, res) => {
    res.render('user/contact');
});
app.get('/Juice', (req, res) => {
    res.render('user/Juice');
});
app.get('/Groceries', (req, res) => {
    res.render('user/Groceries');
});
app.get('/Everything', (req, res) => {
    res.render('user/Everything');
});
app.get('/Everything2', (req, res) => {
    res.render('user/Everything2');
});
app.get('/Groceries2', (req, res) => {
    res.render('user/Groceries2');
});
app.get('/cart', (req, res) => {
    res.render('user/cart');
});
app.get('/productPage', (req, res) => {
    res.render('user/productPage');
});
app.get('/registration', (req, res) => {
    res.render('user/registration');
});
// app.get('/login', (req, res) => {
//     res.render('user/login');
// });

// admin--------------------------------------------------------

app.get('/admin-dashboard', (req, res) => {
    res.render('admin/admin-dashboard');
});
app.get('/admin-category', (req, res) => {
    res.render('admin/admin-category');
});
app.get('/admin-product', (req, res) => {
    res.render('admin/admin-product');
});
app.get('/admin-order', (req, res) => {
    res.render('admin/admin-order');
});
app.get('/admin-customer', (req, res) => {
    res.render('admin/admin-customer');
});
app.get('/admin-marketing', (req, res) => {
    res.render('admin/admin-marketing');
});
app.get('/admin-notify', (req, res) => {
    res.render('admin/admin-notify');
});
app.get('/admin-register', (req, res) => {
    res.render('admin/admin-register');
});
app.get('/admin-login', (req, res) => {
    res.render('admin/admin-login');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});