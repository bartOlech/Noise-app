const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserData = require('../models/usersDB');
const express = require('express');
var request = require('request');


module.exports.verifyUser = (req, res, next) => {
    
    const userJWT = req.cookies.auth;
    if(!userJWT){
        res.send(401, 'Invalid or missing authorization token')
    }else{
        const userJWTPayload = jwt.verify(req.cookies.auth, 'my-secret');
        if (!userJWTPayload) {
            res.clearCookie('auth')
            res.status(401).json({tokenStatus: "Token is wrong"});
        }else{
           
            mongoose.connect('mongodb://localhost:27017/noiseApp-users', {useNewUrlParser:true});
            mongoose.Promise = global.Promise;
            
            UserData.find({_id: userJWTPayload.id}).then((user)=>{

            //check if the token is valid
            request.get(`https://graph.facebook.com/me?access_token=${user[0].facebookProvider.token}`, ( err, response, body) =>{
                if(JSON.parse(body).error){

                    //remove the user from database
                    UserData.deleteOne({_id: user[0]._id}, (err) => {
                        if(err){
                            console.log('err')
                            console.log(err)
                        }
                        mongoose.connection.close();
                    })

                    //clear cookie, not done!!!

                    res.clearCookie('user') //doesn't work ????
                    res.status(500).json({tokenStatus: "Token is expired"});
                }else{
                    mongoose.connection.close();
                    res.status(200).json({fullName: user[0].fullName});
                }    
            })
        })
         
        }
        
    }
}