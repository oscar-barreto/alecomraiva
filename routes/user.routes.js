const { Router } = require('express')
const {userController} = require("../src/controllers/user.controller")

const userRouter = Router();

userRouter.use(
    '/users',
    userRouter.get('/all', userController.getUsers),
    userRouter.post('/', userController.createUser),
    userRouter.delete('/:id', userController.deleteUser)
);

module.exports= {
    userRouter,
};