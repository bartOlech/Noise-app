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
    const options = {
        email: newUser.email,
        type: newUser.type
      }
    UserData.find(options).then((users)=>{
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

    const newUser = new UserData({
        email: valEmailSignUp.toUpperCase(),
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
