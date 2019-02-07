const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserData = require('../models/usersDB');
const request = require('request');
const jwtDecode = require('jwt-decode');
const config = require('../config/config')
const { OAuth2Client } = require('google-auth-library');


module.exports.verify = (req, res, next) => {

    const userJWT = req.cookies.auth;
    const decodedToken = jwtDecode(userJWT)

    //If token is expired, renew it(sign out)
    console.log('ZACZYNAM ANALIZOWAĆ')

    if (!userJWT) {
        //hide user component, show sign up component
        res.send(401, 'Invalid or missing authorization token')
    } else {
        jwt.verify(req.cookies.auth, 'my-secret', function (err, decoded) {
            if (err) {
                //hide user component, show sign up component
                const decodedToken = jwtDecode(userJWT)
                mongoose.connect('mongodb://localhost:27017/noiseApp-users', { useNewUrlParser: true });
                mongoose.Promise = global.Promise;
                UserData.find({ _id: decodedToken }).then((user) => {
                    UserData.deleteOne({ _id: user[0]._id }, (err) => {
                        if (err) {
                            console.log(err)
                        }
                        mongoose.connection.close();
                    })
                })

                res.clearCookie('auth')
                return res.status(401).json({ err: 'token is expired' });
            } else {
                const userJWTPayload = jwt.verify(req.cookies.auth, 'my-secret');
                if (!userJWTPayload) {
                    res.clearCookie('auth')
                    res.status(401).json({ tokenStatus: "Token is wrong" });
                } else {
                    mongoose.connect('mongodb://localhost:27017/noiseApp-users', { useNewUrlParser: true });
                    mongoose.Promise = global.Promise;

                    UserData.find({ _id: userJWTPayload.id }).then((user) => {

                        //tutaj uwierzytelnianie

                        const client = new OAuth2Client(config.googleAuth.clientID);
                        async function verify() {
                            const ticket = await client.verifyIdToken({
                                idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjdjMzA5ZTNhMWMxOTk5Y2IwNDA0YWI3MTI1ZWU0MGI3Y2RiY2FmN2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjUzNTU4NTAxMzY0LTJidDhvMHFqdDdocTAyNDdqYzV1aTRjdWxwbjlxamMxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjUzNTU4NTAxMzY0LTJidDhvMHFqdDdocTAyNDdqYzV1aTRjdWxwbjlxamMxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5NTk3NDMxNjc5Mjc0OTQ4NTEzIiwiZW1haWwiOiJzcnU4ODY1MzJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJsaWN4cnJ4TTBoRUNEQ08tOWdhdmZnIiwibmFtZSI6ImZldyB3ZWYiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1neXZtSnM0WXhyYy9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ2V2b1FNdVQ0MmdvUjJ0am1VaEo1OFFoWHVRX0lLSUp3L3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJmZXciLCJmYW1pbHlfbmFtZSI6IndlZiIsImxvY2FsZSI6InBsIiwiaWF0IjoxNTQ5NDg4NjQ5LCJleHAiOjE1NDk0OTIyNDksImp0aSI6IjU0MmU5M2Y5NjA5OTA0ZDc5MGZlNWZkM2FmNGU1MzAzYWRmZGVlNTcifQ.yokm0-faubk7GcZLdLwRD_aYSWMh_s8C2UqDRa_zzk8cHoh06Xf8WCMSop9ZtOFjKaYSG75dGXeZ_9P_8yusIlBtA7FeW3NJBtFkvtVZ7Th3X_eemUWTAks8jU2D-QBpKZMq4rK4MGeZD15uW4Bk0sdzCHioPzRF8v06B5XoQNIthnk7l7BUkPKeJ4Ep736KdrFzJD_GTEbvEcqg6yOAd53qTndpNgFsdqOkOZvuTQPhbYT4vykx1RlCPEjdiXDlN7Tg45jYEeidmzaG1M80yisA2i1SDnpFpjpG1FYcKW6IdPUkewMqPW_4asLxwx741wMWhngsey68KVm_En_kVg',
                                audience: config.googleAuth.clientID,
                            });
                            const payload = ticket.getPayload();
                            //console.log(payload)
                            const userid = payload['sub'];
                        }
                        verify().catch(console.error);





                    })
                }
            }
        });


    }
}