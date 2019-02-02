const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');


app.set(path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

app.use(logger('dev'));
app.use(cookieParser())

app.use('/api', router)

module.exports = app;