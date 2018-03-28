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
    return sortByKey(array, key)
        .reverse()
        .filter((el) => {
            return el[key] !== 0
        })
        .filter((el) => {
            return el[key] !== undefined
        })
        .slice(0, num);
}

function getDate(timestamp) {
    let date = {};

    let dateToFormat = new Date(parseInt(timestamp.replace(timestamp.substring(10), '000')));
    let dateArray = (dateToFormat.toString().split(" ").slice(1, 4));

    date.year = dateArray[2];
    date.month = dateArray[0];
    date.date = dateArray[1];

    return date
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

//get top rated
router.get('/getstats/toprated', (req, res, next) => {
    const topRated = {};

    Item.getTopRated((error, topItems) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
        } else {
            topRated.items = getTopNum(topItems, 5, 'avgRating');

            Service.getTopRated((error, topServices) => {
                if(error) {
                    return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                } else {
                    topRated.services = getTopNum(topServices, 5, 'avgRating');

                    Seller.getTopRated((error, topSellers) => {
                        if(error) {
                            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                        } else {
                            topRated.sellers = getTopNum(topSellers, 5, 'avgRating');

                            return res.json({success: true, stats: topRated});
                        }
                    });
                }
            });

        }
    });
});

//sign up and item adding times
router.get('/getstats/times', (req, res, next) => {
    const timeStats = {};

    Item.getTimes((error, itemTimes) => {
        const sales = {};

        if(error) {
            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
        } else {
            itemTimes.forEach((time, index, array) => {
                array[index] = getDate(time.timestamp);
            });

            sales.items = itemTimes;

            Service.getTimes((error, serviceTimes) => {
                if(error) {
                    return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                } else {
                    serviceTimes.forEach((time, index, array) => {
                        array[index] = getDate(time.timestamp);
                    });

                    sales.services = serviceTimes;
                    timeStats.sales = sales;

                    Seller.getTimes((error, sellerTimes) => {
                        const users = {};

                        if(error) {
                            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                        } else {
                            sellerTimes.forEach((time, index, array) => {
                                array[index] = getDate(time.timestamp);
                            });

                            users.sellers = sellerTimes;

                            Customer.getTimes((error, customerTimes) => {
                                if(error) {
                                    return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                                } else {
                                    customerTimes.forEach((time, index, array) => {
                                        array[index] = getDate(time.timestamp);
                                    });

                                    users.customers = customerTimes;
                                    timeStats.users = users;

                                    return res.json({success: true, stats: timeStats});
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});


module.exports = router;