const mongoose = require('mongoose');
const config = require('../../config/database');

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
    ]
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