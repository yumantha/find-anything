const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//admin schema
const AdminSchems = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    }
});

const Admin = module.exports = mongoose.model('Admin', AdminSchems);

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (error, isMatch) => {
        if (error) throw error;
        callback(error, isMatch);
    });
};

module.exports.newAdmin = function (newAdmin, callback) {
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newAdmin.password, salt, (error, hash) => {
            if (error) {
                throw error;
            } else {
                newAdmin.password = hash;
                newAdmin.save(callback);
            }
        });
    });
};

module.exports.getAdmin = function (callback) {
    const query = {
        username: 'admin'
    };
    Admin.findOne(query, callback);
};