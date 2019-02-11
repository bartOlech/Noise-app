const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserData = require('../models/usersDB');
const request = require('request');
const jwtDecode = require('jwt-decode');
const config = require('../config/config')
const { OAuth2Client } = require('google-auth-library');


module.exports.verify = (req, res, next) => {

    const userJWT = req.cookies.auth
    const decodedToken = jwtDecode(userJWT)

    //If token is expired, renew it(sign out)
    console.log('ZACZYNAM ANALIZOWAĆ')
    

    if (!userJWT) {
        //hide user component, show sign up component
        res.send(401, 'Invalid or missing authorization token')
    } else {
        jwt.verify(userJWT, 'my-secret', function (err, decoded) {
            if (err) {
                
                //hide user component, show sign up component
                const decodedToken = req.cookies.auth
                mongoose.connect('mongodb://localhost:27017/noiseApp-users', { useNewUrlParser: true });
                mongoose.Promise = global.Promise;
                UserData.findById(jwtDecode(decodedToken).id).then((user) => {
                    if(user){
                        UserData.deleteOne({_id: jwtDecode(decodedToken).id}, (err) => {
                        console.log(`The user has been removed`)
                        if (err) {
                            console.log(err)
                        }
                        mongoose.connection.close();
                    })
                    } 
                }).catch(err => {console.log(err)})

                res.clearCookie('auth')
                res.clearCookie('social')
                return res.status(401).json({ err: 'token is expired' });
            } else {
                const userJWTPayload = jwt.verify(req.cookies.auth, 'my-secret');
                if (!userJWTPayload) {
                    res.clearCookie('auth')
                    res.clearCookie('social')
                    //Remove from database ??????????????????????????????
                    res.status(401).json({ tokenStatus: "Token is wrong" });
                } else {
                    //authentication
                    mongoose.connect('mongodb://localhost:27017/noiseApp-users', { useNewUrlParser: true });
                    mongoose.Promise = global.Promise;

                    UserData.findOne({ _id: userJWTPayload.id }).then((user) => {

                        if (user) {
                            request.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${user.googleTokenId}`, (err, response, body) => {
                                if (JSON.parse(body).error) {
                                    UserData.deleteOne({ _id: user._id }, () => {
                                        console.log('The user has been remved')
                                    })
                                    res.clearCookie('auth')
                                    res.clearCookie('social')
                                    return res.status(401).json({ err: 'token is expired' });
                                } else {
                                    const client = new OAuth2Client(config.googleAuth.clientID);
                                    async function verify() {
                                        const ticket = await client.verifyIdToken({
                                            idToken: user.googleTokenId,
                                            audience: config.googleAuth.clientID,
                                        });
                                        const payload = ticket.getPayload();
                                        const userid = payload['sub'];
                                        mongoose.connection.close();
                                        res.status(200).json({ fullName: payload.name });
                                    }
                                    verify().catch((err) => {
                                    });
                                }
                            })
                        } else {
                            res.clearCookie('auth')
                            res.clearCookie('social')
                            return res.status(401).json({ err: 'token is expired' });
                        }
                    })
                }
            }
        });
    }
}