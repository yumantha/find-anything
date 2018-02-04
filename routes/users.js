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

//edit user profile
router.post('/editProf', (req, res, next)=>{
    // console.log(req.body);

    const userId = req.body._id;

    let editedUser = new User({
        name: req.body.name,
        username: req.body.username,
        telephone: req.body.telephone,
        mobile: req.body.mobile,
        address: req.body.address
    });

    // console.log(editedUser);

    User.updateUserProf(userId, editedUser, (error, user)=>{
        if(error) {
            res.json({success: false, msg: 'Failed to update user. Error: ' + error})
        } else {
            res.json({success: true, msg: 'User updated'});
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

//compare password
router.post('/comparePass', (req, res, next) => {
    const userId = req.body.user_id;
    const password = req.body.password;

    User.getUserById(userId, (error, user) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred. Error: ' + error});
        }

        if(!user) {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (error, isMatch) => {
            if(error) {
                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
            }

            if(!isMatch) {
                return res.json({success: false, msg: 'Invalid password'});
            } else {
                return res.json({success: true, msg: 'Password accepted'});
            }
        });
    });

});

//user profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    res.json({user: req.user});
});

module.exports = router;