const mongoose = require('mongoose')

const ResultSchema = mongoose.Schema({
    imageUrl: String,
    text: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Result', ResultSchema)