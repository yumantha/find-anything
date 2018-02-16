const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    telephone: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String
    },
    sellingItems: [{
        type: Object
    }]
    // profPic: {
    //     data: Buffer,
    //     contentType: String
    // }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback) {
    const query = {
        username: username
    };
    User.findOne(query, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (error, isMatch)=>{
        if(error) throw error;
        callback(error, isMatch);
    });
};

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (error, salt)=>{
        bcrypt.hash(newUser.password, salt, (error, hash)=>{
            if(error) {
                throw error;
            } else {
                newUser.password = hash;
                newUser.save(callback);
            }
        });
    });
};

module.exports.updateUserProf = function(userId, updatedUser, callback) {
    User.findByIdAndUpdate(userId,
        {
            $set: {
                name: updatedUser.name,
                username: updatedUser.username,
                telephone: updatedUser.telephone,
                mobile: updatedUser.mobile,
                address: updatedUser.address
            }
        },
        callback);
};

module.exports.updateUserAcc = function(userId, updatedUser, callback) {
    if(updatedUser.password) {
        bcrypt.genSalt(10, (error, salt)=>{
            bcrypt.hash(updatedUser.password, salt, (error, hash)=>{
                if(error) {
                    throw error;
                } else {
                    updatedUser.password = hash;
                    User.findByIdAndUpdate(userId,
                        {
                            $set: {
                                email: updatedUser.email,
                                password: updatedUser.password
                            }
                        },
                        callback);
                }
            });
        });
    } else {
        User.findByIdAndUpdate(userId,
            {
                $set: {
                    email: updatedUser.email
                }
            },
            callback);
    }
};
