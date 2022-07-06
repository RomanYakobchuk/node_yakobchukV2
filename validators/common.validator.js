const Joi = require("joi");

const { constant } = require("../constants");

module.exports = {
    lastNameValidator: Joi.string().min(2).max(100),
    nameValidator: Joi.string().min(2).max(100),
    surnameValidator: Joi.string().min(2).max(100),
    genderValidator: Joi.string(),
    ageValidator: Joi.number().integer().min(1).max(130),
    roleValidator: Joi.string(),
    emailValidator: Joi.string().regex(constant.EMAIL_REGEX).lowercase().trim(),
    passwordValidator: Joi.string().regex(constant.PASSWORD_REGEX).required().trim(),
    phoneValidator: Joi.string().regex(constant.PHONE_REGEX).required().trim(),
    organValidator: Joi.string().length(4),
    dateIssueValidator: Joi.date(),
    dateValidator: Joi.date(),
    passValidator: Joi.number()
};