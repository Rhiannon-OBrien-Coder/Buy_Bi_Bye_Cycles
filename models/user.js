const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

<<<<<<< HEAD
const UserSchema = new Schema(
=======
const userSchema = new Schema(
>>>>>>> ebe8fe8d880cf3bc295fa7fb878575776ba489df
    {
        name: { type: String, required: true },
        adress: { type: String, required: true },
        email: {type: String, required: true},
        phoneNumber: { type: Number, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', userSchema)