const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

<<<<<<< HEAD
const BikeSchema = new Schema(
=======
const bikeSchema = new Schema(
>>>>>>> ebe8fe8d880cf3bc295fa7fb878575776ba489df
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        type:{type: String, required: true},
        brand:{type: String, required: true},
        description: { type: String, required: true },
        image: {type: String, required: true}
    },
    
    { timestamps: true },
)

module.exports = mongoose.model('bikes', bikeSchema)