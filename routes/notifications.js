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

    Notification.getNotByUser(userId, (error, notifications) => {
        if(error) {
            return res.json({success: false, msg: "An error occurred. Error: " + error})
        }

        if(!notifications) {
            return res.json({success: false, msg: "Notifications not found"})
        } else {
            return res.json({success: true, nots: notifications});
        }
    });
});

//check notification
router.post('/:id/check', (req, res, next) => {
    const notId = req.params.id;

    Notification.checkNot(notId, (error, notification) => {
        if(error) {
            return res.json({success: false, msg: "An error occurred. Error: " + error})
        }

        if(!notification) {
            return res.json({success: false, msg: "Notification not found"})
        } else {
            return res.json({success: true});
        }
    });
});

//delete notification
router.delete('/:id', (req, res, next) => {
    const notId = req.params.id;

    Notification.deleteNotification(notId, (error, notification) => {
        if(error) {
            return res.json({success: false, msg: "An error occurred. Error: " + error})
        }

        if(!notification) {
            return res.json({success: false, msg: "Notification not found"})
        } else {
            return res.json({success: true, msg: "Notification deleted"});
        }
    });
});

module.exports = router;