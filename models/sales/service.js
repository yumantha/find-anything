const mongoose = require('mongoose');
const config = require('../../config/database');

//user schema
const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    district: {
        type: String
    },
    description: {
        type: String
    },
    availableDays: {
        type: String
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    extraNotes: {
        type: String
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true
    },
    favBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer"
        }
    ],
    requestedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer"
        }
    ],
    boughtBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer"
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
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

const Service = module.exports = mongoose.model('Service', ServiceSchema);

module.exports.getItemById = function(id, callback) {
    Service.findById(id, callback);
};

//search for services
module.exports.getItemsByName = function(searchObject, callback) {
    const query = {
        name: new RegExp('\\b' + searchObject.name.trim() + '\\b', 'i'),
        category: new RegExp('\\b' + searchObject.category.trim() + '\\b', 'i'),
        district: new RegExp('\\b' + searchObject.district.trim() + '\\b', 'i'),
        price: {$gt: searchObject.priceRange.priceLower, $lt: searchObject.priceRange.priceUpper}
    };

    Service.find(query, callback);
};


module.exports.addItem = function(newItem, callback) {
    newItem.save(callback);
};

module.exports.deleteItemById = function(id, callback) {
    Service.findByIdAndRemove(id, callback);
};

module.exports.updateItem = function(itemId, editedItem, callback) {
    Service.findByIdAndUpdate(itemId,
        {
            $set: {
                name: editedItem.name,
                category: editedItem.category,
                price: editedItem.price,
                location: editedItem.location,
                district: editedItem.district,
                description: editedItem.description,
                availableDays: editedItem.availableDays,
                startTime: editedItem.startTime,
                endTimed: editedItem.endTimed,
                extraNotes: editedItem.extraNotes,
            }
        },
        callback);
};

module.exports.deleteItemsByUser = function(userId, callback) {
    const query = {
        seller: userId
    };

    Service.remove(query, callback);
};

module.exports.mostFavs = function(callback) {
    Service.aggregate(
        [
            {
                $project: {
                    name: 1,
                    favs: {
                        $size: "$favBy"
                    }
                }
            }
        ]
        , callback)
};

module.exports.mostReqs = function(callback) {
    Service.aggregate(
        [
            {
                $project: {
                    name: 1,
                    reqs: {
                        $size: "$requestedBy"
                    }
                }
            }
        ]
        , callback)
};

module.exports.mostBuys = function(callback) {
    Service.aggregate(
        [
            {
                $project: {
                    name: 1,
                    buys: {
                        $size: "$boughtBy"
                    }
                }
            }
        ]
        , callback)
};

module.exports.getTopRated = function(callback) {
    Service.find(callback).select({
        'name': 1,
        'avgRating': 1
    });
};

module.exports.getTimes = function(callback) {
    Service.find(callback).select({
        '_id': 0,
        'timestamp': 1
    })
};

module.exports.getNumber = function(callback) {
    Service.count(callback);
};