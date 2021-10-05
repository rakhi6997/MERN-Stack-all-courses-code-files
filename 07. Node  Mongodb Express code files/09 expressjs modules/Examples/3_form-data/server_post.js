/*
This code would handle a form request with the POST method. 
*/

//server.js file for POST
const express = require('express'),
      app = express();
      
//You must require the body-parser middleware to access request.body in express
bodyParser = require('body-parser');

//configuring bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setting our port
// app.set('port', process.env.PORT || 3000);

//Get route for localhost:3000
app.get('/',(request,response)=>{
  response.sendFile(__dirname +'/form_post.html');
});

//POST route for form handling
app.post('/',(request,response)=>{
  console.log(request.body);  
  response.send(`${request.body.name} said ${request.body.message}`);
});

app.listen(3000,()=>{
  console.log('Express server started at port 3000');
});


/* 
If you look closely, 
the first different thing we’re doing is requiring and using body-parser. 
Body-parser is a middleware that makes POST data available in our request.body. 
Bear in mind that the request.body won’t work without the body-parser middleware.
*/