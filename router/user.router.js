const userRouter = require('express').Router();


const userController = require('../controllers/user.controller');
const userMdlwr = require('../middleware/user.middleware');

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userMdlwr.isNewUserValid, userController.createUser);
userRouter.get('/:userId', userController.deleteUser);
userRouter.get('/:userId', userController.updateUser);
userRouter.get('/:userId', userController.getById);

module.exports = userRouter;
