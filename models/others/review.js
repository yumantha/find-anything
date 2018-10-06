const mongoose = require('mongoose');

//review scema
const ReviewSchema = mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    itemType: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller",
        required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
});

const Review = module.exports = mongoose.model('Review', ReviewSchema);

module.exports.addReview = function (newReview, callback) {
    newReview.save(callback);
};

module.exports.getReviewById = function (reviewId, callback) {
    Review.findById(reviewId, callback);
};

module.exports.getReviewsByItem = function (itemId, callback) {
    const query = {
        item: itemId
    };
    Review.find(query, callback);
};

module.exports.getReviewsByCustomer = function (userId, callback) {
    const query = {
        customer: userId
    };
    Review.find(query, callback);
};

module.exports.deleteReview = function (reviewId, callback) {
    Review.findByIdAndRemove(reviewId, callback);
};

module.exports.updateReview = function (reviewId, editedReview, callback) {
    Review.findByIdAndUpdate(reviewId, {
        $set: {
            review: editedReview.review,
            rating: editedReview.rating
        }
    }, callback);
};

module.exports.getAvgByItem = function (itemId, callback) {
    Review.aggregate([
        {
            $group: {
                _id: "$item",
                avgRating: {
                    $avg: "$rating"
                }
            }
        }
    ], callback)
};

module.exports.getAvgBySeller = function (sellerId, callback) {
    Review.aggregate([
        {
            $group: {
                _id: "$seller",
                avgRating: {
                    $avg: "$rating"
                }
            }
        }
    ], callback)
};

module.exports.deleteReviewByCustomer = function (userId, callback) {
    const query = {
        customer: userId
    };

    Review.remove(query, callback);
};

module.exports.deleteReviewBySeller = function (userId, callback) {
    const query = {
        seller: userId
    };

    Review.remove(query, callback);
};