const jwt = require('jsonwebtoken');

const { config} = require("../constants");
const { CustomError } = require('../error');
const { tokenTypeEnum } = require('../enums');

function generateAuthTokens(payload = {}) {
    const access_token = jwt.sign(payload, config.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refresh_token = jwt.sign(payload, config.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });

    return {
        access_token,
        refresh_token
    }
}

function checkToken(token = '', tokenType = tokenTypeEnum.ACCESS) {
    try {
        let secret;

        if(tokenType === tokenTypeEnum.ACCESS) secret = config.ACCESS_TOKEN_SECRET;
        if(tokenType === tokenTypeEnum.REFRESH) secret = config.REFRESH_TOKEN_SECRET;

        return jwt.verify(token, secret);
    } catch (e) {
        throw new CustomError(`Token not valid`, 401);
    }
}

module.exports = {
    checkToken,
    generateAuthTokens
}