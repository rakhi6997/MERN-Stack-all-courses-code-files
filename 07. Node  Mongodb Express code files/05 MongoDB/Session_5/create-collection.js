var mongoClient = require('mongodb').MongoClient;

// Connects to the db ecommerce
var dbUrl = "mongodb://localhost:27017";
const client = new mongoClient(dbUrl, { useUnifiedTopology: true });

client.connect( (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
		var db = client.db('ecommerce');
		console.log("Database Created!");

		db.collection('customers1', function (err, collection) {
		// A collection in MongoDB is the same as a table in MySQL
		// A document in MongoDB is the same as a record in MySQL
		var myobj = { name: "Simran", address: "Mumbai", cartValue: 500 };
		collection.insertOne(myobj, function(err, res) {
		if (err) throw err;
				console.log("1 document inserted");
});
});
}
});
