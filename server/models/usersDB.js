const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: String
    },
    favourite: {
        type: Array
    },
    data: {
        type: Date,
        default: Date.now
    },
    access_token: {
        type: String
    },
    name: {
        type: String
    },
    fullName: {
        type: String
    },
    facebookProvider: {
        type: {
            id: String,
            token: String
        },
        //select: false
    },
    googleProvider: {
        type: {
            id: String,
            token: String
        },
        //select: false
    },
    googleTokenId: String,
})



const UserData = mongoose.model('users', dataSchema);
module.exports = UserData