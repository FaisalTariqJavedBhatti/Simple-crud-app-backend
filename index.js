const express = require('express')
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require('./routes/product.route.js');
const app = express()

// middle
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routs
app.use('/api/products', productRoute);

app.get('/', function (req, res) {
  res.send('Hello from node api sever update');
});


mongoose.connect('mongodb+srv://[yourid].mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    })
  })
  .catch(() => {
    console.log('connection failed');
  });