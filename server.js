const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

//Import mongoose module
const mongoose = require('./modules/mongoose')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

//Port selection
var port = process.env.PORT || 4000

//Listen on port
app.listen( ()=>{
    console.log('Server started on Port: ' + port);
});





    

