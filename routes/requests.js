const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Request = require('../models/others/request');
const Notification = require('../models/others/notification');
const Item = require('../models/sales/item');
const Service = require('../models/sales/service');
const Customer = require('../models/users/customer');
const Seller = require('../models/users/seller');

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        const x = a[key];
        const y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

//new request
router.post('/', (req, res, next) => {
    let newReq = new Request({
        from: req.body.from,
        to: req.body.to,
        item: req.body.item,
        itemType: req.body.itemType,
        accepted: false,
        timestamp: Date.now().toString()
    });

    Customer.getUserById(req.body.from, (error, customer) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred: ' + error});
        }

        if(!customer) {
            return res.json({success: false, msg: 'User not found'});
        } else {
            if(req.body.itemType === 'item') {
                Item.getItemById(req.body.item, (error, item) => {
                    if(error) {
                        return res.json({success: false, msg: 'An error occurred: ' + error});
                    }

                    if(!item) {
                        return res.json({success: false, msg: 'Item not found'});
                    } else {
                        customer.reqItems.push(item._id);
                        item.requestedBy.push(customer._id);

                        Request.newRequest(newReq, (error, request) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred: ' + error});
                            } else {
                                let newNot = new Notification({
                                    fromId: customer._id,
                                    fromType: 'customer',
                                    fromUsername: customer.username,
                                    to: mongoose.Types.ObjectId(req.body.to),
                                    itemId: item._id,
                                    itemType: 'item',
                                    type: 'request',
                                    checked: false,
                                    timestamp: Date.now().toString()
                                });

                                Notification.newNotification(newNot, (error, notification) => {
                                    if(error) {
                                        console.log('Error sending notification. Error: ' + error);
                                    }
                                });

                                customer.save();
                                item.save();

                                return res.json({success: true, msg: 'Item requested'});
                            }
                        });
                    }
                });
            } else if (req.body.itemType === 'service') {
                Service.getItemById(req.body.item, (error, service) => {
                    if(error) {
                        return res.json({success: false, msg: 'An error occurred: ' + error});
                    }

                    if(!service) {
                        return res.json({success: false, msg: 'Service not found'});
                    } else {
                        customer.reqServices.push(service._id);
                        service.requestedBy.push(customer._id);

                        Request.newRequest(newReq, (error, request) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred: ' + error});
                            } else {
                                let newNot = new Notification({
                                    fromId: customer._id,
                                    fromType: 'customer',
                                    fromUsername: customer.username,
                                    to: mongoose.Types.ObjectId(req.body.to),
                                    itemId: service._id,
                                    itemType: 'service',
                                    type: 'request',
                                    checked: false,
                                    timestamp: Date.now().toString()
                                });

                                Notification.newNotification(newNot, (error, notification) => {
                                    if(error) {
                                        console.log('Error sending notification. Error: ' + error);
                                    }
                                });

                                customer.save();
                                service.save();

                                return res.json({success: true, msg: 'Service requested'});
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

//delete request
router.delete('/:query', (req, res, next) => {
    const userId = req.params.query.split('+')[0];
    const itemId= req.params.query.split('+')[1];

    Request.findRequestandDelete(userId, itemId, (error, request) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred: ' + error});
        }

        if(!request) {
            return res.json({success: false, msg: 'Request not found'});
        } else {
            Customer.getUserById(request.from, (error, customer) => {
                if(error) {
                    return res.json({success: false, msg: 'An error occurred: ' + error});
                }

                if(!customer) {
                    return res.json({success: false, msg: 'Customer not found'});
                } else {
                    if(request.itemType === 'item') {
                        Item.getItemById(request.item, (error, item) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred: ' + error});
                            }

                            if(!item) {
                                return res.json({success: false, msg: 'Item not found'});
                            } else {
                                customer.reqItems.remove(item);
                                item.requestedBy.remove(customer);

                                customer.save();
                                item.save();

                                Notification.deleteReqNot(item._id, customer._id, (error, notification) => {
                                    if(error) {
                                        console.log('Error sending notification. Error: ' + error);
                                    }
                                });

                                return res.json({success: true, msg: 'Request deleted'});
                            }
                        });
                    } else if(request.itemType === 'service') {
                        Service.getItemById(request.item, (error, service) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred: ' + error});
                            }

                            if(!service) {
                                return res.json({success: false, msg: 'Service not found'});
                            } else {
                                customer.reqServices.remove(service);
                                service.requestedBy.remove(customer);

                                customer.save();
                                service.save();

                                Notification.deleteReqNot(service._id, customer._id, (error, notification) => {
                                    if(error) {
                                        console.log('Error sending notification. Error: ' + error);
                                    }
                                });

                                return res.json({success: true, msg: 'Request deleted'});
                            }
                        });
                    } else {
                        return res.json({success: false, msg: 'An error occurred'});
                    }
                }
            })
        }
    })
});

