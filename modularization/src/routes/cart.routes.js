const { Router } = require('express');
const cartController = require("../controllers/cart.controller")

const router = Router()

app.post('/:userId', cartController.addProductToCart);
app.get('/:userId',cartController.getUserCart);
app.delete('/:userId/:productId', cartController.deleteProductInCart);

module.exports = {
    cartRouter: router
}