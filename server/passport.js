const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const config = require('./config')
const User = require('./auth/facebook')

module.exports = function () {
    passport.use(new FacebookTokenStrategy({
        clientID: config.facebookAuth.clientID,
        clientSecret: config.facebookAuth.clientSecret
    },
    function (accessToken, refreshToken, profile, done) {
        User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
            return done(err, user);
        });
    }));
}
