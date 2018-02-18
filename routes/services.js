const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Service = require('../models/sales/service ');
const Seller = require('../models/users/seller');

//new item
router.post('/', (req, res, next) => {
    const sellerID = req.body.sellerID;
    // console.log(req.body);

    Seller.getUserById(sellerID, (error, seller) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to add item. Error: ' + error});
        }

        if(!seller) {
            return res.json({success: false, msg: 'User not found'});
        } else {
            let newItem = new Service({
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
                district: req.body.district,
                description: req.body.description,
                availableDays: req.body.availableDays,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                extraNotes: req.body.extraNotes,
                seller: seller
            });

            Service.addItem(newItem, (error, user) => {
                if(error) {
                    return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                } else {
                    return res.json({success: true, msg: 'Service added'});
                }
            });
        }
    });
});

module.exports = router;