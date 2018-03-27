const express = require('express');
const router = express.Router();

const Seller = require('../models/users/seller');
const Customer = require('../models/users/customer');
const Item = require('../models/sales/item');
const Service = require('../models/sales/service');
const Review = require('../models/others/review');
const Request = require('../models/others/request');

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        const x = a[key];
        const y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function getTopNum(array, num, key) {
    return sortByKey(array, key).reverse().filter((el) => {return el[key] !== 0}).slice(0, num);
}

//get item statistics
router.get('/getstats/items', (req, res, next) => {
    const itemStats = {};

    Item.mostFavs((error, favItems) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
        } else {
            itemStats.mostFavs = getTopNum(favItems, 5, 'favs');

            Item.mostReqs((error, reqItems) => {
                if(error) {
                    return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                } else {
                    itemStats.mostReqs = getTopNum(reqItems, 5, 'reqs');

                    Item.mostBuys((error, boughtItems) => {
                        if(error) {
                            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                        } else {
                            itemStats.mostBuys = getTopNum(boughtItems, 5, 'buys');
                            return res.json({success: true, stats: itemStats});
                        }
                    })
                }
            })
        }
    });
});

//get service statistics
router.get('/getstats/services', (req, res, next) => {
    const serviceStats = {};

    Service.mostFavs((error, favServices) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
        } else {
            serviceStats.mostFavs = getTopNum(favServices, 5, 'favs');

            Service.mostReqs((error, reqServices) => {
                if(error) {
                    return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                } else {
                    serviceStats.mostReqs = getTopNum(reqServices, 5, 'reqs');

                    Service.mostBuys((error, boughtServices) => {
                        if(error) {
                            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                        } else {
                            serviceStats.mostBuys = getTopNum(boughtServices, 5, 'buys');
                            return res.json({success: true, stats: serviceStats});
                        }
                    })
                }
            })
        }
    });
});

module.exports = router;