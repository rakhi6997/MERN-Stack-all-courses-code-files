const express = require('express')
const app = express()
const port = 3000

function sayHello(request,response,next){
    console.log('I must be called');
    next();
  }
  
  app.get('/', sayHello, (request, response)=>{
    response.send('SuvenSayHello');
  });


  //Binding the server to a port(3000)
app.listen(3000, () => console.log('express server started at port 3000'));