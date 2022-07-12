const Joi = require('joi');

const { emailValidator, passwordValidator, ageValidator, nameValidator, phoneValidator, usernameValidator} = require("./common.validator");

module.exports = {
    newUserValidator: Joi.object({
        name: nameValidator.required(),
        username: usernameValidator.required(),
        age: ageValidator.required(),
        email: emailValidator.required(),
        password: passwordValidator.required(),
        phone: phoneValidator.required(),
    }),

    updateUserValidator: Joi.object({
        name: nameValidator,
        username: usernameValidator,
        age: ageValidator,
    }),
};