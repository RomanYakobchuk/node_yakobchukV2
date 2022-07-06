const Joi = require('joi');

const { emailValidator, surnameValidator, ageValidator, nameValidator, roleValidator, passValidator, dateIssueValidator,
    organValidator, lastNameValidator, phoneValidator, dateValidator, genderValidator
} = require("./common.validator");

module.exports = {
    findAll: Joi.object({
        last_name: lastNameValidator,
        name: nameValidator,
        surname: surnameValidator,
        age: ageValidator,
        email: emailValidator,
        // dataBirth: dateValidator,
        gender: genderValidator,
        // phone: phoneValidator,
        role: roleValidator,
        pass_number: passValidator,
        date_of_issue: dateIssueValidator,
        auth_that_issued: organValidator,


    }),
};