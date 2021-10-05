// Simple routing in a web server in main.js

// You set up a mapping of routes 
// to responses called routeResponseMap

const routeResponseMap = {
    // code the routes u wish to handle 
	
	
    };
    const port = 3000,
        http = require("http"),
        httpStatus = require("http-status-codes"),
        app = http.createServer((req, res) => {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
    
            if (routeResponseMap[req.url]) {
                res.end(routeResponseMap[req.url]);
            } 
            else {
                res.end("<h1>Welcome!</h1>");
            }
        });

        app.listen(port);
        console.log(`The server has started and is listening on port number: ${port}`);