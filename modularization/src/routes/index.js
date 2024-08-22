const { userRouter } = require('./routes/user.routes');
const { productRouter } = require('./routes/product.routes');
const { cartRouter } = require('./routes/cart.routes');

function addRoutes(app) {
    app.use('/users', userRouter);
    app.use('/products', productRouter);
    app.use('/cart', cartRouter);
}

module.exports = {
    addRoutes
}