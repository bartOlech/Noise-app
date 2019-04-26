const mongoose = require('mongoose');
const UserData = require('../models/usersDB');
const request = require('request');
const config = require('../config/config')

exports.upsertFbUser = (accessToken, refreshToken, profile, cb) =>{
    console.log(refreshToken)
    mongoose.connect('mongodb://localhost:27017/noiseApp-users', {useNewUrlParser:true});
    mongoose.Promise = global.Promise;

    UserData.findOne({
        'facebookProvider.id': profile.id
    }, function(err, user) {
        // no user was found, lets create a new one
        if (!user) {
            //Generate Long-Lived Access Token
            request.post(`https://graph.facebook.com/v2.10/oauth/access_token?grant_type=fb_exchange_token&client_id=${config.facebookAuth.clientID}&client_secret=${config.facebookAuth.clientSecret}&fb_exchange_token=${accessToken}`, (err, response, body) => {

                const newUser = new UserData({
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    facebookProvider: {
                        id: profile.id,
                        token: JSON.parse(body).access_token
                    }
                });
                newUser.save(function(error, savedUser) {
                    if (error) {
                        console.log(error);
                    }
                    return cb(error, savedUser);
                });
            })
             
        } else {
            return cb(err, user);
        }
    });
}