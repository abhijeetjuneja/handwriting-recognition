const mongoose = require('mongoose')
const express = require('express')
const fs = require("fs")
const imageRouter = express.Router()
const resultModel = require('../models/result')
const { Storage }= require("@google-cloud/storage")
const errorHandler = require('../modules/errorHandler')
const multer  = require('multer')
const upload  = multer({ dest: 'uploads/' })
const uuidv4 = require("uuid/v4")



const { bucketName, projectId } = require('../secrets/essentials')

const storage = new Storage({
    projectId: projectId,
    keyFilename: './secrets/credentials.json'
})

const vision = require('@google-cloud/vision')

// Creates a client
const client = new vision.ImageAnnotatorClient()

const bucket = storage.bucket(bucketName)

const config = {                                                                      
    action: 'read',                                                               
    expires: '03-01-2500',                                                        
}


//  Route  -  POST /api/images/add
imageRouter.post('/add',  upload.single('file'), (req, res, next) => {
    const options = {
        destination: req.file.path,
        predefinedAcl: 'publicRead'
    };
    const gcsname = uuidv4() + req.file.originalname
    bucket.upload(req.file.path, options)
        .then((uploadedImage) => {
            return uploadedImage[0].getMetadata() 
        })
        .then(metadata => {
            const imageUrl = metadata[0].mediaLink
            let image = {
                source: {imageUri: imageUrl}
            };
            client.textDetection( {image})
                .then(detected => {
                        const result = new resultModel({'imageUrl': imageUrl, 'text': detected[0].fullTextAnnotation != null ? detected[0].fullTextAnnotation.text : ''})
                        result.save()
                            .then( newResult => {
                                console.log('Text Detection Successfull and Result added successfully')
                                res.status(200).json({'result': {'imageUrl': newResult.imageUrl, 'text': newResult.text},'message': 'Text Detection Successfull and Result added successfully'})
                            })
                            .catch( err => {
                                console.log('Error when saving to database')
                                next(new errorHandler(400,'Error when saving to database'))
                            })
                })
                .catch(err => {
                    console.log('Error in text detection')
                    next(new errorHandler(400,'Error in text detection'))
                })
        })
        .catch(err => {
            console.log('Error when saving to Google Cloud Storage')
            next(new errorHandler(400,'Error when saving to Google Cloud Storage'))
        })
})

module.exports = imageRouter;
