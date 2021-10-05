const express = require('express')
const cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

// look at the curl request at the end of this code
app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(3000, () => console.log("server listeneing on port 3000"))

// curl command that sends an HTTP request with two cookies
// curl http://127.0.0.1:3000 --cookie "mode=Online;Course=MERN stack"

// About Signed Cookie :
// A Signed Cookie is simply a signature attached to the cookie.
// So the cookie will still be visible to the client, 
// but it has a signature, so the server side code 
// can detect if the client modified the cookie or not.  
// If the signature does not match, then it will give an error.


