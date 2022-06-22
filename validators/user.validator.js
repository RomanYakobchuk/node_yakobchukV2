const Joi = require('joi');
const { PASSWORD_REGEX} = require('../constants/constant');
const {emailValidator} = require("./share");

const userSubScheme = {
    name: Joi.string().alphanum().min(2).max(100).required(),
    surname: Joi.string().alphanum().min(2).max(100).required(),
    age: Joi.number().integer().min(1).max(130)
}
const testArraySubSchema = Joi.object({
    car: Joi.boolean()
})

module.exports = {
    newUserValidator: Joi.object({
        email: emailValidator.required(),
        ...userSubScheme,
        password: Joi.string().regex(PASSWORD_REGEX).required()
    }),

    updateUserValidator: Joi.object(userSubScheme),


    testValidator: Joi.object({
        isAdult: Joi.boolean(),
        array: Joi.array().items(testArraySubSchema).when('isAdult', {is: true, then: Joi.required()})
    })
}
