const mongoose  = require('mongoose');
const config = require('../../config/database');

//review scema
const ReviewSchema = mongoose.Schema( {
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
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const Review = module.exports = mongoose.model('Review', ReviewSchema);

module.exports.addReview = function(newReview, callback) {
    newReview.save(callback);
};

module.exports.getReviewById = function(reviewId, callback) {
    Review.findById(reviewId, callback);
};

module.exports.getReviewsByItem = function(itemId, callback) {
    const query = {
        item: itemId
    };
    Review.find(query, callback);
};

module.exports.getReviewsByCustomer = function(userId, callback) {
    const query = {
        customer: userId
    };
    Review.find(query, callback);
};

module.exports.deleteReview = function(reviewId, callback) {
    Review.findByIdAndRemove(reviewId, callback);
};

module.exports.updateReview = function(reviewId, editedReview, callback) {
    Review.findByIdAndUpdate(reviewId, {
        $set: {
            review: editedReview.review,
            rating: editedReview.rating
        }
    }, callback);
};