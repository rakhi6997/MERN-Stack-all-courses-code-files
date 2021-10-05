var express = require('express')
var cors = require('cors')
var app = express()

// Enable All CORS Requests
app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'CORS-enabled for all Routes' , id : req.params.id})
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})

// Remember if we are calling the program from our Browser or using curl or Swagger
// then CORS is not needed as the origin is the same.

// On SWAGGER OR POSTMAN
// Try http://localhost:3000/products/100




