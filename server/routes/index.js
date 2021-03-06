const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');
const { generateToken, sendToken } = require('../utils/token.utils');
const passport = require('passport');
const UserData = require('../models/usersDB');
require('../passportFb')();
require('../passportGoogle')();
const verifyController = require('../controllers/verifyController');
const logOutController = require('../controllers/LogOutController')
const googleVerifyController = require('../controllers/googleVerifyController');
const signInController = require('../controllers/signInController');
const removeUserController = require('../controllers/removeUserController');
const changePassword = require('../controllers/changePasswordController');
const setSoundController = require('../controllers/setSoundController');

// favourites sounds
const setFavouriteSound = require('../controllers/favourite/setFavouriteSound');
const removeFromFavourites = require('../controllers/favourite/removeFromFavourite');
const getFavourite = require('../controllers/favourite/getFavourite');


// add your favourite sound in the database
router.post('/setFavourite', setFavouriteSound.setFavourite)

// remove your favourite sound from the database
router.post('/removeFromFavourite', removeFromFavourites.removeFavourite)

// get a favourite sounds from database
router.get('/getFavouritesSounds', getFavourite.getFavourite)

router.post('/changePassword', 
    changePassword.changePassword,
    logOutController.LogOut 
    )

router.get('/sounds:trees', setSoundController.setSounds)

router.post('/auth', verifyController.verifyUser)

router.post('/googleVerify', googleVerifyController.verify)

router.post('/socialLogOut', logOutController.LogOut)

router.post('/removeUser', removeUserController.removeUser)


router.post('/facebook',
    passport.authenticate('facebook-token', { session: false }), function (req, res, next) {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        req.auth = {
            id: req.user.id
        };
        //res.redirect('/')
        res.cookie('social', 'facebook')
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
        res.cookie('social', 'google')
        UserData.findOne({_id: req.user.id}).then((user) => {
            if (user) {
                const document = { _id: req.user.id};
                UserData.findOneAndUpdate(document, {
                    googleTokenId: req.body.tokenId
                }).then((user) => {

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

// Login
router.post("/login", signInController.signIn) 

// homepage
router.get('/', (req, res) => {
    res.send('Hello...')
})

module.exports = router;
