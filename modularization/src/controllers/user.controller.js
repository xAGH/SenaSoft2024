const { carts } = require("../repositories/cart.repository")
const { users } = require("../repositories/user.repository")


function createUser (req, res)  {
    const { id, name } = req.body;
    if (users.find(user => user.id === id)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    users.push({ id, name });
    carts[id] = [];
    res.status(201).json({ message: 'User created', user: { id, name } });
}

function getAllUsers(req, res) {
    res.json(users);
}

function deleteUserById(req, res) {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    delete carts[id];
    res.json({ message: 'User deleted' });
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUserById
}