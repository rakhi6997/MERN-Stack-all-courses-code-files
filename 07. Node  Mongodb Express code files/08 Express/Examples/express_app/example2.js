const express = require('express')
const app = express()
const port = 3000

 
  app.get('/:name/:age', (request, response)=>{
    response.send(request.params);
 });


  //Binding the server to a port(3000)
app.listen(3000, () => console.log('express server started at port 3000'));