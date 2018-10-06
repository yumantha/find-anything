const express = require('express');
const router = express.Router();

const Seller = require('../models/users/seller');
const Customer = require('../models/users/customer');
const Item = require('../models/sales/item');
const Service = require('../models/sales/service');

//to sort an array of objects from a specific key
function sortByKey(array, key) {
    return array.sort(function (a, b) {
        const x = a[key];
        const y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

//given an array, a key and a number, get the top number of items when sorted by the given key
function getTopNum(array, num, key) {
    return sortByKey(array, key)
        .reverse()
        .filter((el) => {
            return el[key] !== 0
        })
        .filter((el) => {
            return el[key] !== undefined
        })
        .filter((el) => {
            return el[key] !== null
        })
        .slice(0, num);
}

//convert a give timestamp to the usual date format
function getDate(timestamp) {
    let date = {};
    let dateToFormat = new Date(parseInt(timestamp.replace(timestamp.substring(10), '000')));
    let dateArray = (dateToFormat.toString().split(" ").slice(1, 4));

    date.year = dateArray[2];
    date.month = dateArray[0];
    date.date = dateArray[1];

    return date;
}

// //create admin
// router.post('/newAdmin', (req, res, next) => {
//     let newAdmin = new Admin({
//         username: 'admin',
//         password: 'adminpass',
//         userType: 'admin'
//
//     });
//
//     Admin.newAdmin(newAdmin, (error, admin) => {
//         if(error) {
//             return res.json({success: false, msg: 'Failed to create admin. Error: ' + error})
//         } else {
//             return res.json({success: true, msg: 'Admin created'});
//         }
//     })
// });

//get item statistics
router.get('/getstats/items', (req, res, next) => {
    const itemStats = {};

    Item.mostFavs((error, favItems) => {
        if (error) {
            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
        } else {
            itemStats.mostFavs = getTopNum(favItems, 5, 'favs');

            Item.mostReqs((error, reqItems) => {
                if (error) {
                    return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                } else {
                    itemStats.mostReqs = getTopNum(reqItems, 5, 'reqs');

                    Item.mostBuys((error, boughtItems) => {
                        if (error) {
                            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
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
        if (error) {
            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
        } else {
            serviceStats.mostFavs = getTopNum(favServices, 5, 'favs');

            Service.mostReqs((error, reqServices) => {
                if (error) {
                    return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                } else {
                    serviceStats.mostReqs = getTopNum(reqServices, 5, 'reqs');

                    Service.mostBuys((error, boughtServices) => {
                        if (error) {
                            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
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

//get seller statistics
router.get('/getstats/sellers', (req, res, next) => {
    const sellerStats = {};

    Seller.getItemNum((error, itemNum) => {
        const selling = {};
        if (error) {
            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
        } else {
            selling.items = getTopNum(itemNum, 5, 'totItems');

            Seller.getServiceNum((error, serviceNum) => {
                if (error) {
                    return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                } else {
                    selling.services = getTopNum(serviceNum, 5, 'totServices');
                    sellerStats.selling = selling;

                    Item.mostFavsWithSeller((error, itemFavs) => {
                        const favs = {};

                        if (error) {
                            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                        } else {
                            let fItems = [];

                            sortByKey(itemFavs, 'seller');


                            fItems.push({
                                _id: itemFavs[0].seller,
                                favs: itemFavs[0].favs
                            });

                            for (let i = 1; i < itemFavs.length; i++) {
                                if (itemFavs[i].seller.toString() === itemFavs[i - 1].seller.toString()) {
                                    fItems[fItems.length - 1].favs += itemFavs[i].favs
                                } else {
                                    fItems.push({
                                        _id: itemFavs[i].seller,
                                        favs: itemFavs[i].favs
                                    });
                                }
                            }

                            favs.items = getTopNum(fItems, 5, 'favs');

                            Service.mostFavsWithSeller((error, serviceFavs) => {
                                if (error) {
                                    return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                                } else {
                                    let fServices = [];

                                    sortByKey(serviceFavs, 'seller');

                                    fServices.push({
                                        _id: serviceFavs[0].seller,
                                        favs: serviceFavs[0].favs
                                    });

                                    for (let i = 1; i < serviceFavs.length; i++) {
                                        if (serviceFavs[i].seller.toString() === serviceFavs[i - 1].seller.toString()) {
                                            fServices[fServices.length - 1].favs += serviceFavs[i].favs
                                        } else {
                                            fServices.push({
                                                _id: serviceFavs[i].seller,
                                                favs: serviceFavs[i].favs
                                            });
                                        }
                                    }

                                    favs.services = getTopNum(fServices, 5, 'favs');
                                    sellerStats.favs = favs;

                                    Item.mostReqsWithSeller((error, itemReqs) => {
                                        const reqs = {};

                                        if (error) {
                                            return res.json({
                                                success: false,
                                                msg: 'Failed to get stats. Error: ' + error
                                            });
                                        } else {
                                            let rItems = [];

                                            sortByKey(itemReqs, 'seller');

                                            rItems.push({
                                                _id: itemReqs[0].seller,
                                                reqs: itemReqs[0].reqs
                                            });

                                            for (let i = 1; i < itemReqs.length; i++) {
                                                if (itemReqs[i].seller.toString() === itemReqs[i - 1].seller.toString()) {
                                                    rItems[rItems.length - 1].reqs += itemReqs[i].reqs
                                                } else {
                                                    rItems.push({
                                                        _id: itemReqs[i].seller,
                                                        reqs: itemReqs[i].reqs
                                                    });
                                                }
                                            }

                                            reqs.items = getTopNum(rItems, 5, 'reqs');

                                            Service.mostReqsWithSeller((error, serviceReqs) => {
                                                if (error) {
                                                    return res.json({
                                                        success: false,
                                                        msg: 'Failed to get stats. Error: ' + error
                                                    });
                                                } else {
                                                    let rServices = [];

                                                    sortByKey(serviceReqs, 'seller');

                                                    rServices.push({
                                                        _id: serviceReqs[0].seller,
                                                        reqs: serviceReqs[0].reqs
                                                    });

                                                    for (let i = 1; i < serviceReqs.length; i++) {
                                                        if (serviceReqs[i].seller.toString() === serviceReqs[i - 1].seller.toString()) {
                                                            rServices[rServices.length - 1].reqs += serviceReqs[i].reqs
                                                        } else {
                                                            rServices.push({
                                                                _id: serviceReqs[i].seller,
                                                                reqs: serviceReqs[i].reqs
                                                            });
                                                        }
                                                    }

                                                    reqs.services = getTopNum(rServices, 5, 'reqs');
                                                    sellerStats.reqs = reqs;

                                                    Item.mostBuysWithSeller((error, itemBuys) => {
                                                        const buys = {};

                                                        if (error) {
                                                            return res.json({
                                                                success: false,
                                                                msg: 'Failed to get stats. Error: ' + error
                                                            });
                                                        } else {
                                                            let bItems = [];

                                                            sortByKey(itemBuys, 'seller');

                                                            bItems.push({
                                                                _id: itemBuys[0].seller,
                                                                buys: itemBuys[0].buys
                                                            });

                                                            for (let i = 1; i < itemBuys.length; i++) {
                                                                if (itemBuys[i].seller.toString() === itemBuys[i - 1].seller.toString()) {
                                                                    bItems[bItems.length - 1].buys += itemBuys[i].buys
                                                                } else {
                                                                    bItems.push({
                                                                        _id: itemBuys[i].seller,
                                                                        buys: itemBuys[i].buys
                                                                    });
                                                                }
                                                            }

                                                            buys.items = getTopNum(bItems, 5, 'buys');

                                                            Service.mostBuysWithSeller((error, serviceBuys) => {
                                                                if (error) {
                                                                    return res.json({
                                                                        success: false,
                                                                        msg: 'Failed to get stats. Error: ' + error
                                                                    });
                                                                } else {
                                                                    let bServices = [];

                                                                    sortByKey(serviceBuys, 'seller');

                                                                    bServices.push({
                                                                        _id: serviceBuys[0].seller,
                                                                        buys: serviceBuys[0].buys
                                                                    });

                                                                    for (let i = 1; i < serviceBuys.length; i++) {
                                                                        if (serviceBuys[i].seller.toString() === serviceBuys[i - 1].seller.toString()) {
                                                                            bServices[bServices.length - 1].buys += serviceBuys[i].buys
                                                                        } else {
                                                                            bServices.push({
                                                                                _id: serviceBuys[i].seller,
                                                                                buys: serviceBuys[i].buys
                                                                            });
                                                                        }
                                                                    }

                                                                    buys.services = getTopNum(bServices, 5, 'buys');
                                                                    sellerStats.buys = buys;

                                                                    return res.json({
                                                                        success: true,
                                                                        stats: sellerStats
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});

//get customer stats
router.get('/getstats/customers', (req, res, next) => {
    const customerStats = {};

    Customer.favItemNum((error, favItems) => {
        const fav = {};

        if (error) {
            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
        } else {
            fav.items = getTopNum(favItems, 5, 'favItems');

            Customer.favServiceNum((error, favServices) => {
                if (error) {
                    return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                } else {
                    fav.services = getTopNum(favServices, 5, 'favServices');
                    customerStats.fav = fav;

                    Customer.reqItemNum((error, reqItems) => {
                        const req = {};

                        if (error) {
                            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                        } else {
                            req.items = getTopNum(reqItems, 5, 'reqItems');

                            Customer.reqServiceNum((error, reqServices) => {
                                if (error) {
                                    return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                                } else {
                                    req.services = getTopNum(reqServices, 5, 'reqServices');
                                    customerStats.req = req;

                                    Customer.boughtItemNum((error, boughtItems) => {
                                        const bought = {};

                                        if (error) {
                                            return res.json({
                                                success: false,
                                                msg: 'Failed to get stats. Error: ' + error
                                            });
                                        } else {
                                            bought.items = getTopNum(boughtItems, 5, 'boughtItems');

                                            Customer.boughtServiceNum((error, boughtServices) => {
                                                if (error) {
                                                    return res.json({
                                                        success: false,
                                                        msg: 'Failed to get stats. Error: ' + error
                                                    });
                                                } else {
                                                    bought.services = getTopNum(boughtServices, 5, 'boughtServices');
                                                    customerStats.bought = bought;

                                                    return res.json({success: true, stats: customerStats});
                                                }
                                            });
                                        }
                                    })
                                }
                            });
                        }
                    })
                }
            });
        }
    })
});

//get top rated
router.get('/getstats/toprated', (req, res, next) => {
    const topRated = {};

    Item.getTopRated((error, topItems) => {
        if (error) {
            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
        } else {
            topRated.items = getTopNum(topItems, 5, 'avgRating');

            Service.getTopRated((error, topServices) => {
                if (error) {
                    return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                } else {
                    topRated.services = getTopNum(topServices, 5, 'avgRating');

                    Seller.getTopRated((error, topSellers) => {
                        if (error) {
                            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
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

        if (error) {
            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
        } else {
            sortByKey(itemTimes, 'timestamp');

            itemTimes.forEach((time, index, array) => {
                array[index] = getDate(time.timestamp);
            });

            sales.items = itemTimes;

            Service.getTimes((error, serviceTimes) => {
                if (error) {
                    return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                } else {
                    sortByKey(serviceTimes, 'timestamp');

                    serviceTimes.forEach((time, index, array) => {
                        array[index] = getDate(time.timestamp);
                    });

                    sales.services = serviceTimes;
                    timeStats.sales = sales;

                    Seller.getTimes((error, sellerTimes) => {
                        const users = {};

                        if (error) {
                            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                        } else {
                            sortByKey(sellerTimes, 'timestamp');

                            sellerTimes.forEach((time, index, array) => {
                                array[index] = getDate(time.timestamp);
                            });

                            users.sellers = sellerTimes;

                            Customer.getTimes((error, customerTimes) => {
                                if (error) {
                                    return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
                                } else {
                                    sortByKey(customerTimes, 'timestamp');

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

//get numbers
router.get('/getstats/numbers', (req, res, next) => {
    const numbers = {};

    Item.getNumber((error, itemNum) => {
        if (error) {
            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
        } else {
            numbers.items = itemNum;

            Service.getNumber((error, serviceNum) => {
                if (error) {
                    return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                } else {
                    numbers.services = serviceNum;

                    Seller.getNumber((error, sellerNum) => {
                        if (error) {
                            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                        } else {
                            numbers.sellers = sellerNum;

                            Customer.getNumber((error, customerNum) => {
                                if (error) {
                                    return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
                                } else {
                                    numbers.customers = customerNum;

                                    return res.json({success: true, stats: numbers});
                                }
                            })
                        }
                    })
                }
            })
        }
    })
});

//get seller username
router.get('/getstats/seller/:id', (req, res, next) => {
    const sellerId = req.params.id;

    Seller.getUserById(sellerId, (error, seller) => {
        if (error) {
            return res.json({success: false, msg: 'Failed to add service. Error: ' + error});
        }

        if (!seller) {
            return res.json({success: false, msg: 'Seller not found'});
        } else {
            return res.json({success: true, username: seller.username});
        }
    });
});

module.exports = {
    router: router,
    sortByKey: sortByKey,
    getTopNum: getTopNum,
    getDate: getDate
};

// module.exports = router;