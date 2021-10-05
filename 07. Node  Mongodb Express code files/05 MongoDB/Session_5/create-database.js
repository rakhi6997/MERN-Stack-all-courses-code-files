// first do :
// npm init

// In order to access MongoDB database, we need to install MongoDB drivers. 
// To install native mongodb drivers using NPM, from SuvenNodeApps folder. 
// npm install mongodb --S
// This will add mongodb folder inside node_modules folder
// and some more files as well.


// load the MongoClient
var mongoClient = require('mongodb').MongoClient;

// Connect to the db
var dbUrl = "mongodb://localhost:27017/ecommerce";
const client = new mongoClient(dbUrl, { useUnifiedTopology: true });

client.connect( (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
		console.log("Database created!");
		db.close();
	}
});

// Important: In MongoDB, a database is not created until it gets content!
// MongoDB waits until you have created a collection (table), 
// with at least one document (record) before it actually 
// creates the database (and collection).

// ---------------------------------------------------------------------------
// open Compass and check.  U won't see any DATABSE yet , as no content in it.
