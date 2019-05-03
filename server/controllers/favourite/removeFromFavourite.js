const mongoose = require('mongoose');
const UserData = require('../../models/usersDB');
const jwt = require('jsonwebtoken');

module.exports.removeFavourite = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    const { social, registerUser } = req.cookies;

    // retrieve a sound name from client
    const { soundName, soundNamePl } = req.body;

    // add a sound to the array
    const soundNameInArr = [req.body.soundName]
    const soundNamePlInArr = [req.body.soundNamePl]

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true
    })

    if (social === 'facebook' || social === 'google') {
        // Social user
        const userJWT = req.cookies.auth;
        const userJWTPayload = jwt.verify(userJWT, 'my-secret');

        const document = {
            _id: userJWTPayload.id
        }

        UserData.findOne({
            _id: userJWTPayload.id
        }).then(data => {
            const filterArr = data.favourite.filter(el => el === soundName)
            if (filterArr.length > 0) {
                UserData.updateOne( document, { $pullAll: {
                    favourite: soundNameInArr,
                    favouritePl: soundNamePlInArr 
                } } )
                .then(console.log('The sound has been removed'))
                .catch(err => {
                    console.log(err)
                })
                res.sendStatus(200)
            } else {
                console.log('The sound does not exist in the database')
                res.sendStatus(204)
            }
        })
    } else {
        // Register user
        const document = {
            email: registerUser
        }

        UserData.findOne({
            email: registerUser
        }).then(data => {
            const filterArr = data.favourite.filter(el => el === soundName)
            if (filterArr.length > 0) {
                UserData.updateOne( document, { $pullAll: {
                    favourite: soundNameInArr,
                    favouritePl: soundNamePlInArr
                } } )
                .then(console.log('The sound has been removed'))
                .catch(err => {
                    console.log(err)
                })
                res.sendStatus(200)
            } else {
                console.log('The sound does not exist in the database')
                res.sendStatus(204)
            }
        })
    }
}