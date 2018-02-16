const JwtStratergy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Seller = require('../models/users/seller');
const Customer = require('../models/users/customer');

const config = require('./database');

module.exports = function(passport) {


    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStratergy(opts, (jwt_payload, done)=>{
        if(jwt_payload.userType === 'seller') {
            Seller.getUserById(jwt_payload._id, (error, user)=>{
                if(error) {
                    return done(error, false);
                }
                if(user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        } else if(jwt_payload.userType === 'customer') {
            Customer.getUserById(jwt_payload._id, (error, user)=>{
                if(error) {
                    return done(error, false);
                }
                if(user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        } else {
            return done(null, false);
        }
    }));
};