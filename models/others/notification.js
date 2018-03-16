const mongoose  = require('mongoose');

//notification schema
const NotificationSchema = mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId
    },
    type: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: true
    }
});

const Notification = module.exports = mongoose.model('Notification', NotificationSchema);

module.exports.newNotification = function(newNotification, callback) {
    newNotification.save(callback);
};

module.exports.deleteNotification = function(notId, callback) {
    Notification.findByIdAndRemove(notId, callback);
};

module.exports.deleteFavNot = function(itemId, userId, callback) {
    const query = {
        item: itemId,
        from: userId,
        type: 'favorite'
    };

    Notification.remove(query, callback);
};

module.exports.getNotByUser = function(userId, callback) {
    const query = {
        to: userId
    };

    Notification.find(query, callback);
};

module.exports.checkNot = function(notId, callback) {
    Notification.findByIdAndUpdate(notId, {
        $set: {
            checked: true
        }
    });
};