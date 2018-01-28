const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

//register
router.post('/register', (req, res, next)=>{
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (error, user)=>{
        if(error) {
            res.json({success: false, msg: 'Failed to register user. Error: ' + error})
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

//authenticate
router.post('/authenticate', (req, res, next)=>{
    res.send('auth user');
    // const username = req.body.username;
    // const password = req.body.password;
    //
    // User.getUserByUsername(username, (error, user)=>{
    //     if(error) throw error;
    //
    //     if(!user) {
    //         return res.json({success: 'false', msg: 'User not found'});
    //     }
    //
    //     User.comparePassword(password, user.password, (error, isMatch)=>{
    //         if(error) throw error;
    //
    //         if(isMatch) {
    //             const token = jwt.sign(user.toJSON(), config.secret, {
    //                 expiresIn: 604800, //week
    //             });
    //             res.json({success: 'true',
    //                 token: 'JWT ' + token,
    //                 user: {
    //                     id: user._id,
    //                     name: user.name,
    //                     username: user.username,
    //                     email: user.email
    //                 }
    //             })
    //         } else {
    //             return res.json({success: 'false', msg: 'Invalid password'});
    //         }
    //     })
    //
    // });
});

//user profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    res.send('user prof');
    res.json({user: req.user});
});

module.exports = router;