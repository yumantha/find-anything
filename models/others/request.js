const mongoose  = require('mongoose');

//request schema
const RequestSchema = mongoose.Schema(
    {
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Seller',
            required: true
        },
        item: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        itemType: {
            type: String,
            required: true
        },
        accepted: {
            type: Boolean,
            required: true
        },
        timestamp: {
            type: String,
            required: true
        }
    }
);

const Request = module.exports = mongoose.model("Request", RequestSchema);

module.exports.newRequest = function(newRequest, callback) {
    newRequest.save(callback);
};

module.exports.deleteRequest = function(reqId, callback) {
    Request.findByIdAndRemove(reqId, callback);
};

module.exports.acceptRequest = function(reqId, callback) {
    Request.findByIdAndUpdate(reqId, {
        $set: {
            accepted: true
        }
    }, callback);
};

module.exports.getReqByCustomer = function(customerId, callback) {
    const query = {
        from: customerId
    };

    Request.find(query, callback);
};

module.exports.getReqBySeller = function(sellerId, callback) {
    const query = {
        to: sellerId
    };

    Request.find(query, callback);
};

module.exports.findRequestandDelete = function(userId, itemId, callback) {
    const query = {
        from: userId,
        item: itemId,
        accepted: false
    };

    Request.findOneAndRemove(query, callback);
};

module.exports.deleteRequestsByCustomer = function(userId, callback) {
    const query = {
        from: userId
    };

    Request.remove(query, callback);
};

module.exports.deleteRequestsBySeller = function(userId, callback) {
    const query = {
        to: userId
    };

    Request.remove(query, callback);
};