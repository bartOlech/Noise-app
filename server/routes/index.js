const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');
const { generateToken, sendToken } = require('../utils/token.utils');
const passport = require('passport');
const config = require('../config');
const request = require('request');
require('../passport')();

router.post('/facebook', 
    passport.authenticate('facebook-token', {session: false}), function(req, res, next) {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };

        next();
    }, generateToken, sendToken)
    

router.post('/signUp', 
    signUpController.checkEmail,
    signUpController.signUp
)
router.get('/signUp', signUpController.signUp)
//router.post('/authfb', facebookLogIn.fbLogIn)

module.exports = router;
