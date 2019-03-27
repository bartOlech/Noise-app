const UserData = require('../models/usersDB');
const jwt = require('jsonwebtoken');

module.exports.removeUser = (req, res, next) => {

    const social = req.cookies.social;
    console.log(`email: ${req.body.email}`)

    if(social === undefined){
        UserData.find({ type: 'usersRegister'}).then(user => {
            UserData.deleteOne({email: req.body.email.toUpperCase()}, (err) => {
                if (err) {
                    console.log(err)
                }
                console.log('user has benn removed')
            })
        })
        res.status(200).json({ isAuth: false });
    }else if(social === 'facebook' || social === 'google'){
        const userJWT = req.cookies.auth;
        const userJWTPayload = jwt.verify(userJWT, 'my-secret');

        UserData.find({ _id: userJWTPayload.id }).then(user => {
            UserData.deleteOne({ _id: user[0]._id }, (err) => {
                if (err) {
                    console.log(err)
                }
                console.log('user has benn removed')
            })
        })
        res.clearCookie('auth')
        res.clearCookie('social')
        res.status(200).json({ isAuth: false });
    }else{
        console.log('something was wrong')
    }
    

}