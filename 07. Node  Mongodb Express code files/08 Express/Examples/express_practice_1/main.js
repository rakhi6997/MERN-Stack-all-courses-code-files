var express = require('express');
var app = express();

// According to session 5 , hands on 1 
// step 1 : code a middleware route to handle get request. 
// for get request --> http://localhost:3000/999
// we should see the following response 
// The id you specified is 999 
app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});


// step 2 : code a middleware route to handle get request. 
// for get request --> http://localhost:3000/mern_stack/12
// we should see the following response 
// id: 12 and enrolled in : mern_stack
app.get('/courses/:coursename/:enrollmentid', function(req, res) {
    res.send('id: ' + req.params.enrollmentid + ' enrolled in : ' + req.params.coursename);
 });


// step 3 : code a middleware route to handle following get request. 
// for get request --> http://localhost:3000/12345
// we should see the following response 
// id: 12345
app.get('/courses/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
 });

// step 4 : for all other invalid URL's 
// show a message on the browser as 
// Sorry, this is an invalid URL.
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});

app.listen(3000, ()=>console.log('Express server started at port 3000'));

