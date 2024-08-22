const { products } = require("../repositories/product.repository")

function createProduct (req, res) {
    const { id, name, price } = req.body;
    if (products.find(product => product.id === id)) {
        return res.status(400).json({ message: 'Product already exists' });
    }
    products.push({ id, name, price });
    res.status(201).json({ message: 'Product created', product: { id, name, price } });
};

function getAllProducts (req, res) {
    res.json(products);
};

function deleteProductById (req, res) {
    const { id } = req.params;
    products = products.filter(product => product.id !== id);
    res.json({ message: 'Product deleted' });
};

module.exports = {
    createProduct,
    getAllProducts,
    deleteProductById
}