const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserData = require('../models/usersDB');

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
            res.cookie('user', user[0].email)

            mongoose.connection.close();
            
            res.send(user)
            
            //console.log(user[0].email)
        })
        }
        
    }
}