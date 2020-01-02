const mongoose = require('mongoose');
const express = require('express')
const resultRouter = express.Router()
const resultModel = require('../models/result')
const errorHandler = require('../modules/errorHandler')

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
