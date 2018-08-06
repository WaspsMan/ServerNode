const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


//Create local strategy
const localOption = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOption, function(email, password, done){

    User.findOne({ email: email }, function(err, user) {
        if(err) { return done(err); }
        if(!user) { return done(null, false); }

        user.comparePassword(password, function(err, isMatch) {
            if(err) { return done(err); }
            if(!isMatch) { return done(null, false); }

            return done(null, user);
        });
    });
});

//Setup options for JWT Strategy
const jwtOption = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//Create JWt strategy
const jwtLogin = new JwtStrategy(jwtOption, function (payload, done) {
    //See if the user ID in the payload exists in our database
    //If it does, call 'done' with that other
    //othereise, call done without a user object
    User.findById(payload.sub, function(err, user) {
        if(err) { return done(err, false); }

        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
})

//Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);