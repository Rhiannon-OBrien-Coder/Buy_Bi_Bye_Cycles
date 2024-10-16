
const  { Schema } = require('mongoose')

const bikeSchema = new Schema(
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

module.exports = bikeSchema