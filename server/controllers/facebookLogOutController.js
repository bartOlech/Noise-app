const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserData = require('../models/usersDB');

module.exports.fbLogOut = (req, res, next) => {

    const userJWT = req.cookies.auth;
    const userJWTPayload = jwt.verify(userJWT, 'my-secret');

    mongoose.connect('mongodb://localhost:27017/noiseApp-users', { useNewUrlParser: true });
    mongoose.Promise = global.Promise;

    UserData.find({_id: userJWTPayload.id}).then(user => {
        UserData.deleteOne({ _id: user[0]._id }, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('user has benn removed')
        mongoose.connection.close();
    })
    })
    res.clearCookie('auth')
    res.status(200).json({ tokenStatus: "the user has been logged out" });
}