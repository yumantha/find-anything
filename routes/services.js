const express = require('express');
const router = express.Router();

const Service = require('../models/sales/service');
const Seller = require('../models/users/seller');
const Customer = require('../models/users/customer');
const Review = require('../models/others/review');
const Notification = require('../models/others/notification');

//new service
router.post('/', (req, res, next) => {
    const sellerID = req.body.sellerID;
    // console.log(req.body);

    Seller.getUserById(sellerID, (error, seller) => {
        if (error) {
            return res.json({success: false, msg: 'Failed to add item. Error: ' + error});
        }

        if (!seller) {
            return res.json({success: false, msg: 'User not found'});
        } else {
            let newItem = new Service({
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
                location: req.body.location,
                district: req.body.district,
                description: req.body.description,
                availableDays: req.body.availableDays,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                extraNotes: req.body.extraNotes,
                seller: seller,
                timestamp: Date.now().toString()
            });

            Service.addItem(newItem, (error, service) => {
                if (error) {
                    return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                } else {
                    seller.sellingServices.push(service._id);
                    seller.save();
                    return res.json({success: true, msg: 'Service added'});
                }
            });
        }
    });
});

//get a service from the database
router.post('/:id', (req, res, next) => {
    const id = req.params.id;

    Service.getItemById(id, (error, service) => {
        if (error) {
            return res.json({success: false, msg: "An error occurred: " + error});
        }

        if (!service) {
            return res.json({success: false, msg: "Service not found"});
        } else {
            Seller.getUserById(service.seller, (error, seller) => {
                if (error) {
                    return res.json({success: false, msg: "An error occurred: " + error});
                }

                if (!seller) {
                    return res.json({success: false, msg: "Seller not found"});
                } else {
                    Review.getReviewsByItem(service._id, (error, reviews) => {
                        if (error) {
                            return res.json({success: false, msg: "An error occurred: " + error});
                        }

                        if (!reviews) {
                            return res.json({success: true, service: service, seller: seller.username});
                        } else {
                            return res.json({
                                success: true,
                                service: service,
                                seller: seller.username,
                                reviews: reviews
                            });
                        }
                    });
                }
            });
        }
    });
});

//delete a service
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    Service.getItemById(id, (error, service) => {
        if (error) {
            return res.json({success: false, msg: 'An error occurred: ' + error});
        }

        if (!service) {
            return res.json({success: false, msg: "Service not found"});
        }
        else {
            Seller.getUserById(service.seller, (error, seller) => {
                if (error) {
                    return res.json({success: false, msg: 'An error occurred: ' + error});
                }

                if (!seller) {
                    return res.json({success: false, msg: "Seller not found"});
                }
                else {
                    seller.sellingServices.remove(service);

                    Service.deleteItemById(id, (error, service) => {
                        if (error) {
                            return res.json({success: false, msg: 'An error occurred: ' + error});
                        }

                        if (!service) {
                            return res.json({success: false, msg: "Service not found"});
                        } else {
                            seller.save();

                            Review.getReviewsByItem(service._id, (error, reviews) => {
                                if (error) {
                                    return res.json({success: false, msg: 'An error occurred: ' + error});
                                }

                                reviews.forEach((review) => {
                                    Review.deleteReview(review._id, (error, deletedReview) => {
                                        if (error) {
                                            return res.json({success: false, msg: 'An error occurred: ' + error});
                                        }
                                    })
                                });
                            });

                            service.favBy.forEach((user) => {
                                let newNot = new Notification({
                                    fromId: seller._id,
                                    fromType: 'seller',
                                    fromUsername: seller.username,
                                    to: user,
                                    type: 'deleteFav',
                                    checked: false,
                                    timestamp: Date.now().toString()
                                });

                                Notification.newNotification(newNot, (error, notification) => {
                                    if (error) {
                                        console.log('Error sending notification. Error: ' + error);
                                    }
                                })
                            });

                            return res.json({success: true, item: service});
                        }

                    });
                }
            })
        }
    });
});

