const mongoose = require('mongoose')
const BikeSchema = require('./bikeController')
const UserSchema = require('./userController')


const Bikes = mongoose.model('Bikes', BikeSchema)
const Users = mongoose.model(`Users`, UserSchema)

module.exports = {
    Bikes,
    Users
}
