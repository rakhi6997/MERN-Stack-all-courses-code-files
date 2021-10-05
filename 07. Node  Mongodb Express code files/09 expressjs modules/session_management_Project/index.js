/* 
installation required 

// express.js: Express.js framework used for handling multiple requests.
npm install express --S

//cookie-parser: The cookie-parser module used to parse the incoming cookies.
npm install cookie-parser --S

// express-session: This express-session module used for session management in NodeJS.
npm install express-session --S

// session-file-store: This module helps to create a new file-store for the new session.
npm install session-file-store --S 

*/


// Importing express module
const express = require("express")

// Importing express-session module
const session = require("express-session")

// Importing file-store module
const filestore = require("session-file-store")(session)

const path = require("path")

// Setting up the server
var app = express()

// Creating session
app.use(session({
	name: "session-id",
	secret: "suven123", // Secret key,
	saveUninitialized: false,
	resave: false,
	store: new filestore()
}))

// Asking for the authorization
function auth(req, res, next) {
	// Checking for the session
	console.log(req.session)

	// Checking for the authorization
	// follows the process as stated on 
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
	if (!req.session.user) {
		var authHeader = req.headers.authorization;
		console.log(authHeader);
		var err = new Error("You are not authenticated")
		res.setHeader("WWW-Authenticate", "Basic")
		err.status = 401
		next(err)

		var auth = new Buffer.from(authHeader.split(' ')[1],
			"base64").toString().split(":")

		// Reading username and password
		var username = auth[0]
		var password = auth[1]
		if (username == "rocky" && password == "admin123") {
			req.session.user = "rockysuven"
			next()
		}
		else {
			// Retry incase of incorrect credentials
			var err = new Error('You are not authenticated!');
			res.setHeader("WWW-Authenticate", "Basic")
			err.status = 401;
			return next(err);
		}
	}
	else {
		if (req.session.user === "rockysuven") {
			next()
		}
		else {
			var err = new Error('You are not authenticated!');
			res.setHeader("WWW-Authenticate", "Basic")
			err.status = 401;
			return next(err);
		}
	}
}

// Middlewares
app.use(auth)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen(3000, () => {
	console.log("Server is Starting")
})


/*

Run index.js file :
node index.js


1. Open browser with http://localhost:3000. 

2. A dialog box will pop up. 

3. Fill in the username and password as you seen in the code above.
( username == "rocky" && password == "admin123" )

4. If the entered username and password are correct then 
   index.html will render on the browser.

5. After filling in the matched password and username 
   a new sessions file is generated in the directory 
   which keeps track of all the successful requests 
   made by the client. 
   Note a session file with the session_id has been created.

*/
