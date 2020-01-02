const mongoose = require('mongoose');
const express = require('express')
const resultRouter = express.Router()
const resultModel = require('../models/result')
const errorHandler = require('../modules/errorHandler')

//  Route  -  POST /api/results/create
resultRouter.post('/create', (req, res, next) => {
    const data = req.body
    if(data.imageUrl.length && data.text.length){
        const result = new resultModel(data)
        result.save()
            .then( result => {
                res.status(200).json({'message': 'Result added successfully'})
            })
            .catch( err => {
                next(new errorHandler(400,'Error when saving to database'))
            })
    }
    else    
        next(new errorHandler(422,'Invalid/Missing required parameters'))
})


//  Route  -  GET /api/results/all
resultRouter.get('/all', function(req, res, next) {
    resultModel.find({}, (err, results) => {
        if(err) 
            next(new errorHandler(200,'Error getting the todo!'))
        else {
            res.status(200).json({'message': 'Fetched records successfully', results: results})
        }
    })
})

module.exports = resultRouter;
