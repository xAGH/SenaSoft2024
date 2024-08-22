const { Router } = require('express');
const userController = require("../controllers/user.controller")

const router = Router()

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.delete('/:id', userController.deleteUserById);

module.exports = {
    userRouter: router
}