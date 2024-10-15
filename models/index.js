const mongoose = require('mongoose')
const bikeSchema = require('./bike')
const userSchema = require('./user')


const Bikes = mongoose.model('Bikes', bikeSchema)
const Users = mongoose.model('Users', userSchema)

module.exports = {
    Bikes,
    Users
}
