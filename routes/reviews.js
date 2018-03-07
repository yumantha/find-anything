const express = require('express');
const router = express.Router();

const Review = require('../models/others/review');
const Item = require('../models/sales/item');
const Service = require('../models/sales/service');
const Customer = require('../models/users/customer');

//new review
router.post('/', (req, res, next) => {
    const customerId = req.body.customerId;
    const itemType = req.params.type;
    const itemId = req.body.itemId;

    Customer.getUserById(customerId, (error, customer) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred. Error: ' + error});
        }

        if(!customer) {
            return res.json({success: false, msg: 'User not found'});
        } else {
            if(itemType === 'items') {
                Item.getItemById(itemId, (error, item) => {
                    if(error) {
                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                    }

                    if(!item) {
                        return res.json({success: false, msg: 'Item not found'});
                    } else {
                        let newReview  = new Review({
                            item: item,
                            itemType: 'item',
                            customer: customer,
                            review: req.body.review,
                            rating: req.body.rating
                        });

                        Review.addReview(newReview, (error, review) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            } else {
                                customer.reviews.push(review._id);
                                item.reviews.push(review._id);

                                customer.save();
                                item.save();

                                return res.json({success: true, msg: 'Review added'});
                            }
                        });
                    }
                });
            } else if (itemType === 'services') {
                Service.getItemById(itemId, (error, service) => {
                    if(error) {
                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                    }

                    if(!service) {
                        return res.json({success: false, msg: 'Service not found'});
                    } else {
                        let newReview  = new Review({
                            item: service,
                            itemType: 'service',
                            customer: customer,
                            review: req.body.review,
                            rating: req.body.rating
                        });

                        Review.addReview(newReview, (error, review) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            } else {
                                customer.reviews.push(review._id);
                                service.reviews.push(review._id);

                                customer.save();
                                service.save();

                                return res.json({success: true, msg: 'Review added'});
                            }
                        });
                    }
                });
            } else {
                return res.json({success: false, msg: 'An error occurred'});
            }
        }
    })
});

//delete a review
router.delete('/:id', (req, res, next) => {
    const reviewId = req.params._id;

    Review.getReviewById(reviewId, (error, review) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred. Error: ' + error});
        }

        if(!review) {
            return res.json({success: false, msg: 'Review not found'});
        } else {
            Customer.getUserById(review.customer, (error, customer) => {
                if(error) {
                    return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                }

                if(!customer) {
                    return res.json({success: false, msg: 'Customer not found'});
                } else {
                    customer.reviews.remove(review);

                    if(review.itemType === 'item') {
                        Item.getItemById(review.item, (error, item) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            }

                            if(!item) {
                                return res.json({success: false, msg: 'Item not found'});
                            } else {
                                item.reviews.remove(review);

                                Review.deleteReview(reviewId, (error, review) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                    }

                                    if(!review) {
                                        return res.json({success: false, msg: 'Review not found'});
                                    } else {
                                        customer.save();
                                        item.save();

                                        return res.json({success: true, msg: 'Review deleted'})
                                    }
                                });
                            }
                        });
                    } else if(review.itemType === 'service') {

                        Service.getItemById(review.item, (error, service) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            }

                            if(!service) {
                                return res.json({success: false, msg: 'Service not found'});
                            } else {
                                service.reviews.remove(review);

                                Review.deleteReview(reviewId, (error, review) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                    }

                                    if(!review) {
                                        return res.json({success: false, msg: 'Review not found'});
                                    } else {
                                        customer.save();
                                        service.save();

                                        return res.json({success: true, msg: 'Review deleted'})
                                    }
                                });
                            }
                        });
                    } else {
                        return res.json({success: false, msg: 'An error occurred'});
                    }
                }
            });
        }
    });
});

//edit a review
router.put('/:id', (req, res, next) => {
    const reviewId = req.params.id;

    const editedReview = {
        review: req.body.review,
        rating: req.body.rating
    };

    Review.updateReview(reviewId, editedReview, (error, review) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred. Error: ' + error});
        }

        if(!review) {
            return res.json({success: false, msg: 'Review not found'});
        } else {
            return res.json({success: true, msg: 'Review updated'});
        }
    })
});

module.exports = router;