//get requests by seller
router.get('/seller/:id', (req, res, next) => {
    const sellerId = req.params.id;

    Request.getReqBySeller(sellerId, (error, reqs) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred: ' + error});
        }

        if(!reqs) {
            return res.json({success: false, msg: 'Requests not found'});
        } else {
            reqs = sortByKey(reqs, 'timestamp');
            reqs = reqs.reverse();
            return res.json({success: true, reqs: reqs});
        }
    })
});

//accept request
router.post('/:id/accept', (req, res, next) => {
    const reqId = req.params.id;

    Request.acceptRequest(reqId, (error, request) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred: ' + error});
        }

        if(!request) {
            return res.json({success: false, msg: 'Requests not found'});
        } else {
            Customer.getUserById(request.from, (error, customer) => {
                if(error) {
                    return res.json({success: false, msg: 'An error occurred: ' + error});
                }

                if(!customer) {
                    return res.json({success: false, msg: 'Customer not found'});
                } else {
                    if(request.itemType === 'item') {
                        Item.getItemById(request.item, (error, item) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred: ' + error});
                            }

                            if(!item) {
                                return res.json({success: false, msg: 'Item not found'});
                            } else {
                                customer.reqItems.remove(item);
                                customer.boughtItems.push(item._id);

                                item.requestedBy.remove(customer);
                                item.boughtBy.push(customer._id);

                                Seller.getUserById(item.seller, (error, seller) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred: ' + error});
                                    }

                                    if(!seller) {
                                        return res.json({success: false, msg: 'Seller not found'});
                                    } else {
                                        let newNot = new Notification({
                                            fromId: seller._id,
                                            fromType: 'seller',
                                            fromUsername: seller.username,
                                            to: customer._id,
                                            itemId: item._id,
                                            itemType: 'item',
                                            type: 'reqAccept',
                                            checked: false,
                                            timestamp: Date.now().toString()
                                        });

                                        Notification.newNotification(newNot, (error, notification) => {
                                            if(error) {
                                                console.log('Error sending notification. Error: ' + error);
                                            }
                                        });

                                        customer.save();
                                        item.save();

                                        return res.json({success: true, msg: 'Request for purchase accepted'});
                                    }
                                });
                            }
                        });
                    } else if(request.itemType === 'service') {
                        Service.getItemById(request.item, (error, service) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred: ' + error});
                            }

                            if(!service) {
                                return res.json({success: false, msg: 'Service not found'});
                            } else {
                                customer.reqServices.remove(service);
                                customer.boughtServices.push(service._id);

                                service.requestedBy.remove(customer);
                                service.boughtBy.push(customer._id);


                                Seller.getUserById(service.seller, (error, seller) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred: ' + error});
                                    }

                                    if(!seller) {
                                        return res.json({success: false, msg: 'Seller not found'});
                                    } else {
                                        let newNot = new Notification({
                                            fromId: seller._id,
                                            fromType: 'seller',
                                            fromUsername: seller.username,
                                            to: customer._id,
                                            itemId: service._id,
                                            itemType: 'service',
                                            type: 'reqAccept',
                                            checked: false,
                                            timestamp: Date.now().toString()
                                        });

                                        Notification.newNotification(newNot, (error, notification) => {
                                            if(error) {
                                                console.log('Error sending notification. Error: ' + error);
                                            }
                                        });

                                        customer.save();
                                        service.save();

                                        return res.json({success: true, msg: 'Request for purchase accepted'});
                                    }
                                });
                            }
                        });
                    } else {
                        return res.json({success: false, msg: 'An error occurred'});
                    }
                }
            })
        }
    });
});

