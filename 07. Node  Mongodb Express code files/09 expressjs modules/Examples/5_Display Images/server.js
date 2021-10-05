var express = require('express');
var app = express();

app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/Images'));

var server = app.listen(5000, function(req,res) { console.log("server started at 5000")});


// test the code for
// http://localhost:5000/image1.png
// http://localhost:5000/images/image4.png