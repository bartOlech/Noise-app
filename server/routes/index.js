const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');
const { generateToken, sendToken } = require('../utils/token.utils');
const passport = require('passport');
const config = require('../config/config');
const request = require('request');
require('../passportFb')();
require('../passportGoogle')();
const verifyController = require('../controllers/fbVerifyController');
const fbLogOutController = require('../controllers/facebookLogOutController')

router.post('/auth', verifyController.verifyUser)

router.post('/facebookLogOut', fbLogOutController.fbLogOut)

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

router.route('/google')
    .post(passport.authenticate('google-token', { session: false }), function (req, res, next) {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };
        next();
    }, generateToken, sendToken);

router.post('/signUp',
    signUpController.checkEmail,
    signUpController.signUp
)
router.get('/signUp', signUpController.signUp)

module.exports = router;