//decline request
router.post('/:id/decline', (req, res, next) => {
    const reqId = req.params.id;

    Request.deleteRequest(reqId, (error, request) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred: ' + error});
        }

        if(!request) {
            return res.json({success: false, msg: 'Request not found'});
        } else {
            Customer.getUserById(request.from, (error, customer) => {
                if(error) {
                    return res.json({success: false, msg: 'An error occurred: ' + error});
                }

                if(!customer) {
                    return res.json({success: false, msg: 'Customer not found'});
                } else {
                    if(request.itemType === 'item') {
                        Item.getItemById(request.item, (error, item) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred: ' + error});
                            }

                            if(!item) {
                                return res.json({success: false, msg: 'Item not found'});
                            } else {
                                customer.reqItems.remove(item);
                                item.requestedBy.remove(customer);

                                Seller.getUserById(item.seller, (error, seller) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred: ' + error});
                                    }

                                    if(!seller) {
                                        return res.json({success: false, msg: 'Seller not found'});
                                    } else {
                                        let newNot = new Notification({
                                            fromId: seller._id,
                                            fromType: 'seller',
                                            fromUsername: seller.username,
                                            to: customer._id,
                                            itemId: item._id,
                                            itemType: 'item',
                                            type: 'reqDecline',
                                            checked: false,
                                            timestamp: Date.now().toString()
                                        });

                                        Notification.newNotification(newNot, (error, notification) => {
                                            if(error) {
                                                console.log('Error sending notification. Error: ' + error);
                                            }
                                        });

                                        customer.save();
                                        item.save();

                                        return res.json({success: true, msg: 'Request declined'});
                                    }
                                });
                            }
                        });
                    } else if(request.itemType === 'service') {
                        Service.getItemById(request.item, (error, service) => {
                            if(error) {
                                return res.json({success: false, msg: 'An error occurred: ' + error});
                            }

                            if(!service) {
                                return res.json({success: false, msg: 'Service not found'});
                            } else {
                                customer.reqServices.remove(service);
                                service.requestedBy.remove(customer);


                                Seller.getUserById(service.seller, (error, seller) => {
                                    if(error) {
                                        return res.json({success: false, msg: 'An error occurred: ' + error});
                                    }

                                    if(!seller) {
                                        return res.json({success: false, msg: 'Seller not found'});
                                    } else {
                                        let newNot = new Notification({
                                            fromId: seller._id,
                                            fromType: 'seller',
                                            fromUsername: seller.username,
                                            to: customer._id,
                                            itemId: service._id,
                                            itemType: 'service',
                                            type: 'reqDecline',
                                            checked: false,
                                            timestamp: Date.now().toString()
                                        });

                                        Notification.newNotification(newNot, (error, notification) => {
                                            if(error) {
                                                console.log('Error sending notification. Error: ' + error);
                                            }
                                        });

                                        customer.save();
                                        service.save();

                                        return res.json({success: true, msg: 'Request declined'});
                                    }
                                });
                            }
                        });
                    } else {
                        return res.json({success: false, msg: 'An error occurred'});
                    }
                }
            })
        }
    });
});

module.exports = router;