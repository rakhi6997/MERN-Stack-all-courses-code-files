// api_route.js
// file for our APIs

const express = require('express'),
      router = express.Router();

router.get('/',(request,response)=>{
  response.send('Some Code here to fetch all product categories from product collection in MongoDB');
});


router.get('/laptop',(request,response)=>{
  response.send('Some Code here to fetch only products matching with laptop from product collection in MongoDB');
});

//some other endpoints to submit data
module.exports = router;