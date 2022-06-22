const CustomError = require('../error/CustomError');
const userValidator = require('../validators/user.validator');

module.exports = {


    isNewUserValid: (req, res, next) => {
        try {
            const {error, value} = userValidator.newUserValidator.validate(req.body);

            if(error) {
                throw new CustomError(error.details[0].message);
            }

            console.log('________________')
            console.log(value)
            console.log('________________')

            req.body = value;

            next()
        }
        catch (e) {
            next(e)
        }
    }
}
