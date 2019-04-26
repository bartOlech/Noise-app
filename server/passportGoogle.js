const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-token').Strategy;
const config = require('./config/config')
const User = require('./auth/google')

module.exports = function () {
    passport.use(new GoogleTokenStrategy({
        clientID: config.googleAuth.clientID,
        clientSecret: config.googleAuth.clientSecret,
        prompt: 'consent',
        accessType: 'offline',
    },
        function (accessToken, refreshToken, profile, done) {
            User.upsertGoogleUser(accessToken, refreshToken, profile, function (err, user) {
                return done(err, user);
            });
        }));
}