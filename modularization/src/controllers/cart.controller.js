const { getCartByUserId, addProduct, deleteProduct } = require("../repositories/cart.repository")

function addProductToCart (req, res) {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    const userCart = getCartByUserId(userId);
    if (!userCart) {
        return res.status(404).json({ message: 'User not found' });
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    addProduct(userId, product, quantity)

    res.json({ message: 'Product added to cart', cart: userCart });
};

function getUserCart (req, res) {
    const { userId } = req.params;
    const userCart = getCartByUserId(userId)
    if (!userCart) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(userCart);
};

function deleteProductInCart (req, res) {
    const { userId, productId } = req.params;
    let userCart = getCartByUserId(userId)
    if (!userCart) {
        return res.status(404).json({ message: 'User not found' });
    }
    deleteProduct(userId, productId)
    res.json({ message: 'Product removed from cart', cart: userCart });
};

module.exports = {
    addProductToCart,
    getUserCart,
    deleteProductInCart,
    carts
}