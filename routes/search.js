const express = require('express');
const router = express.Router();

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

//search the database for a given query
router.post('/:query', (req, res, next) => {
    const query = req.params.query;
    const queryArray = query.split(";");
    queryArray.shift();

    const searchObject = JSON.parse(queryArray[0].split('=')[1]);

    if (!searchObject.category) {
        searchObject.category = "";
    }

    if (!searchObject.district) {
        searchObject.district = "";
    }

    if (!searchObject.priceRange) {
        searchObject.priceRange = {
            priceUpper: Infinity,
            priceLower: 0
        }
    } else {
        if (!searchObject.priceRange.priceUpper) {
            searchObject.priceRange.priceUpper = Infinity
        }
        if (!searchObject.priceRange.priceLower) {
            searchObject.priceRange.priceLower = 0
        }
    }

    if (!searchObject.rating) {
        searchObject.rating = 0;
    }

    const resultsToSend = [];

    Item.searchItems(searchObject, (error, items) => {
        if (error) {
            return res.json({success: false, msg: "An error occurred. Error: " + error})
        }

        if (searchObject.types.items && !searchObject.district) {
            items.forEach((item) => {
                resultsToSend.push({
                    name: item.name,
                    type: 'item',
                    category: item.category,
                    price: item.price,
                    district: item.district,
                    id: item._id,
                    avgRating: item.avgRating,
                    image: item.image
                });
            });
        }

        Service.getItemsByName(searchObject, (error, services) => {
            if (error) {
                return res.json({success: false, msg: "An error occurred. Error: " + error})
            }

            if (searchObject.types.services) {
                services.forEach((service) => {
                    resultsToSend.push({
                        name: service.name,
                        type: 'service',
                        category: service.category,
                        price: service.price,
                        district: service.district,
                        id: service._id,
                        avgRating: service.avgRating,
                        image: service.image
                    });
                });
            }

            if (resultsToSend.length === 0) {
                return res.json({success: true, msg: "No results were found"});
            } else {
                sortByKey(resultsToSend, searchObject.sortBy.criteria);

                if (searchObject.sortBy.way === 'desc') {
                    resultsToSend.reverse();
                }

                return res.json({success: true, results: resultsToSend});
            }
        });
    });
});

module.exports = {
    router: router,
    sortByKey: sortByKey
};