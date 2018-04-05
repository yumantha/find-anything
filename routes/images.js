const express = require('express');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const config = require('../config/database');

const router = express.Router();

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

const upload = multer({storage});

router.get('/', (req, res, next) => {

});

router.post('/upload', upload.single(), (req, res, next) => {

});

module.exports = router;