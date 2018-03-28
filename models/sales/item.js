const mongoose = require('mongoose');
const config = require('../../config/database');

const Review = require('../others/review');

//item schema
const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    isAvailable: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String
    },
    description: {
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

const Item = module.exports = mongoose.model('Item', ItemSchema);

module.exports.getItemById = function(id, callback) {
    Item.findById(id, callback);
};

//search for items
module.exports.searchItems = function(searchObject, callback) {
    const query = {
        name: new RegExp('\\b' + searchObject.name.trim() + '\\b', 'i'),
        category: new RegExp('\\b' + searchObject.category.trim() + '\\b', 'i'),
        price: {$gt: searchObject.priceRange.priceLower, $lt: searchObject.priceRange.priceUpper}
    };

    Item.find(query, callback);
};

module.exports.addItem = function(newItem, callback) {
    newItem.save(callback);
};

module.exports.deleteItemById = function(id, callback) {
    Item.findByIdAndRemove(id, callback);
};

module.exports.updateItem = function(itemId, editedItem, callback) {
    Item.findByIdAndUpdate(itemId,
        {
            $set: {
                name: editedItem.name,
                category: editedItem.category,
                price: editedItem.price,
                location: editedItem.location,
                description: editedItem.description,
                isAvailable: editedItem.isAvailable
            }
        },
        callback);
};

module.exports.deleteItemsByUser = function(userId, callback) {
    const query = {
        seller: userId
    };

    Item.remove(query, callback);
};

module.exports.mostFavs = function(callback) {
    Item.aggregate(
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
    Item.aggregate(
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
    Item.aggregate(
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
    Item.find(callback).select({
        'name': 1,
        'avgRating': 1
    });
};

module.exports.getTimes = function(callback) {
    Item.find(callback).select({
        '_id': 0,
        'timestamp': 1
    })
};