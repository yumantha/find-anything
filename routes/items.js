const express = require('express');
const router = express.Router();

const Item = require('../models/sales/item');
const Seller = require('../models/users/seller');
const Customer = require('../models/users/customer');
const Review = require('../models/others/review');
const Notification = require('../models/others/notification');

//new item
router.post('/', (req, res, next) => {
    const sellerID = req.body.sellerID;

    Seller.getUserById(sellerID, (error, seller) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
        }

        if(!seller) {
            return res.json({success: false, msg: 'User not found'});
        } else {
            let newItem = new Item({
                name: req.body.name,
                category: req.body.category,
                isAvailable: req.body.isAvailable,
                price: req.body.price,
                location: req.body.location,
                description: req.body.description,
                seller: seller
            });

            Item.addItem(newItem, (error, item) => {
                if(error) {
                    return res.json({success: false, msg: 'Failed to add item. Error: ' + error});
                } else {
                    seller.sellingItems.push(item._id);
                    seller.save();
                    return res.json({success: true, msg: 'Item added'});
                }
            });
        }
    });
});

//get an item from the database
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Item.getItemById(id, (error, item) => {
        if(error) {
            return res.json({success: false, msg: "An error occurred: " + error});
        }

        if(!item) {
            return res.json({success: false, msg: "Item not found"});
        } else {
            Seller.getUserById(item.seller, (error, seller) => {
                if(error) {
                    return res.json({success: false, msg: "An error occurred: " + error});
                }

                if(!seller) {
                    return res.json({success: false, msg: "Seller not found"});
                } else {
                    Review.getReviewsByItem(item._id, (error, reviews) => {
                        if(error) {
                            return res.json({success: false, msg: "An error occurred: " + error});
                        }

                        if(!reviews) {
                            return res.json({success: true, item: item, seller: seller.username});
                        } else {
                            return res.json({success: true, item: item, seller: seller.username, reviews: reviews});
                        }
                    });
                }
            });
        }
    });
});

//delete an item
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    Item.getItemById(id, (error, item) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred: ' + error});
        }

        if(!item) {
            return res.json({success: false, msg: "Item not found"});
        }
        else {
            Seller.getUserById(item.seller, (error, seller) => {
                if(error) {
                    return res.json({success: false, msg: 'An error occurred: ' + error});
                }

                if(!seller) {
                    return res.json({success: false, msg: "Seller not found"});
                }
                else {
                    seller.sellingItems.remove(item);

                    Item.deleteItemById(id, (error, item) => {
                        if(error) {
                            return res.json({success: false, msg: 'An error occurred: ' + error});
                        }

                        if(!item) {
                            return res.json({success: false, msg: "Item not found"});
                        } else {
                            seller.save();

                            Review.getReviewsByItem(item._id, (error, reviews) => {
                                if(error) {
                                    return res.json({success: false, msg: 'An error occurred: ' + error});
                                }

                                reviews.forEach((review) => {
                                    Review.deleteReview(review._id, (error, deletedReview) => {
                                        if(error) {
                                            return res.json({success: false, msg: 'An error occurred: ' + error});
                                        }
                                    })
                                });
                            });

                            item.favBy.forEach((user) => {
                                let newNot = new Notification({
                                    fromId: seller._id,
                                    fromType: 'seller',
                                    to: user,
                                    type: 'delete',
                                    checked: false,
                                    timestamp: Date.now().toString()
                                });

                                Notification.newNotification(newNot, (error, notification) => {
                                    if(error) {
                                        console.log('Error sending notification. Error: ' + error);
                                    }
                                })
                            });

                            return res.json({success: true, msg: 'Item deleted'});
                        }
                    });
                }
            })
        }
    });
});

//edit an item
router.put('/:id', (req, res, next) => {
    const itemId = req.params.id;

    const editedItem = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        location: req.body.location,
        description: req.body.description,
        isAvailable: req.body.isAvailable
    };

    Item.updateItem(itemId, editedItem, (error, item) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to update item. Error: ' + error});
        }

        if(!item) {
            return res.json({success: false, msg: 'Item not found'});
        }
        else {
            item.favBy.forEach((user) => {
                Seller.getUserById(item.seller, (error, seller) => {
                    if(error) {
                        console.log('Error sending notification. Error: ' + error);
                    }

                    if(!seller) {
                        console.log('Error sending notification. Error: ' + error);
                    } else {
                        let newNot = new Notification({
                            fromId: seller._id,
                            fromType: 'seller',
                            to: user,
                            itemId: item._id,
                            itemType: 'item',
                            type: 'update',
                            checked: false,
                            timestamp: Date.now().toString()
                        });

                        Notification.newNotification(newNot, (error, notification) => {
                            if(error) {
                                console.log('Error sending notification. Error: ' + error);
                            }
                        })
                    }
                });
            });
            return res.json({success: true, msg: 'Item updated'});
        }
    });
});

//favorite an item
router.post('/:id/favorite', (req, res, next) => {
    const userId = req.body.userId;
    const itemId = req.body.itemId;

    Customer.getUserById(userId, (error, customer) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to add item to favorites. Error: ' + error});
        }

        if(!customer) {
            return res.json({success: false, msg: 'User not found'});
        } else {
            Item.getItemById(itemId, (error, item) => {
                if(error) {
                    return res.json({success: false, msg: 'Failed to add item to favorites' + error});
                }

                if(!item) {
                    return res.json({success: false, msg: 'Item not found'});
                } else {
                    customer.favItems.push(item._id);
                    item.favBy.push(customer._id);

                    customer.save();
                    item.save();

                    let newNot = new Notification({
                        fromId: customer._id,
                        fromType: 'customer',
                        to: item.seller,
                        itemId: item._id,
                        itemType: 'item',
                        type: 'favorite',
                        checked: false,
                        timestamp: Date.now().toString()
                    });

                    Notification.newNotification(newNot, (error, notification) => {
                        if(error) {
                            console.log('Error sending notification. Error: ' + error);
                        }
                    });

                    return res.json({success: true, msg: 'The item has been added to your favorites'});
                }
            })
        }
    })
});

//unfavorite an item
router.post('/:id/unfavorite', (req, res, next) => {
    const userId = req.body.userId;
    const itemId = req.body.itemId;

    Customer.getUserById(userId, (error, customer) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to add item to favorites' + error});
        }

        if(!customer) {
            return res.json({success: false, msg: 'User not found'});
        } else {
            Item.getItemById(itemId, (error, item) => {
                if(error) {
                    return res.json({success: false, msg: 'Failed to add item to favorites' + error});
                }

                if(!item) {
                    return res.json({success: false, msg: 'Item not found'});
                } else {
                    customer.favItems.remove(item);
                    item.favBy.remove(customer);

                    customer.save();
                    item.save();

                    Notification.deleteFavNot(item._id, customer._id, (error, notification) => {
                        if(error) {
                            console.log('Error sending notification. Error: ' + error);
                        }
                    });

                    return res.json({success: true, msg: 'The item has been removed from your favorites'});
                }
            });
        }
    });
});

module.exports = router;