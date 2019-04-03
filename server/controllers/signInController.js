const passport = require('passport');

module.exports.signIn = (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            res.status(404).json(err);
            return;
        }

        if (user) {
            res.cookie('registerUser', user.email);
            res.status(302).json({ info: 'zalogowano', user: user.email, auth: true })
        } else {
            res.status(401).json(info);
        }
    })(req, res);
}