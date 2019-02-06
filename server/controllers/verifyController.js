const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserData = require('../models/usersDB');
const request = require('request');
const jwtDecode = require('jwt-decode');


module.exports.verifyUser = (req, res, next) => {

    const userJWT = req.cookies.auth;
    const decodedToken = jwtDecode(userJWT)
    console.log(decodedToken)
    //If token is expired, renew it(sign out)
    console.log('ZACZYNAM ANALIZOWAĆ')

    if (!userJWT) {
        //hide user component, show sign up component
        res.send(401, 'Invalid or missing authorization token')
        console.log('1 warunek')

    } else {
        jwt.verify(req.cookies.auth, 'my-secret', function (err, decoded) {
            console.log('2 warunek')
            if (err) {
                //hide user component, show sign up component
                console.log('3 warunek')
                const decodedToken = jwtDecode(userJWT)
                mongoose.connect('mongodb://localhost:27017/noiseApp-users', { useNewUrlParser: true });
                mongoose.Promise = global.Promise;
                UserData.find({ _id: decodedToken }).then((user) => {
                    UserData.deleteOne({ _id: user[0]._id }, (err) => {
                        if (err) {
                            console.log(err)
                            console.log('4 warunek')
                        }
                        mongoose.connection.close();
                    })
                })

                res.clearCookie('auth')
                return res.status(401).json({ err: 'token is expired' });
            } else {
                console.log('5 warunek')
                const userJWTPayload = jwt.verify(req.cookies.auth, 'my-secret');
                if (!userJWTPayload) {
                    console.log('6 warunek')
                    res.clearCookie('auth')
                    res.status(401).json({ tokenStatus: "Token is wrong" });
                } else {
                    console.log('7 warunek')
                    mongoose.connect('mongodb://localhost:27017/noiseApp-users', { useNewUrlParser: true });
                    mongoose.Promise = global.Promise;

                    UserData.find({ _id: userJWTPayload.id }).then((user) => {

                        //check if the token is valid
                        request.get(`https://graph.facebook.com/me?access_token=${user[0].facebookProvider.token}`, (err, response, body) => {
                            if (JSON.parse(body).error) {
                                //hide user component, show sign up component || not done
                                console.log('8 warunek')
                                //remove the user from database
                                UserData.deleteOne({ _id: user[0]._id }, (err) => {
                                    if (err) {
                                        console.log(err)
                                        console.log('9 warunek')
                                    }
                                    mongoose.connection.close();
                                })

                                res.clearCookie('auth')
                                res.status(500).json({ tokenStatus: "Token is expired" });
                            } else {
                                console.log('10 warunek')
                                mongoose.connection.close();
                                res.status(200).json({ fullName: user[0].fullName });
                            }
                        })
                    })
                }
            }
        });


    }
}