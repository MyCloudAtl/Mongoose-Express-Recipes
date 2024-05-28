const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Recipe = new Schema (
    {
        cuisine: {type: Schema.Types.ObjectId, ref: 'cuisine_id'},
        prepTime: {type: Number, required: true},
        ingredients: {type: String, required: true},
        directions: {type: Schema.Types.ObjectId, ref: 'direction_id'}
    },
    {timestamps: true}
)

module.exports = mongoose.model('recipes', Recipe)
//cuisine parent of recipes which is parent of directions