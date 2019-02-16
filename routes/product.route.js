const express = require('express');
	  router = express.Router();

const product_controller = require('../controllers/product.controller');

//a simple test
router.get('/test', product_controller.test);

module.exports = router;