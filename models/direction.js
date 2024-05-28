const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Direction = new Schema (
    {
        directions: {type: String, required: true}
    }
)