var express = require('express');
var app = express();

app.get('/', function(req, res){
    //Create an error and pass it to the next function
    res.send("this site is under development .. come back after few days.")
 });

// any other route the user tries !!!  we will throw an error 
app.get('*', function(req, res){
   //Create an error and pass it to the next function
   var err = new Error();
   next(err);
});

/*
 * other route handlers and middleware here
 * ....
 */

//An error handling middleware
app.use(function(err, req, res, next) {
   res.status(500);
   res.send("500: No page found. Web site under development")
});

app.listen(3000, () => console.log("server started at port 3000") );


// About HTTP Error codes
// The HyperText Transfer Protocol (HTTP) 500 
// Internal Server Error server error 
// response code indicates that the server encountered 
// an unexpected condition that prevented it 
// from fulfilling the request.

// complete list of HTTP status codes 
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status