//edit a service
router.put('/:id', (req, res, next) => {
    const serviceId = req.params.id;

    const editedService = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        location: req.body.location,
        district: req.body.district,
        description: req.body.description,
        availableDays: req.body.availableDays,
        startTime: req.body.startTime,
        endTimed: req.body.endTimed,
        extraNotes: req.body.extraNotes
    };

    Service.updateItem(serviceId, editedService, (error, service) => {
        if (error) {
            return res.json({success: false, msg: 'Failed to update item. Error: ' + error});
        }

        if (!service) {
            return res.json({success: false, msg: 'Service not found'});
        } else {
            service.favBy.forEach((user) => {
                Seller.getUserById(service.seller, (error, seller) => {
                    if (error) {
                        console.log('Error sending notification. Error: ' + error);
                    }

                    if (!seller) {
                        console.log('Error sending notification. Error: ' + error);
                    } else {
                        let newNot = new Notification({
                            fromId: seller._id,
                            fromType: 'seller',
                            fromUsername: seller.username,
                            to: user,
                            itemId: service._id,
                            itemType: 'service',
                            type: 'updateFav',
                            checked: false,
                            timestamp: Date.now().toString()
                        });

                        Notification.newNotification(newNot, (error, notification) => {
                            if (error) {
                                console.log('Error sending notification. Error: ' + error);
                            }
                        })
                    }
                });

            });
            return res.json({success: true, msg: 'Service updated'});
        }
    });
});

//favorite a service
router.post('/:id/favorite', (req, res, next) => {
    const userId = req.body.userId;
    const serviceId = req.body.serviceId;

    Customer.getUserById(userId, (error, customer) => {
        if (error) {
            return res.json({success: false, msg: 'Failed to add service to favorites. Error: ' + error});
        }

        if (!customer) {
            return res.json({success: false, msg: 'User not found'});
        } else {
            Service.getItemById(serviceId, (error, service) => {
                if (error) {
                    return res.json({success: false, msg: 'Failed to add service to favorites' + error});
                }

                if (!service) {
                    return res.json({success: false, msg: 'Service not found'});
                } else {
                    customer.favServices.push(service._id);
                    service.favBy.push(customer._id);

                    customer.save();
                    service.save();

                    let newNot = new Notification({
                        fromId: customer._id,
                        fromType: 'customer',
                        fromUsername: customer.username,
                        to: service.seller,
                        itemId: service._id,
                        itemType: 'service',
                        type: 'favorite',
                        checked: false,
                        timestamp: Date.now().toString()
                    });

                    Notification.newNotification(newNot, (error, notification) => {
                        if (error) {
                            console.log('Error sending notification. Error: ' + error);
                        }
                    });

                    return res.json({success: true, msg: 'The service has been added to your favorites'});
                }
            })
        }
    })
});

//unfavorite a service
router.post('/:id/unfavorite', (req, res, next) => {
    const userId = req.body.userId;
    const serviceId = req.body.serviceId;

    Customer.getUserById(userId, (error, customer) => {
        if (error) {
            return res.json({success: false, msg: 'Failed to add service to favorites' + error});
        }

        if (!customer) {
            return res.json({success: false, msg: 'User not found'});
        } else {
            Service.getItemById(serviceId, (error, service) => {
                if (error) {
                    return res.json({success: false, msg: 'Failed to add service to favorites' + error});
                }

                if (!service) {
                    return res.json({success: false, msg: 'Service not found'});
                } else {
                    customer.favServices.remove(service);
                    service.favBy.remove(customer);

                    customer.save();
                    service.save();

                    Notification.deleteFavNot(service._id, customer._id, (error, notification) => {
                        if (error) {
                            console.log('Error sending notification. Error: ' + error);
                        }
                    });

                    return res.json({success: true, msg: 'The service has been removed from your favorites'});
                }
            });
        }
    });
});

module.exports = router;