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
        type: Number,
        required: true
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
    watchedBy: [
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
    ]
});

const Service = module.exports = mongoose.model('Service', ServiceSchema);

module.exports.getItemById = function(id, callback) {
    Service.findById(id, callback);
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