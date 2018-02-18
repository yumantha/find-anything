const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Service = require('../models/sales/service ');
const Seller = require('../models/users/seller');

//new service
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

//get a service from the database
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Service.getItemById(id, (error, service) => {
        if(error) {
            return res.json({success: false, msg: "An error occurred: " + error});
        }

        if(!service) {
            return res.json({success: false, msg: "Service not found"});
        } else {
            Seller.getUserById(service.seller, (error, seller) => {
                if(error) {
                    return res.json({success: false, msg: "An error occurred: " + error});
                }

                if(!seller) {
                    return res.json({success: false, msg: "Seller not found"});
                } else {
                    return res.json({success: true, service: service, seller: seller.username});
                }
            });
        }
    });
});

//delete a service
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    Service.deleteItemById(id, (error, item) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred: ' + error});
        }

        if(!item) {
            return res.json({success: false, msg: "Service not found"});
        } else {
            return res.json({success: true, item: item});
        }
    });
});

module.exports = router;