const express = require('express');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const config = require('../config/database');
const path = require('path');
const mongoose = require('mongoose');

const router = express.Router();

//initialize gfs
let gfs;
mongoose.connection.once('open', () => {
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection('images');
});

//create storage engine
const storage = new GridFsStorage({
    url: config.database,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (error, buff) => {
                if(error) {
                    return reject(error);
                }
                const filename = buff.toString('hex') + path.extname(file.originalname);
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

router.get('/:id', (req, res, next) => {
    const imageId = req.params.id;
    let ObjectID = mongoose.mongo.ObjectId;

    gfs.files.findOne({
        "_id": ObjectID(imageId)
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

router.post('/upload', (req, res, next) => {
    upload(req, res, (error) => {
        if(error) {
            return res.json({success: false, msg: 'Failed to get stats. Error: ' + error});
        } else {
            return res.json({success: true, msg: 'Image uploaded successfully'});
        }
    })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
});


module.exports = router;