const {Schema, model} = require('mongoose');


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    surname: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        require: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type:String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    dataBirth: {
        type: Date,
        required: true
    },

    age: {
        type: Number,
        default: 20,
    },

    password: {
        type: String,
        required: true,

    },

    role: {
        type: String,
        default: 'USER'
    },
    pass_number:{
        type: String,
        required: true,
        length: 9
    },
    auth_that_issued: {
        type: String,
        required: true,
        length: 4
    },
    date_of_issue: {
        type: Date,
        required: true
    }

}, { timestamps: true });


module.exports = model('USER', UserSchema);

