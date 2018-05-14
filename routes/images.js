const express = require('express');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const config = require('../config/database');
const path = require('path');
const mongoose = require('mongoose');

const router = express.Router();

const Seller = require('../models/users/seller');
const Customer = require('../models/users/customer');
const Item = require('../models/sales/item');
const Service = require('../models/sales/service');

//initialize gfs
let gfs;
mongoose.connection.once('open', () => {
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection('images');
});

//create storage engine
let filename;
const storage = new GridFsStorage({
    url: config.database,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (error, buff) => {
                if(error) {
                    return reject(error);
                }
                filename = buff.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'images'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000
    }
}).single('image');

//upload an image
router.post('/upload', (req, res, next) => {
    upload(req, res, (error) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to upload image. Error: ' + error});
        } else {
            return res.json({success: true, msg: 'Image uploaded successfully', filename: filename});
        }
    })
});

//update info on the image
router.post('/info', (req, res, next) => {
    const id = req.body.id;
    const type = req.body.type;

    if(type === 'seller') {
        Seller.changeImage(id, filename, (error, seller) => {
            if(error) {
                return res.json({success: false, msg: 'Failed to upload image. Error: ' + error});
            }

            if(!seller) {
                return res.json({success: false, msg: 'Failed to upload image. Seller not found'});
            } else {
                return res.json({success: true, msg: 'Image uploaded successfully'});
            }
        });
    } else if(type === 'customer') {
        Customer.changeImage(id, filename, (error, customer) => {
            if(error) {
                return res.json({success: false, msg: 'Failed to upload image. Error: ' + error});
            }

            if(!customer) {
                return res.json({success: false, msg: 'Failed to upload image. Customer not found'});
            } else {
                return res.json({success: true, msg: 'Image uploaded successfully'});
            }
        });
    } else if(type === 'item') {
        Item.changeImage(id, filename, (error, item) => {
            if(error) {
                return res.json({success: false, msg: 'Failed to upload image. Error: ' + error});
            }

            if(!item) {
                return res.json({success: false, msg: 'Failed to upload image. Item not found'});
            } else {
                return res.json({success: true, msg: 'Image uploaded successfully'});
            }
        });
    } else if (type === 'service') {
        Service.changeImage(id, filename, (error, service) => {
            if(error) {
                return res.json({success: false, msg: 'Failed to upload image. Error: ' + error});
            }

            if(!service) {
                return res.json({success: false, msg: 'Failed to upload image. Service not found'});
            } else {
                return res.json({success: true, msg: 'Image uploaded successfully'});
            }
        });
    } else {
        return res.json({success: false, msg: 'Failed to upload image'});
    }
});

//get an image from the database
router.get('/:filename', (req, res, next) => {
    const filename = req.params.filename;

    gfs.files.findOne({
        filename: filename
    }, (error, file) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
        }

        if(!file) {
            return res.json({success: false, msg: 'No images were found'});
        } else {
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        }
    });
});

//delete an image from the database
router.delete('/:query', (req, res, next) => {
    const query = req.params.query;
    const queryArray = query.split("|");
    const filename = queryArray[0];
    const type = queryArray[1];
    const id = queryArray[2];

    gfs.remove({
        filename: filename,
        root: 'images'
    }, (error, gridStore) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
        } else {
            if(type === 'seller') {
                Seller.deleteImage(id, (error, seller) => {
                    if(error) {
                        return res.json({success: false, msg: 'Failed to delete image. Error: ' + error});
                    }

                    if(!seller) {
                        return res.json({success: false, msg: 'Failed to delete image. Seller not found'});
                    } else {
                        return res.json({success: true, msg: 'Image deleted successfully'});
                    }
                });
            } else if(type === 'customer') {
                Customer.deleteImage(id, (error, customer) => {
                    if(error) {
                        return res.json({success: false, msg: 'Failed to delete image. Error: ' + error});
                    }

                    if(!customer) {
                        return res.json({success: false, msg: 'Failed to delete image. Customer not found'});
                    } else {
                        return res.json({success: true, msg: 'Image deleted successfully'});
                    }
                });
            } else if(type === 'item') {
                Item.deleteImage(id, (error, item) => {
                    if(error) {
                        return res.json({success: false, msg: 'Failed to delete image. Error: ' + error});
                    }

                    if(!item) {
                        return res.json({success: false, msg: 'Failed to delete image. Item not found'});
                    } else {
                        return res.json({success: true, msg: 'Image deleted successfully'});
                    }
                });
            } else if(type === 'service') {
                Service.deleteImage(id, (error, service) => {
                    if(error) {
                        return res.json({success: false, msg: 'Failed to delete image. Error: ' + error});
                    }

                    if(!service) {
                        return res.json({success: false, msg: 'Failed to delete image. Service not found'});
                    } else {
                        return res.json({success: true, msg: 'Image deleted successfully'});
                    }
                });
            } else  {
                return res.json({success: false, msg: 'Failed to delete image'});
            }
        }
    });
});

module.exports = router;