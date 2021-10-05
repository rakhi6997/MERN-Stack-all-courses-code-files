// load the MongoClient
var mongoClient = require('mongodb').MongoClient;

// Connect to the db
dbUrl = "mongodb://localhost:27017";

const client = new mongoClient(dbUrl, { useUnifiedTopology: true });

client.connect( (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        var db = client.db('ecommerce');
		console.log('Database successfully created or selected!');
		
		// first time uncomment this and make Products3 collection
        
		db.collection('Products3', function (err, collection) {
            collection.insertOne({ id: 1, Product: 'Laptop', Category: 'Electronic' });
            collection.insertOne({ id: 2, Product: 'T-shirt', Category: 'Garments' });
            collection.insertOne({ id: 3, Product: 'Charger', Category: 'Accessories' });
            collection.insertOne({ id: 4, Product: 'headphones', Category: 'Accessories' });
            console.log("Collection Created");
        
            collection.drop(function(err, delOK) {
                if (err) throw err;
                if (delOK) console.log("Collection deleted");
            });
            
        });
    }
});