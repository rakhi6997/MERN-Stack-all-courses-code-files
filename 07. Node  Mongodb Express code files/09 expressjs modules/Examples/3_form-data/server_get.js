/*
Handling form data in Express
The web’s main function is communication. 
Express provides us with tools to understand 
what clients request and how to respond properly.
Express basically has two places to store client data. 
The request.query(for GET requst) and the 
request.body (for POST requests). 
On the client side, it’s ideal to use the POST method 
for form submission because most browsers 
place limits on the length of the query and additional data is lost.
*/


//server.js file
const express = require('express'),
      app = express();

//setting the port 
// app.set('port', process.env.PORT || 3000);

// show the form.html when no i/p is given i.e on form load
app.get('/',(request,response)=>{
  response.sendFile(__dirname +'/form_get.html');
});

app.get('/process',(request,response)=>{
  console.log(request.query);
  response.send(`${request.query.name} said ${request.query.message}`);
});

app.listen(3000 ,()=>{
  console.log('Express server started at port 3000');
});


