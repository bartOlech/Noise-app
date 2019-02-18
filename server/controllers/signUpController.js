const mongoose = require('mongoose');
const UserData = require('../models/usersDB');
const bcrypt = require('bcryptjs');

exports.checkEmail = (req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    const {valEmailSignUp, valPassSignUp} = req.body;

    const newUser = new UserData({
        email: valEmailSignUp,
        password: valPassSignUp,
        type: 'usersRegister'
      });
    mongoose.connect('mongodb://localhost:27017/noiseApp-users', {useNewUrlParser:true});
    mongoose.Promise = global.Promise;
    UserData.find({'email': newUser.email}).then((users)=>{ //tutaj nie może być samo email(może korygować z mailem z Facebooka lub Google)
    if(users.length > 0){
        console.log('This mail already exists')
        res.status(409).json({mailExist: "To konto jest już zarejestrowane"});
    }else{
        next();
    }
    })
}

exports.signUp = (req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    const {valEmailSignUp, valPassSignUp} = req.body;

    mongoose.connect('mongodb://localhost:27017/noiseApp-users', {useNewUrlParser:true});
      mongoose.Promise = global.Promise;

    const newUser = new UserData({
        email: valEmailSignUp,
        password: valPassSignUp,
        type: 'usersRegister'
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then((user)=>{
                console.log('success SignUp')
                res.status(200).json({mailExist: ""});
            }).catch(err => console.log(err));
            })
        })
    }
