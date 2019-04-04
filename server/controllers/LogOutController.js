const jwt = require('jsonwebtoken');
const UserData = require('../models/usersDB');

module.exports.LogOut = (req, res, next) => {

    const social = req.cookies.social;

    if (social) {
        const userJWT = req.cookies.auth;
        const userJWTPayload = jwt.verify(userJWT, 'my-secret');

        UserData.find({ _id: userJWTPayload.id }).then(user => {
            // UserData.deleteOne({ _id: user[0]._id }, (err) => {
            //     if (err) {
            //         console.log(err)
            //     }
                console.log('user has benn removed || no')
            // })
        })
        res.clearCookie('auth')
        res.clearCookie('registerUser')
        res.clearCookie('social')
        res.status(200).json({ tokenStatus: "the user has been logged out" });
    } else {
        res.status(200).json({ tokenStatus: "the user has been logged out" });
    }

}