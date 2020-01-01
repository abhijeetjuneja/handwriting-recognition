const mongoose = require('mongoose')

//Connect to DB
mongoose.connect('mongodb://localhost/handwriting', { useNewUrlParser: true, useUnifiedTopology: true , 'useCreateIndex': true }).then(
    () => {console.log('Database connection is successful') },
    err => { console.log('Error when connecting to the database'+ err)}
);

//Export mongoose
module.exports = mongoose