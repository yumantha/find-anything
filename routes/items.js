const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Item = require('../models/sales/item');
const Seller = require('../models/users/seller');

//new item
router.post('/', (req, res, next) => {
    const sellerID = req.body.sellerID;
    // console.log(req.body);

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

            Item.addItem(newItem, (error, user) => {
                if(error) {
                    return res.json({success: false, msg: 'Failed to add item. Error: ' + error});
                } else {
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
            return res.json({success: true, item: item});
        }
    });
});

//delete an item
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    Item.deleteItemById(id, (error, item) => {
        if(error) {
            return res.json({success: false, msg: 'An error occurred: ' + error});
        }

        if(!item) {
            return res.json({success: false, msg: "Item not found"});
        } else {
            return res.json({success: true, item: item});
        }
    });
});

module.exports = router;