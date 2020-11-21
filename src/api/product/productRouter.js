const { Router } = require('express');
const productController = require('./productController.js');

const route = Router()

route.get('/getProduct',
    productController.getProduct

)

module.exports = route;