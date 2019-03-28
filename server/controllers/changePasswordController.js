const UserData = require('../models/usersDB');
const bcrypt = require('bcryptjs');

module.exports.changePassword = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { password, email } = req.body;
    
    const newPassword = new UserData({
        password,
        email
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newPassword.password, salt, (err, hash) => {
            if (err) throw err;
            newPassword.password = hash;
            const document = {email: newPassword.email.toUpperCase()}
            const pass = {password: newPassword.password}
            UserData.findOneAndUpdate(document, pass).then((user) => {
                    console.log('Password has been changed')
            }).catch((err) => {console.log(err)})
        })})
        next()
}