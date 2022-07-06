const Joi = require('joi');

const { emailValidator, surnameValidator, passwordValidator, ageValidator, nameValidator, phoneValidator, roleValidator,
    passValidator, dateIssueValidator, lastNameValidator, organValidator, dateValidator, genderValidator
} = require("./common.validator");

module.exports = {
    newUserValidator: Joi.object({
        last_name: lastNameValidator.required(),
        name: nameValidator.required(),
        surname: surnameValidator.required(),
        age: ageValidator.required(),
        email: emailValidator.required(),
        password: passwordValidator.required(),
        dataBirth: dateValidator.required(),
        gender: genderValidator.required(),
        phone: phoneValidator,
        role: roleValidator,
        pass_number: passValidator.required(),
        date_of_issue:dateIssueValidator.required(),
        auth_that_issued: organValidator.required()

    }),

    updateUserValidator: Joi.object({
        last_name: lastNameValidator,
        name: nameValidator,
        surname: surnameValidator,
        age: ageValidator,
        phone: phoneValidator,
        pass_number: passValidator,
        date_of_issue:dateIssueValidator,
        auth_that_issued: organValidator
    }),
};