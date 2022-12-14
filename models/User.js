const { Schema, model } = require('mongoose');
const {stringify} = require('querystring')

const userSchema = new Schema({
    username {
        type: String,
        unique: true,
        required: true,
        trimmed: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
})