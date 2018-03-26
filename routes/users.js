const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Seller = require('../models/users/seller');
const Customer = require('../models/users/customer');
const Item = require('../models/sales/item');
const Service = require('../models/sales/service');
const Review = require('../models/others/review');
const Request = require('../models/others/request');
const Notification = require('../models/others/notification');

//register user
router.post('/register', (req, res, next)=>{
    if(req.body.userType === 'seller') {
        let newUser = new Seller({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            telephone: req.body.telephone,
            mobile: req.body.mobile,
            address: req.body.address,
            userType: req.body.userType,
            timestamp: Date.now().toString()
        });

        Seller.addUser(newUser, (error, user)=>{
            if(error) {
                return res.json({success: false, msg: 'Failed to register user. Error: ' + error})
            } else {
                return res.json({success: true, msg: 'User registered'});
            }
        });
    } else if(req.body.userType === 'customer') {
        let newUser = new Customer({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            telephone: req.body.telephone,
            mobile: req.body.mobile,
            address: req.body.address,
            userType: req.body.userType,
            timestamp: Date.now().toString()
        });

        Customer.addUser(newUser, (error, user)=>{
            if(error) {
                return res.json({success: false, msg: 'Failed to register user. Error: ' + error})
            } else {
                return res.json({success: true, msg: 'User registered'});
            }
        });
    } else {
        return res.json({success: false, msg: 'Failed to register user'})
    }
});

//edit user profile
router.post('/editProf', (req, res, next)=>{
    const userId = req.body._id;
    const userType = req.body.userType;

    if(userType === 'seller') {
        let editedUser = new Seller({
            name: req.body.name,
            username: req.body.username,
            telephone: req.body.telephone,
            mobile: req.body.mobile,
            address: req.body.address
        });

        // console.log(editedUser);

        Seller.updateUserProf(userId, editedUser, (error, user)=>{
            if(error) {
                return res.json({success: false, msg: 'Failed to update user. Error: ' + error});
            } else {
                return res.json({success: true, msg: 'User updated'});
            }
        });
    } else if(userType === 'customer') {
        let editedUser = new Customer({
            name: req.body.name,
            username: req.body.username,
            telephone: req.body.telephone,
            mobile: req.body.mobile,
            address: req.body.address
        });

        // console.log(editedUser);

        Customer.updateUserProf(userId, editedUser, (error, user)=>{
            if(error) {
                return res.json({success: false, msg: 'Failed to update user. Error: ' + error});
            } else {
                return res.json({success: true, msg: 'User updated'});
            }
        });
    } else {
        return res.json({success: false, msg: 'Failed to update user'});
    }
});

//edit user account data
router.post('/editAcc', (req, res, next) => {
    const userId = req.body.user_id;
    const userType = req.body.userType;

    if(userType === 'seller') {
        let editedUser = new Seller({
            email: req.body.email,
            password: req.body.password
        });

        // console.log(editedUser);

        Seller.updateUserAcc(userId, editedUser, (error, user)=>{
            if(error) {
                return res.json({success: false, msg: 'Failed to update user. Error: ' + error});
            } else {
                return res.json({success: true, msg: 'User updated'});
            }
        });
    } else if(userType === 'customer') {
        let editedUser = new Customer({
            email: req.body.email,
            password: req.body.password
        });

        // console.log(editedUser);

        Customer.updateUserAcc(userId, editedUser, (error, user)=>{
            if(error) {
                return res.json({success: false, msg: 'Failed to update user. Error: ' + error});
            } else {
                return res.json({success: true, msg: 'User updated'});
            }
        });
    } else {
        return res.json({success: false, msg: 'Failed to update user'});
    }
});

//authenticate
router.post('/authenticate', (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const userType = req.body.userType;

    if(userType === 'seller') {
        Seller.getUserByUsername(username, (error, user)=>{
            if(error) {
                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
            }

            if(!user) {
                return res.json({success: false, msg: 'User not found'});
            }

            Seller.comparePassword(password, user.password, (error, isMatch)=>{
                if(error) throw error;

                if(isMatch) {
                    const token = jwt.sign(user.toJSON(), config.secret, {
                        expiresIn: 604800, //week
                    });
                    return res.json({success: true,
                        token: 'JWT ' + token,
                        user: {
                            id: user._id,
                            username: user.username,
                            userType: user.userType
                        }
                    })
                } else {
                    return res.json({success: false, msg: 'Invalid password'});
                }
            })
        });
    } else if(userType === 'customer') {
        Customer.getUserByUsername(username, (error, user)=>{
            if(error) {
                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
            }

            if(!user) {
                return res.json({success: false, msg: 'User not found'});
            }

            Customer.comparePassword(password, user.password, (error, isMatch)=>{
                if(error) {
                    return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                }

                if(isMatch) {
                    const token = jwt.sign(user.toJSON(), config.secret, {
                        expiresIn: 604800, //week
                    });
                    return res.json({success: true,
                        token: 'JWT ' + token,
                        user: {
                            id: user._id,
                            username: user.username,
                            userType: user.userType
                        }
                    })
                } else {
                    return res.json({success: false, msg: 'Invalid password'});
                }
            })
        });
    } else {
        return res.json({success: false, msg: 'An error occurred'});
    }
});

