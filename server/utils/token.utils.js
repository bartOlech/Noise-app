const jwt = require('jsonwebtoken');

const createToken = function(auth) {
    return jwt.sign({
            id: auth.id
        }, 'my-secret',
        {
            expiresIn: 60 * 60 * 24   // 1 = second
        });
};

module.exports = {
  generateToken: function(req, res, next) {
      req.token = createToken(req.auth);
      return next();
  },
  sendToken: function(req, res, next) {
      res.setHeader('x-auth-token', req.token);
      res.cookie('auth', req.token);
      //res.status(200).send(JSON.stringify(req.user));
      res.status(200).json({fullName: req.user.fullName, email: req.user.email});
      
  }
};

