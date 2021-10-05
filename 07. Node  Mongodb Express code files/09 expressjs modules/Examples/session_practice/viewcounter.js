const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.use(cookieParser());
let cookie_secret = "This is a secret key string to encrpyt the session cookie";
app.use(session({
    secret: cookie_secret,
    resave: true,
    saveUninitialized: true
}));
// about resave and saveUninitialized options 
// https://stackoverflow.com/questions/28839532/


// about   secret: cookie_secret   parameter 
// It's used to encrypt the session cookie so that 
// you can be reasonably (but not 100%) sure 
// the cookie isn't a fake one, 
// and the connection should be treated 
// as part of the larger session with express. 

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(3000, ()=> console.log("server started at port 3000"));