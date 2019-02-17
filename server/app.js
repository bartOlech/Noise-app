const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
require('./config/passport')(passport);

mongoose.connect('mongodb://localhost:27017/noiseApp-users', { useNewUrlParser: true }).then(() => {console.log('MongoDB Connected')})
.catch(err => {console.log(err)})
mongoose.Promise = global.Promise;

app.set(path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

app.use(expressSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
    //cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(cookieParser())

app.use('/api', router)

module.exports = app;