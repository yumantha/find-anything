const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
// const fs = require('fs');

const User = require('../models/user');

// const imgPath = "./uploads/image.jpg";

//register user
router.post('/register', (req, res, next)=>{
    // console.log(req.body);

    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        telephone: req.body.telephone,
        mobile: req.body.mobile,
        address: req.body.address
    });

    // console.log(newUser);

    // newUser.profPic.data = fs.readFileSync(imgPath);
    // newUser.profPic.contentType = 'image/jpg';

    console.log(newUser);

    User.addUser(newUser, (error, user)=>{
        if(error) {
            res.json({success: false, msg: 'Failed to register user. Error: ' + error})
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

//edit user
router.post('/edit', (req, res, next)=>{
    // console.log(req.body);

    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    // console.log(newUser);

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
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (error, user)=>{
        if(error) throw error;

        if(!user) {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (error, isMatch)=>{
            if(error) throw error;

            if(isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800, //week
                });
                res.json({success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                })
            } else {
                return res.json({success: false, msg: 'Invalid password'});
            }
        })
    });
});

//user profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    res.json({user: req.user});
});

module.exports = router;