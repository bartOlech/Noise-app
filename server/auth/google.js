const mongoose = require('mongoose');
const UserData = require('../models/usersDB');

exports.upsertGoogleUser = (accessToken, refreshToken, profile, cb) =>{
    console.log(refreshToken)
    mongoose.connect('mongodb://localhost:27017/noiseApp-users', {useNewUrlParser:true});
    mongoose.Promise = global.Promise;
    // console.log(profile)
    UserData.findOne({
        'googleProvider.id': profile.id
    }, function(err, user) {
        // no user was found, lets create a new one
        if (!user) {
            const newUser = new UserData({
                fullName: profile.displayName,
                email: profile.emails[0].value,
                googleProvider: {
                    id: profile.id,
                    token: accessToken
                }
            });
            newUser.save(function(error, savedUser) {
                if (error) {
                    console.log(error);
                }
                return cb(error, savedUser);
            });
        } else {
            return cb(err, user);
        }
    });
}