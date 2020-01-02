require('dotenv').config({path:'./.env'})

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const results = require('./routes/results')
const images = require('./routes/images')
const morgan = require('morgan')

//Import mongoose module
const mongoose = require('./modules/mongoose')

const app = express()

// Point to frontend
app.use(express.static(path.join(__dirname, '/frontend/dist')))

// log to console
app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(cors())

//Result router
app.use('/api/results/', results)

//Image router
app.use('/api/images/', images)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    if(req.url.split('/')[1] == 'api'){
        var err = new Error('404 Not Found')
        err.status = 404
        next(err)
    }
    else
        next()
})
  
  // error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.json({'message': err.message || 'Error occurred on the Server. Apologies :( '})
})

app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'))
})

const port = process.env.PORT || 4000

// sets port 400 to default or unless otherwise specified in the environment
app.set('port', port)

//Listen on port
app.listen(app.get('port'), ()=>{
    console.log('Server started on Port: ' + port)
})





    

