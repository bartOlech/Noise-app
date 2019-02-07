const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');
const { generateToken, sendToken } = require('../utils/token.utils');
const passport = require('passport');
const mongoose = require('mongoose');
const UserData = require('../models/usersDB');
require('../passportFb')();
require('../passportGoogle')();
const verifyController = require('../controllers/verifyController');
const fbLogOutController = require('../controllers/facebookLogOutController')
const googleVerifyController = require('../controllers/googleVerifyController');

router.post('/auth', verifyController.verifyUser)

router.post('/googleVerify', googleVerifyController.verify)

router.post('/socialLogOut', fbLogOutController.fbLogOut)


router.post('/facebook',
    passport.authenticate('facebook-token', { session: false }), function (req, res, next) {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };
        //res.redirect('/')
        next();
    }, generateToken, sendToken, verifyController.verifyUser)

router.post('/google',
    passport.authenticate('google-token', { session: false }), function (req, res, next) {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }

        req.auth = {
            id: req.user.id
        };

        mongoose.connect('mongodb://localhost:27017/noiseApp-users', { useNewUrlParser: true });
        mongoose.Promise = global.Promise;
        UserData.findOne({_id: req.user.id}).then((user) => {
           
            if (user) {
                const document = { googleTokenId: req.body.tokenId};
                UserData.findOneAndUpdate(document).then((user) => {
                     mongoose.connection.close();
                }).catch((err) => {console.log(err)})   
            }
        })

        next();
    }, generateToken, sendToken);

router.post('/signUp',
    signUpController.checkEmail,
    signUpController.signUp
)
router.get('/signUp', signUpController.signUp)

module.exports = router;
