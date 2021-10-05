let mongoose = require('mongoose');

const server = 'localhost:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'mongoose-mail';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://${server}/${database}` , 
     { useNewUrlParser: true, useUnifiedTopology: true } )
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()

// if these options are not specified 
// { useNewUrlParser: true, useUnifiedTopology: true }
// then we get WARNING messages.

// useNewUrlParser: true allows mongoose to use NewUrlParser
// useUnifiedTopology: true enables new Server Discover and Monitoring engine