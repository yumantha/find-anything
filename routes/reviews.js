const express = require('express');
const router = express.Router();

const Review = require('../models/others/review');
const Item = require('../models/sales/item');
const Service = require('../models/sales/service');
const Customer = require('../models/users/customer');
const Seller = require('../models/users/seller');
const Notification = require('../models/others/notification');

//new review
router.post('/', (req, res, next) => {
    const customerId = req.body.customerId;
    const itemType = req.body.itemType;
    const itemId = req.body.itemId;

    Customer.getUserById(customerId, (error, customer) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred. Error: ' + error});
        }

        if(!customer) {
            return res.json({success: false, msg: 'User not found'});
        } else {
            if(itemType === 'item') {
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
                            seller: item.seller,
                            review: req.body.review,
                            rating: req.body.rating,
                            timestamp: Date.now().toString()
                        });
                        Review.addReview(newReview, (error, review) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            } else {
                                customer.reviews.push(review._id);
                                item.reviews.push(review._id);

                                customer.save();

                                Review.getAvgByItem(review.item, (error, results) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                    }

                                    results.forEach((result) => {
                                        if(result._id.toString() === itemId) {
                                            item.avgRating = result.avgRating.toString();
                                        }
                                    });

                                    item.save()
                                });

                                Seller.getUserById(review.seller, (error, seller) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                    }

                                    if(!seller) {
                                        return res.json({success: false, msg: 'Item seller not found'});
                                    } else {
                                        Review.getAvgBySeller(seller._id, (error, results) => {
                                            if(error) {
                                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                            }

                                            results.forEach((result) => {
                                                if(result._id) {
                                                    if(result._id.toString() === seller._id.toString()) {
                                                        seller.avgRating = result.avgRating.toString();
                                                    }
                                                }
                                            });

                                            seller.save();
                                        })
                                    }
                                });

                                let newNot = new Notification({
                                    fromId: customer._id,
                                    fromType: 'customer',
                                    fromUsername: customer.username,
                                    to: item.seller,
                                    itemId: item._id,
                                    itemType: 'item',
                                    type: 'review',
                                    checked: false,
                                    timestamp: Date.now().toString()
                                });

                                Notification.newNotification(newNot, (error, notification) => {
                                    if(error) {
                                        console.log('Error sending notification. Error: ' + error);
                                    }
                                });

                                return res.json({success: true, msg: 'Review added'});
                            }
                        });
                    }
                });
            } else if (itemType === 'service') {
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
                            seller: service.seller,
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

                                Review.getAvgByItem(review.item, (error, results) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                    }

                                    results.forEach((result) => {
                                        if(result._id.toString() === itemId) {
                                            service.avgRating = result.avgRating.toString();
                                        }
                                    });

                                    service.save()
                                });

                                Seller.getUserById(review.seller, (error, seller) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                    }

                                    if(!seller) {
                                        return res.json({success: false, msg: 'Item seller not found'});
                                    } else {
                                        Review.getAvgBySeller(seller._id, (error, results) => {
                                            if(error) {
                                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                            }

                                            results.forEach((result) => {
                                                if(result._id) {
                                                    if(result._id.toString() === seller._id.toString()) {
                                                        seller.avgRating = result.avgRating.toString();
                                                    }
                                                }
                                            });

                                            seller.save();
                                        })
                                    }
                                });

                                let newNot = new Notification({
                                    fromId: customer._id,
                                    fromType: 'customer',
                                    fromUsername: customer.username,
                                    to: service.seller,
                                    itemId: service._id,
                                    itemType: 'service',
                                    type: 'review',
                                    checked: false,
                                    timestamp: Date.now().toString()
                                });

                                Notification.newNotification(newNot, (error, notification) => {
                                    if(error) {
                                        console.log('Error sending notification. Error: ' + error);
                                    }
                                });

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

