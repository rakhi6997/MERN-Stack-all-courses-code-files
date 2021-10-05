var express = require('express');
var app = express();

bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit-book-data', function (req, res) {
    var name = req.body.bookName + ' ' + req.body.authorName;
    
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(3000, function () {
    console.log('Node server is running..');
});