//compare password
router.post('/comparePass', (req, res, next) => {
    const userId = req.body.user_id;
    const password = req.body.password;
    const userType = req.body.userType;

    if(userType === 'seller') {
        Seller.getUserById(userId, (error, user) => {
            if(error) {
                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
            }

            if(!user) {
                return res.json({success: false, msg: 'User not found'});
            }

            Seller.comparePassword(password, user.password, (error, isMatch) => {
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
    } else if(userType === 'customer') {
        Customer.getUserById(userId, (error, user) => {
            if(error) {
                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
            }

            if(!user) {
                return res.json({success: false, msg: 'User not found'});
            }

            Customer.comparePassword(password, user.password, (error, isMatch) => {
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
    } else {
        return res.json({success: false, msg: 'An error occurred'});
    }
});

//user profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    return res.json({user: req.user});
});

//view profile of a user
router.get('/:type/:id', (req, res, next) => {
    const userId = req.params.id;
    const userType = req.params.type;

    if(userType === 'seller') {
        Seller.getUserById(userId, (error, user) => {
            if(error) {
                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
            }

            if(!user) {
                return res.json({success: false, msg: 'User not found'});
            } else {
                return res.json({success: true, msg: 'User found', user: user});
            }
        })
    } else if(userType === 'customer') {
        Customer.getUserById(userId, (error, user) => {
            if(error) {
                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
            }

            if(!user) {
                return res.json({success: false, msg: 'User not found'});
            } else {
                return res.json({success: true, msg: 'User found', user: user});
            }
        })
    } else {
        return res.json({success: false, msg: 'User not found'});
    }
});

//delete user
router.delete('/:type/:id', (req, res, next) => {
    const userId = req.params.id;
    const userType = req.params.type;

    if(userType === 'seller') {
        Seller.deleteUser(userId, (error, seller) => {
            if(error) {
                return res.json({success: false, msg: 'An error occurred (deleting seller). Error: ' + error});
            }

            if(!seller) {
                return res.json({success: false, msg: 'User not found'});
            } else {
                Item.deleteItemsByUser(userId, (error, items) => {
                    if(error) {
                        return res.json({success: false, msg: 'An error occurred (deleting items). Error: ' + error});
                    } else {
                        Service.deleteItemsByUser(userId, (error, services) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred (deleting services). Error: ' + error});
                            } else {
                                Review.deleteReviewBySeller(userId, (error, reviews) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred (deleting reviews). Error: ' + error});
                                    } else {
                                        Request.deleteRequestsBySeller(userId, (error, requests) => {
                                            if(error) {
                                                return res.json({success: false, msg: 'An error occurred (deleting requests). Error: ' + error});
                                            } else {
                                                Notification.deleteNotificationsBySender(userId, (error, nots) => {
                                                    if(error) {
                                                        return res.json({success: false, msg: 'An error occurred (deleting sent notifications). Error: ' + error});
                                                    } else {
                                                        Notification.deleteNotificationsByReceiver(userId, (error, nots2) => {
                                                            if(error) {
                                                                return res.json({success: false, msg: 'An error occurred (deleting received notifications). Error: ' + error});
                                                            } else {
                                                                return res.json({success: true, msg: 'The user was deleted successfully'});
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    } else if(userType === 'customer') {
        Customer.deleteUser(userId, (error, customer) => {
            if(error) {
                return res.json({success: false, msg: 'An error occurred (deleting cutomer). Error: ' + error});
            }

            if(!customer) {
                return res.json({success: false, msg: 'User not found'});
            } else {
                Review.deleteReviewByCustomer(userId, (error, reviews) => {
                    if(error) {
                        return res.json({success: false, msg: 'An error occurred (deleting reviews). Error: ' + error});
                    } else {
                        Request.deleteRequestsByCustomer(userId, (error, requests) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred (deleting requests). Error: ' + error});
                            } else {
                                Notification.deleteNotificationsBySender(userId, (error, nots) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred (deleting sent notifications). Error: ' + error});
                                    } else {
                                        Notification.deleteNotificationsByReceiver(userId, (error, nots2) => {
                                            if(error) {
                                                return res.json({success: false, msg: 'An error occurred (deleting received notifications). Error: ' + error});
                                            } else {
                                                return res.json({success: true, msg: 'The user was deleted successfully'});
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    } else {
        return res.json({success: false, msg: 'An error occurred'});
    }
});

module.exports = router;