const User = require('../databases/User');
const CustomError = require('../error/CustomError');

async function updateUser(req, res, next){
    try{
        res.status(201).json('Users was created')
    }
    catch (e) {
        next(e)
    }
}

async function getAllUsers(req, res, next){
    try{
        const users = await User.find();

        res.json(users)
    }
    catch (e) {
        next(e)
    }
}

async function getById(req, res, next){
    try{
        const {userId = ''} = req.params;

        if(userId.length !== 24) {
            throw new CustomError("Mongo Id is not valid", 403)
        }

        const user = await User.findOne({_id: userId});

        if(!user) {
            throw new CustomError(`Use with ID ${userId} is not found`, 404)
        }


        res.json(user)
    }
    catch (e) {
        next(e)
    }
}

async function createUser(req, res, next){
    try{
        const user = await User.create(req.body);

        res.status(201).json(user)
    }
    catch (e) {
        next(e)
    }
}

async function deleteUser(req, res, next){
    try{
        const {userId = ''} = req.params;

        await User.deleteOne({_id: userId})

        res.status(201).json('Users was deleted')
    }
    catch (e) {
        next(e)
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getById
}
