const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//user schema
const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
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
    favItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ],
    favServices: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service"
        }
    ],
    reqItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ],
    reqServices: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service"
        }
    ],
    boughtItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ],
    boughtServices: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service"
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    timestamp: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);

module.exports.getUserById = function (id, callback) {
    Customer.findById(id, callback);
};

module.exports.getUserByUsername = function (username, callback) {
    const query = {
        username: username
    };
    Customer.findOne(query, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (error, isMatch) => {
        if (error) throw error;
        callback(error, isMatch);
    });
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) {
                throw error;
            } else {
                newUser.password = hash;
                newUser.save(callback);
            }
        });
    });
};

module.exports.updateUserProf = function (userId, updatedUser, callback) {
    Customer.findByIdAndUpdate(userId,
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

module.exports.updateUserAcc = function (userId, updatedUser, callback) {
    if (updatedUser.password) {
        bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(updatedUser.password, salt, (error, hash) => {
                if (error) {
                    throw error;
                } else {
                    updatedUser.password = hash;
                    Customer.findByIdAndUpdate(userId,
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
        Customer.findByIdAndUpdate(userId,
            {
                $set: {
                    email: updatedUser.email
                }
            },
            callback);
    }
};

module.exports.deleteUser = function (userId, callback) {
    Customer.findByIdAndRemove(userId, callback);
};

module.exports.getTimes = function (callback) {
    Customer.find(callback).select({
        '_id': 0,
        'timestamp': 1
    })
};

module.exports.getNumber = function (callback) {
    Customer.count(callback);
};

module.exports.favItemNum = function (callback) {
    Customer.aggregate(
        [
            {
                $project: {
                    username: 1,
                    favItems: {
                        $size: "$favItems"
                    }
                }
            }
        ]
        , callback)
};

module.exports.favServiceNum = function (callback) {
    Customer.aggregate(
        [
            {
                $project: {
                    username: 1,
                    favServices: {
                        $size: "$favServices"
                    }
                }
            }
        ]
        , callback)
};

module.exports.reqItemNum = function (callback) {
    Customer.aggregate(
        [
            {
                $project: {
                    username: 1,
                    reqItems: {
                        $size: "$reqItems"
                    }
                }
            }
        ]
        , callback)
};

module.exports.reqServiceNum = function (callback) {
    Customer.aggregate(
        [
            {
                $project: {
                    username: 1,
                    reqServices: {
                        $size: "$reqServices"
                    }
                }
            }
        ]
        , callback)
};

module.exports.boughtItemNum = function (callback) {
    Customer.aggregate(
        [
            {
                $project: {
                    username: 1,
                    boughtItems: {
                        $size: "$boughtItems"
                    }
                }
            }
        ]
        , callback)
};

module.exports.boughtServiceNum = function (callback) {
    Customer.aggregate(
        [
            {
                $project: {
                    username: 1,
                    boughtServices: {
                        $size: "$boughtServices"
                    }
                }
            }
        ]
        , callback)
};

module.exports.changeImage = function (id, image, callback) {
    Customer.findByIdAndUpdate(id,
        {
            $set: {
                image: image
            }
        },
        callback);
};

module.exports.deleteImage = function (id, callback) {
    Customer.findByIdAndUpdate(id,
        {
            $unset: {
                image: 1
            }
        },
        callback);
};