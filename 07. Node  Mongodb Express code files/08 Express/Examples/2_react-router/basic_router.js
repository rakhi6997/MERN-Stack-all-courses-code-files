//basic_router.js
const express = require('express'),
      router = express.Router();

//making use of normal routes
router.get('/removefromcart',(request,response)=>{
  response.send('Some Code here to delete product from cart collection in MongoDB');
});

router.get('/addtocart',(request,response)=>{
  response.send('Some Code here to add product to cart collection in MongoDB');
});

//exporting the router to other modules
module.exports = router;


/* 
We’re basically creating another instance of Express. 
This time, we’re calling the Router() function of Express. 
It’s possible to directly call express() as a function (as in our server.js) 
and call express.Router() also. 
This is because Express is exported as a function, 
and in JavaScript, functions are objects too.

We add routes to it as a normal Express app. 
But we don’t bind it to any port. 
The router object contains all the routes we’ve defined, 
so we export only that object so other parts 
of our program can make use of it too.
*/