const express = require('express');
const router = express.Router();

const Notification = require('../models/others/notification');
const Item = require('../models/sales/item');
const Service = require('../models/sales/service');
const Seller = require('../models/users/seller');
const Customer = require('../models/users/customer');

//get notifications
router.get('/:id', (req, res, next) => {
    const userId = req.params.id;

    const notsToSend = [];

    Notification.getNotByUser(userId, (error, notifications) => {
        if(error) {
            return res.json({success: false, msg: "An error occurred. Error: " + error})
        }

        if(!notifications) {
            return res.json({success: false, msg: "Notifications not found"})
        } else {
            notifications.forEach((notification) => {
                const not = {};

                const notUser = {};
                const notItem = {};

                notUser.id = notification.fromId;
                notUser.type = notification.fromType;

                if(notification.fromType === 'customer') {
                    Customer.getUserById(notification.fromId, (error, customer) => {
                        if(error) {
                            return res.json({success: false, msg: "An error occurred. Error: " + error})
                        }

                        if(!customer) {
                            return res.json({success: false, msg: "Customer not found"})
                        } else {
                            notUser.username = customer.username
                        }
                    });
                } else if(notification.fromType === 'seller') {
                    Seller.getUserById(notification.fromId, (error, seller) => {
                        if(error) {
                            return res.json({success: false, msg: "An error occurred. Error: " + error})
                        }

                        if(!seller) {
                            return res.json({success: false, msg: "Seller not found"})
                        } else {
                            notUser.username = seller.username
                        }
                    });
                }

                if(notification.itemId) {
                    notItem.id = notification.itemId;
                    notItem.type = notification.itemType;

                    if(notification.itemId === 'item') {
                        Item.getItemById(notification.itemId, (error, item) => {
                            if(error) {
                                return res.json({success: false, msg: "An error occurred. Error: " + error})
                            }

                            if(!item) {
                                return res.json({success: false, msg: "Item not found"})
                            } else {
                                notItem.name = item.name;
                            }
                        });
                    } else if(notification.itemId === 'service') {
                        Service.getItemById(notification.itemId, (error, service) => {
                            if(error) {
                                return res.json({success: false, msg: "An error occurred. Error: " + error})
                            }

                            if(!service) {
                                return res.json({success: false, msg: "Service not found"})
                            } else {
                                notItem.name = service.name;
                            }
                        });
                    }
                }

                not.id = notification._id;
                not.from = notUser;
                not.item = notItem;
                not.to = notification.to;
                not.type = notification.type;
                not.checked = notification.checked;
                not.timestamp = notification.timestamp;

                notsToSend.push(not);
            });

            return res.json({success: true, nots: notsToSend})
        }
    })
});

module.exports = router;