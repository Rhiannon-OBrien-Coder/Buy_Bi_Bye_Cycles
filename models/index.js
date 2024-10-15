const mongoose = require('mongoose')
const BikeSchema = require('./bike')
const UserSchema = require('./user')


const Bikes = mongoose.model('Bikes', BikeSchema)
const Users = mongoose.model('Users', UserSchema)

module.exports = {
    Bikes,
    Users
}