//get a review
router.get('/:id', (req, res, next) => {
    const reviewId = req.params.id;

    const revCustomer = {};
    const revItem = {};

    const reviewToSend = {};

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
                    return res.json({success: false, msg: 'Review owner not found'});
                } else {
                    revCustomer.id = customer._id;
                    revCustomer.username = customer.username;

                    if(review.itemType === 'item') {
                        Item.getItemById(review.item, (error, item) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            }

                            if(!item) {
                                return res.json({success: false, msg: 'Reviewed item not found'});
                            } else {
                                revItem.id = item._id;
                                revItem.name = item.name;
                                revItem.type = 'item';

                                reviewToSend.id = review._id;
                                reviewToSend.item = revItem;
                                reviewToSend.customer = revCustomer;
                                reviewToSend.rating = review.rating;
                                reviewToSend.review = review.review;

                                return res.json({success: true, review: reviewToSend});
                            }
                        });
                    } else if(review.itemType === 'service') {
                        Service.getItemById(review.item, (error, item) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            }

                            if(!item) {
                                return res.json({success: false, msg: 'Reviewed item not found'});
                            } else {
                                revItem.id = item._id;
                                revItem.name = item.name;
                                revItem.type = 'service';

                                reviewToSend.id = review._id;
                                reviewToSend.item = revItem;
                                reviewToSend.customer = revCustomer;
                                reviewToSend.rating = review.rating;
                                reviewToSend.review = review.review;

                                return res.json({success: true, review: reviewToSend});
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

//delete a review
router.delete('/:id', (req, res, next) => {
    const reviewId = req.params.id;

    Review.getReviewById(reviewId, (error, review) => {
        if(error) {
            // console.log(error);
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

                                        Review.getAvgByItem(review.item, (error, results) => {
                                            if(error) {
                                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                            }

                                            results.forEach((result) => {
                                                if(result._id.toString() === item._id.toString()) {
                                                    item.avgRating = result.avgRating.toString();
                                                }
                                            });

                                            item.save()
                                        });

                                        Seller.getUserById(review.seller, (error, seller) => {
                                            if(error) {
                                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                            }

                                            if(!seller) {
                                                return res.json({success: false, msg: 'Item seller not found'});
                                            } else {
                                                Review.getAvgBySeller(seller._id, (error, results) => {
                                                    if(error) {
                                                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                                    }

                                                    results.forEach((result) => {
                                                        if(result._id) {
                                                            if(result._id.toString() === seller._id.toString()) {
                                                                seller.avgRating = result.avgRating.toString();
                                                            }
                                                        }
                                                    });

                                                    seller.save();
                                                })
                                            }
                                        });

                                        Notification.deleteRevNot(item._id, customer._id, (error, notification) => {
                                            if(error) {
                                                console.log('Error sending notification. Error: ' + error);
                                            }
                                        });

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

                                        Review.getAvgByItem(review.item, (error, results) => {
                                            if(error) {
                                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                            }

                                            results.forEach((result) => {
                                                if(result._id.toString() === service._id.toString()) {
                                                    service.avgRating = result.avgRating.toString();
                                                }
                                            });

                                            service.save()
                                        });

                                        Seller.getUserById(review.seller, (error, seller) => {
                                            if(error) {
                                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                            }

                                            if(!seller) {
                                                return res.json({success: false, msg: 'Item seller not found'});
                                            } else {
                                                Review.getAvgBySeller(seller._id, (error, results) => {
                                                    if(error) {
                                                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                                    }

                                                    results.forEach((result) => {
                                                        if(result._id) {
                                                            if(result._id.toString() === seller._id.toString()) {
                                                                seller.avgRating = result.avgRating.toString();
                                                            }
                                                        }
                                                    });

                                                    seller.save();
                                                })
                                            }
                                        });

                                        Notification.deleteRevNot(service._id, customer._id, (error, notification) => {
                                            if(error) {
                                                console.log('Error sending notification. Error: ' + error);
                                            }
                                        });
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
    const itemId = req.body.itemId;
    const itemType = req.body.itemType;

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
            if(itemType === 'item') {
                Item.getItemById(itemId, (error, item) => {
                    if(error) {
                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                    }

                    if(!item) {
                        return res.json({success: false, msg: 'Item not found'});
                    } else {
                        Review.getAvgByItem(review.item, (error, results) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            }

                            results.forEach((result) => {
                                if(result._id.toString() === item._id.toString()) {
                                    item.avgRating = result.avgRating.toString();
                                }
                            });

                            item.save()
                        });

                        Seller.getUserById(review.seller, (error, seller) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            }

                            if(!seller) {
                                return res.json({success: false, msg: 'Item seller not found'});
                            } else {
                                Review.getAvgBySeller(seller._id, (error, results) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                    }

                                    results.forEach((result) => {
                                        if(result._id) {
                                            if(result._id.toString() === seller._id.toString()) {
                                                seller.avgRating = result.avgRating.toString();
                                            }
                                        }
                                    });

                                    seller.save();

                                    Customer.getUserById(review.customer, (error, customer) => {
                                        if(error) {
                                            return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                        }

                                        if(!customer) {
                                            return res.json({success: false, msg: 'Customer not found'});
                                        } else {
                                            let newNot = new Notification({
                                                fromId: customer._id,
                                                fromType: 'customer',
                                                fromUsername: customer.username,
                                                to: item.seller,
                                                itemId: item._id,
                                                itemType: 'item',
                                                type: 'review',
                                                checked: false,
                                                timestamp: Date.now().toString()
                                            });

                                            Notification.newNotification(newNot, (error, notification) => {
                                                if(error) {
                                                    console.log('Error sending notification. Error: ' + error);
                                                }
                                            });
                                        }
                                    });
                                })
                            }
                        });
                    }
                });
            } else if (itemType === 'service') {
                Service.getItemById(itemId, (error, service) => {
                    if(error) {
                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                    }

                    if(!service) {
                        return res.json({success: false, msg: 'Service not found'});
                    } else {
                        Review.getAvgByItem(review.item, (error, results) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            }

                            results.forEach((result) => {
                                if(result._id.toString() === service._id.toString()) {
                                    service.avgRating = result.avgRating.toString();
                                }
                            });

                            service.save()
                        });

                        Seller.getUserById(review.seller, (error, seller) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                            }

                            if(!seller) {
                                return res.json({success: false, msg: 'Item seller not found'});
                            } else {
                                Review.getAvgBySeller(seller._id, (error, results) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                    }

                                    results.forEach((result) => {
                                        if(result._id) {
                                            if(result._id.toString() === seller._id.toString()) {
                                                seller.avgRating = result.avgRating.toString();
                                            }
                                        }
                                    });
                                    seller.save();

                                    Customer.getUserById(review.customer, (error, customer) => {
                                        if(error) {
                                            return res.json({success: false, msg: 'An error occurred. Error: ' + error});
                                        }

                                        if(!customer) {
                                            return res.json({success: false, msg: 'Customer not found'});
                                        } else {
                                            let newNot = new Notification({
                                                fromId: customer._id,
                                                fromType: 'customer',
                                                fromUsername: customer.username,
                                                to: service.seller,
                                                itemId: service._id,
                                                itemType: 'service',
                                                type: 'review',
                                                checked: false,
                                                timestamp: Date.now().toString()
                                            });

                                            Notification.newNotification(newNot, (error, notification) => {
                                                if(error) {
                                                    console.log('Error sending notification. Error: ' + error);
                                                }
                                            });
                                        }
                                    });
                                })
                            }
                        });
                    }
                })
            }
            return res.json({success: true, msg: 'Review updated'});
        }
    })
});

module.exports = router;