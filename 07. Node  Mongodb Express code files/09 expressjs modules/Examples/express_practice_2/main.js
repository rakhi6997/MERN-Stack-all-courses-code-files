express = require('express');
app = express();
bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    //res.sendFile('index.html'); // point of error
    res.sendFile(__dirname +'/index.html');
});

app.post('/submit-candidate-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

app.listen(5000, () => console.log('Node server is running.. this time at 5000'));