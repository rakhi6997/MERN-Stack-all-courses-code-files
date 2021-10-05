const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// step 1 : create a session time-out cookie object
// This cookie without expiry time , would live only upto for appln usage
app.get('/', function(req, res){
   res.cookie('edtech', 'upgrad'); //Sets edtech = upgrad     
   res.cookie('course', 'mern stack', {expire: 360000 + Date.now()});
      
   // to clear a cookie use clearCookie(). specify name of cookie object 
   res.cookie('bymistake', 'will delete this', {maxAge: 360000}); 
   res.clearCookie('bymistake');
   // IMPORTANT : See carefully the first time o/p and then on refresh. 
   res.send('On server console how many cookies do u see 2 or 3 ??'); 
   
   // would see some o/p on server side console
   console.log('Cookies: ', req.cookies);   
});


// Optional step : to check if your cookie is set or not from the browser console. 
// Go to your browser, run on the console, 
// console.log(document.cookie);


app.listen(3000, ()=> console.log("Server listening on port 3000"));
