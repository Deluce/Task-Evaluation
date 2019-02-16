const express = require('express');
      router = express.Router();
	  mongojs = require('mongojs');
	  schema = require('../models/product.model');
	  mongoose = require('mongoose');
	  productSchema = new schema();

//connect to mongoDB
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://vivi:admin@productinventory-yj1vz.mongodb.net/test?retryWrites=true'
MongoClient.connect(url, function(err, client) {
   if (err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("ProductList").collection("Products");
   client.close();
});

//find all products
// This block of code currently does not work,
// because I was not sure how to define db while using the new
// remote mongoDB Atlas database.
const productList = mongoose.model('Product', productSchema);
productList.find(function(err, products){
	if(err){
		res.send(err);
	}
	res.json(products);
});

module.exports = router;