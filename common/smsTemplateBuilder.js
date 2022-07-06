const { smsActionTypeEnum } = require('../enums');

module.exports = {
    [smsActionTypeEnum.WELCOME]: (last_name, name, surname) => {
        return `Hi ${last_name} ${name} ${surname}, welcome on our platform`;
    },
};