const mongoose = require('mongoose');

//notification schema
const NotificationSchema = mongoose.Schema({
    fromId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    fromType: {
        type: String,
        required: true
    },
    fromUsername: {
        type: String,
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    itemId: {
        type: mongoose.Schema.Types.ObjectId
    },
    itemType: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
});

const Notification = module.exports = mongoose.model('Notification', NotificationSchema);

module.exports.newNotification = function (newNotification, callback) {
    newNotification.save(callback);
};

module.exports.deleteNotification = function (notId, callback) {
    Notification.findByIdAndRemove(notId, callback);
};

module.exports.deleteFavNot = function (itemId, userId, callback) {
    const query = {
        itemId: itemId,
        fromId: userId,
        type: 'favorite'
    };

    Notification.remove(query, callback);
};

module.exports.deleteRevNot = function (itemId, userId, callback) {
    const query = {
        itemId: itemId,
        fromId: userId,
        type: 'review'
    };

    Notification.remove(query, callback);
};

module.exports.deleteReqNot = function (itemId, userId, callback) {
    const query = {
        itemId: itemId,
        fromId: userId,
        type: 'request'
    };

    Notification.remove(query, callback);
};

module.exports.getNotByUser = function (userId, callback) {
    const query = {
        to: userId
    };

    Notification.find(query, callback);
};

module.exports.getUnreadNots = function (userId, callback) {
    const query = {
        to: userId,
        checked: false
    };

    Notification.count(query, callback);
};

module.exports.checkNot = function (notId, callback) {
    Notification.findByIdAndUpdate(notId, {
        $set: {
            checked: true
        }
    }, callback);
};

module.exports.deleteNotificationsBySender = function (userId, callback) {
    const query = {
        fromId: userId
    };

    Notification.remove(query, callback);
};

module.exports.deleteNotificationsByReceiver = function (userId, callback) {
    const query = {
        to: userId
    };

    Notification.remove(query, callback);
};