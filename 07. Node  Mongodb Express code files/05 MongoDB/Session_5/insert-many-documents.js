// inserting many records at a time 

// load the MongoClient
var mongoClient = require('mongodb').MongoClient;

// Connect to the db
var dbUrl = "mongodb://localhost:27017";
const client = new mongoClient(dbUrl, { useUnifiedTopology: true });

client.connect( (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
		var db = client.db('ecommerce');
		console.log("Database selected!");

		db.collection('customers', function (err, collection) {
		
		// A document in MongoDB is the same as a record in MySQL
		// creating a array of JSON objects
        // consider each JSON object as a document
        var myobj = [
		{ name: "Manav", address: "Indore", cartValue: 654 },
		{ name: "Ankita", address: "Nagpur", cartValue: 1759 },
		{ name: "Abhishek", address: "Delhi", cartValue: 1400 }
		];
        
		collection.insertMany(myobj, function(err, res) {
		if (err) throw err;
				console.log("Number of documents inserted: " + res.insertedCount);
});
});
}
});