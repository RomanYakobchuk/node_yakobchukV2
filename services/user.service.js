const sendSMSFunction = require('./message.service');

function createUser(name, age) {
    sendSMSFunction.sendSms('3434', 'welcome');

    return {
        name,
        age,
        sayHello: () => {
            console.log(`Hello, my name is ${name}`);
        }
    }
}


module.exports = {
    createUser
}