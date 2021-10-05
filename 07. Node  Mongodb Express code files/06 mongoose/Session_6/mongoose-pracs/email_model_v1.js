let mongoose = require('mongoose');

let dbConnectionObject = require('./database.js');

let emailSchema = new mongoose.Schema({
  email: String
})

module.exports = mongoose.model('Email', emailSchema)