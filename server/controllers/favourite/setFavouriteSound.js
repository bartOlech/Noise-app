const mongoose = require('mongoose');
const UserData = require('../../models/usersDB');
const jwt = require('jsonwebtoken');

module.exports.setFavourite = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    const { social, registerUser } = req.cookies;
    const { soundName, soundNamePl } = req.body;

    mongoose.connect('mongodb://localhost:27017/noiseApp-users', {
        useNewUrlParser: true
    })

    if (social === 'facebook' || social === 'google') {

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
                console.log('It is already exist')
                console.log(filterArr)
                res.sendStatus(204)
            } else {
                UserData.updateOne(document, {
                    $push: {
                        favourite: soundName,
                        favouritePl: soundNamePl
                    }
                }).then(data => {
                    console.log('The Sound has been added')
                })
                res.sendStatus(200)
            }
        })
    } else {
        const document = {
            email: registerUser
        }

        UserData.findOne({
            email: registerUser
        }).then(data => {
            const filterArr = data.favourite.filter(el => el === soundName)
            if (filterArr.length > 0) {
                console.log('It is already exist')
                console.log(filterArr)
                res.sendStatus(204)
            } else {
                UserData.findOneAndUpdate(document, {
                    $push: {
                        favourite: soundName,
                        favouritePl: soundNamePl
                    }
                }).then(data => {
                    console.log('The Sound has been added')
                })
                res.sendStatus(200)
            }
        })
    }
}