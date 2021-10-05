const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.get('/:name', (req, res) => {
    let name = req.params.name;

    res.json({
        message: `Hello ${name}`
    });
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});