const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Cuisine = new Schema (
    {
        type: {type: String, required: true},
        specialty: {type: String, required: true}
    },
    { timestmaps: true},
)

module.exports = mongoose.model('cusines', Cuisine)