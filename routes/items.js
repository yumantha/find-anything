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
                    return res.json({success: true, item: item, seller: seller.username});
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
                    seller.save();

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

    Item.updateItem(itemId, editedItem, (error, user) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to update item. Error: ' + error});
        } else {
            return res.json({success: true, msg: 'Item updated'});
        }
    });
});

module.exports = router;