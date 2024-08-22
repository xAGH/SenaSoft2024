carts = {}

function getCartByUserId (userId) {
    return carts[userId]
}

function createUserCart (userId, userCart) {
    if (typeof userCart == "undefined") {
        carts[userId] = []
        return getCartByUserId(userId)
    }
    carts[userId] = userCart

}

function addProduct (userId, product, productQuantity) {
    const userCart = getCartByUserId(userId)
    const cartItem = userCart.find(product => product.product.id === product.id)
    if (cartItem) {
        cartItem.quantity += productQuantity;
    } else {
        userCart.push({ product, productQuantity });
    }

}

function deleteProduct (userId, productId) {
    let userCart = getCartByUserId(userId)
    userCart = userCart.filter(item => item.product.id !== productId);
    createUserCart(userId, userCart)
}

module.exports = {
    getCartByUserId,
    addProduct,
    deleteProduct
}