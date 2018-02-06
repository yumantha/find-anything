const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Item = require('../models/item');

//new item
router.post('/new', (req, res, next)=>{
    // console.log(req.body);
    let newItem = new Item({
        name: req.body.name,
        type: req.body.type,
        isAvailable: req.body.isAvailable,
        price: req.body.price,
        location: req.body.location,
        description: req.body.description,
        seller: req.body.seller
    });

    Item.addItem(newItem, (error, user)=>{
        if(error) {
            res.json({success: false, msg: 'Failed to add item. Error: ' + error})
        } else {
            res.json({success: true, msg: 'Item added'});
        }
    });
});

module.exports = router;