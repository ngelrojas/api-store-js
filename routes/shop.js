const express = require('express');
const path = require('path');
const router = express.Router();
const productsController = require('../controlles/products');

router.get('/', productsController.getProducts);

module.exports = router;

//    module.exports = path.dirname(require.main.filename);