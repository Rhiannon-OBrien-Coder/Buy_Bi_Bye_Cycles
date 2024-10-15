const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        adress: { type: String, required: true },
        email: {type: String, required: true},
        phoneNumber: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', userSchema)