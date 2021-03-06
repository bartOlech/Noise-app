const jwt = require('jsonwebtoken');
const UserData = require('../models/usersDB');
const request = require('request');
const jwtDecode = require('jwt-decode');


module.exports.verifyUser = (req, res, next) => {

    const userJWT = req.cookies.auth;
    const decodedToken = jwtDecode(userJWT)
    console.log(decodedToken.id)
    //If token is expired, renew it(sign out)

    if (!userJWT) {
        //hide user component, show sign up component
        res.send(401, 'Invalid or missing authorization token')

    } else {
        jwt.verify(req.cookies.auth, 'my-secret', function (err, decoded) {
            if (err) {
                //hide user component, show sign up component
                const decodedToken = jwtDecode(userJWT)
                UserData.find({ _id: decodedToken.id }).then((user) => { //tu dodane .id(wcześniej nie było)
                    UserData.deleteOne({ _id: user[0]._id }, (err) => {
                        if (err) {
                            console.log(err)
                        }
                    })
                })

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

                    UserData.find({ _id: userJWTPayload.id }).then((user) => {

                        //check if the token is valid
                        request.get(`https://graph.facebook.com/me?access_token=${user[0].facebookProvider.token}`, (err, response, body) => {
                            if (JSON.parse(body).error) {
                                //hide user component, show sign up component || not done
                                //remove the user from database || don't do this!!! Fix it!
                                UserData.deleteOne({ _id: user[0]._id }, (err) => {
                                    if (err) {
                                        console.log(err)
                                    }
                                })

                                res.clearCookie('auth')
                                res.clearCookie('social')
                                res.status(401).json({ tokenStatus: "Token is expired" });
                            } else {
                                res.status(200).json({ 
                                    fullName: user[0].fullName,
                                    email: user[0].email
                                });
                            }
                        })
                    })
                }
            }
        });
    }
}