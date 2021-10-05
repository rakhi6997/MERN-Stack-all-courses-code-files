// display all records 
// load the MongoClient
var mongoClient = require('mongodb').MongoClient;
// Connect to the db
var dbUrl = "mongodb://localhost:27017";
const client = new mongoClient(dbUrl, { useUnifiedTopology: true });
client.connect( (err, dbUrl) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
		var db = client.db('ecommerce');
		db.collection('customers', function (err, collection) {
			collection.find().toArray(function(err, items) {
				if(err) throw err; 

				console.log(items);            
        });
		});
	}
});