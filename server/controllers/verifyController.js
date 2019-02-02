const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserData = require('../models/usersDB');
const express = require('express');
const request = require('request');
const jwtDecode = require('jwt-decode');


module.exports.verifyUser = (req, res, next) => {

    const userJWT = req.cookies.auth;

    //If token is expired, renew it(sign out)

    if (!userJWT) {
        //hide user component, show sign up component
        res.send(401, 'Invalid or missing authorization token')
    } else {
        jwt.verify(req.cookies.auth, 'my-secret', function (err, decoded) {
            if (err) { 
                //hide user component, show sign up component

                

                //???????????????????????
                //Gdy token ulegnie przedawnieniu
                //tutaj użyć właściwość decoded (z nawiasu) aby rozkodować token i dostać ID, i usunąć z bazy
                //const decoded = jwtDecode(userJWT)
                //???????????????????????

                res.clearCookie('auth')
                return res.status(401).json({ err: 'token is expired' });
            } else {
                const userJWTPayload = jwt.verify(req.cookies.auth, 'my-secret');
                if (!userJWTPayload) {
                    res.clearCookie('auth')
                    res.status(401).json({ tokenStatus: "Token is wrong" });
                } else {
                    mongoose.connect('mongodb://localhost:27017/noiseApp-users', { useNewUrlParser: true });
                    mongoose.Promise = global.Promise;

                    UserData.find({ _id: userJWTPayload.id }).then((user) => {

                        //check if the token is valid
                        request.get(`https://graph.facebook.com/me?access_token=${user[0].facebookProvider.token}`, (err, response, body) => {
                            if (JSON.parse(body).error) {
                                //hide user component, show sign up component || not done

                                //remove the user from database
                                UserData.deleteOne({ _id: user[0]._id }, (err) => {
                                    if (err) {
                                        console.log(err)
                                    }
                                    mongoose.connection.close();
                                })

                                res.clearCookie('auth')
                                res.status(500).json({ tokenStatus: "Token is expired" });
                            } else {
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