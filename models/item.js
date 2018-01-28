const mongoose = require('mongoose');
const config = require('../config/database');

//user schema
const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
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
        type: String,
        required: true
    },
    seller: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: {
            type: String
        }
    },
    watchedBy: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            username: {
                type: String
            }
        }
    ]
});

const Item = module.exports = mongoose.model('Item', ItemSchema);

module.exports.getItemById = function(id, callback) {
    Item.findById(id, callback);
};

module.exports.addItem = function(newItem, callback) {
    newItem.save(callback);
};