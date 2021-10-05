// We create our main server.js, and add it as a middleware. 
// server side code for 2_react_router example

const express = require('express'),
      app = express();

//requiring the basic_router.js
app.use('/cart', require('./basic_router'));

//routes
app.get('/myorders/prachi',(request,response)=>{
  response.send('Prachi past orders page');
});


app.get('/',(request,response)=>{
  let homepage = "<h1> this is home page of our router project.. WELCOME</h1>" 
				+ "<h3> Try various routes</h3>"
				+ "<ul><li> /cart/addtocart"
				+ "<li> /cart/removetocart"
				+ "<li> /myorders/prachi"
				+ "<li> /products"
				+ "<li> /products/laptop"
				+ "</ul>";
        
  response.send(homepage);
});

app.use('/products', require('./products_route'));

app.listen(3000,()=>console.log('Express server started at port 3000'));
