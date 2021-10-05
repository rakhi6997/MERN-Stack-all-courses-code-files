var express = require('express')
var cors = require('cors')
var app = express()

// Enable CORS for a Single Route
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route' , id : req.params.id})
})

// CORS not enabled for the request
app.get('/samples/:id', function (req, res, next) {
    res.json({msg: 'CORS-not-enabled for samples Route', id : req.params.id})
  })

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})

// Remember if we are calling the program from our Browser or using curl or Swagger
// then CORS is nor needed, as it is from the same origin

// On SWAGGER OR POSTMAN
// Try http://localhost:3000/products/100 
// Try http://localhost:3000/samples/100 