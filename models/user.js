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
    }
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
        callback(null, isMatch);
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
