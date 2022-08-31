const express = require('express');
const passport = require('passport');
const { googleClientSecret } = require('./config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    ClientSecret: keys.googleClientSecret
}));

const PORT = process.env.PORT || 8000;
app.listen(PORT);