const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../config/database');

//user schema
const SellerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    userType: {
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
    sellingItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ],
    sellingServices: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service"
        }
    ],
    avgRating: {
        type: Number
    },
    timestamp: {
        type: String,
        required: true
    }
});

const Seller = module.exports = mongoose.model('Seller', SellerSchema);

module.exports.getUserById = function(id, callback) {
    Seller.findById(id, callback);
};

module.exports.getUserByUsername = function(username, callback) {
    const query = {
        username: username
    };
    Seller.findOne(query, callback);
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
    Seller.findByIdAndUpdate(userId,
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
                    Seller.findByIdAndUpdate(userId,
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
        Seller.findByIdAndUpdate(userId,
            {
                $set: {
                    email: updatedUser.email
                }
            },
            callback);
    }
};

module.exports.deleteUser = function(userId, callback) {
    Seller.findByIdAndRemove(userId, callback);
};