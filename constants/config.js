module.exports = {
    PORT: process.env.PORT || 5500,
    MONGO_URL: process.env.MONGO_URL || `mongodb+srv://yakobchukrv:hjvfydfk28@cluster0.f87ap.mongodb.net/?retryWrites=true&w=majority`,

    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || `asd`,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'qwe',

    NO_REPLY_EMAIL: process.env.NO_REPLY_EMAIL || 'roma.yakobchu28@gmail.com',
    NO_REPLY_EMAIL_PASSWORD: process.env.NO_REPLY_EMAIL_PASSWORD || 'wncykxwejxtujdre',

    FRONTEND_URL: process.env.FRONTEND_URL || 'https://google.com',

    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || 'AC7626c91c35cfea00a7cc425d4b1ea2e3',
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || 'd6024a1ab8e7223e3ea46690e4102ae6',
    TWILIO_NUMBER: process.env.TWILIO_NUMBER || '+19806552888',
};