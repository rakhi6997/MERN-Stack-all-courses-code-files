// This file will serve as
// the core application file, where your application 
// will serve web pages to your users.

// Step  1 : Within this project’s directory in terminal, 
// run npm i http-status-codes -S 
// to save the http-status-codes package 
// as an application dependency.

const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.StatusCodes.OK, {
    "Content-Type": "text/html"
    });

// code the responseMessage in class  

	
	
	
});

app.listen(port);

console.log(`The server has started and is listening on port number: ${port}`);