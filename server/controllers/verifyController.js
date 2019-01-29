const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserData = require('../models/usersDB');
const express = require('express');
const app = express();
var request = require('request');


module.exports.verifyUser = (req, res, next) => {
    const userJWT = req.cookies.auth;
    if(!userJWT){
        res.send(401, 'Invalid or missing authorization token')
    }else{
        const userJWTPayload = jwt.verify(req.cookies.auth, 'my-secret');
        if (!userJWTPayload) {
            res.clearCookie('auth')
            res.send(401, 'Invalid or missing authorization token')
        }else{
           
            mongoose.connect('mongodb://localhost:27017/noiseApp-users', {useNewUrlParser:true});
            mongoose.Promise = global.Promise;
            
            UserData.find({_id: userJWTPayload.id}).then((user)=>{
            res.cookie('user', user[0].fullName)
            
            mongoose.connection.close();

            //check if the token is valid
            request.get(`https://graph.facebook.com/me?access_token=${user[0].facebookProvider.token}`, ( err, response, body) =>{
                if(JSON.parse(body).error){
                    console.log('error')
                    //res.send(401, 'the token is expired')
                     res.clearCookie('user') //doesn't work ????
                }else{
                    console.log('true')
                    res.send(user)
                }    
            })
            
            
            //console.log(user[0].email)
        })
        }
        
    }
}