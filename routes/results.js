const mongoose = require('mongoose');
const express = require('express')
const resultRouter = express.Router()
const resultModel = require('../models/result')
const errorHandler = require('../modules/errorHandler')

//  Route  -  GET /api/results/all
resultRouter.get('/all', function(req, res, next) {
    let limit = parseInt(req.query.limit) || null
    let page = parseInt(req.query.page) || 1
    let query = {
        skip: limit * (page - 1),
        limit: limit
    }
    resultModel.aggregate([
        {
          $facet: {
            'results': [{ $match: {} }],
            'length': [{$count: 'count' }]
          }
        }
    ], (err, results) => {
        if(err) 
            next(new errorHandler(400,'Error getting the results!'))
        else {
            res.status(200).json({'message': 'Fetched records successfully', results: results[0].results, currentPage: page, length: results[0].length[0].count, limit: limit})
        }
    })
})

module.exports = resultRouter;
