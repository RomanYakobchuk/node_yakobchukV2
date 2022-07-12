const Joi = require('joi');

const { emailValidator, ageValidator, nameValidator, usernameValidator} = require("./common.validator");

module.exports = {
    findAll: Joi.object({
        name: nameValidator,
        username: usernameValidator,
        age: ageValidator,
        email: emailValidator,
    }),
};