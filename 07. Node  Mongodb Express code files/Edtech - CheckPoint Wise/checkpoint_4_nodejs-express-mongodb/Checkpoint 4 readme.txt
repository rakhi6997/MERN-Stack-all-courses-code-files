-- Check point 4 --- Reference Chapter 6 ---

1. Define the Schema according to Client requirements. 

>  refer app/models/tutorial.model.js 

>  refer app/models/user.model.js

>  refer app/models/enrollment.model.js

2. Set up the Index file for models folder. 
It would set up mongoose and a database object for all the controller and routes.

> refer app/models/index.js

3. In the server.js , we would later add more code.  For backend programming only below code is needed in server.js.

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit(1);
  });

> refer server.js

Note : The process core module provides a handy method that allows you to programmatically exit from a Node.js program: process.exit(). This means that any callback that's pending, any network request still being sent, any filesystem access, or processes writing to stdout or stderr - all is going to be ungracefully terminated right away.

If this is fine for you, you can pass an integer that signals the operating system the exit code:
process.exit(1)

By default the exit code is 0, which means success.

