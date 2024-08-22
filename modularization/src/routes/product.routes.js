const { Router } = require('express');
const productController = require("../controllers/product.controller")

const router = Router()

app.post('/', productController.createProduct);
app.get('/', productController.getAllProducts);
app.delete('/:id', productController.deleteProductById);

module.exports = {
    productRouter: router
}