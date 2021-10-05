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
		
		
		db.collection('Products2', function (err, collection) {
            collection.insertOne({ id: 1, Product: 'Laptop', Category: 'Electronic' });
            collection.insertOne({ id: 2, Product: 'T-shirt', Category: 'Garments' });
            collection.insertOne({ id: 3, Product: 'Charger', Category: 'Accessories' });
            collection.insertOne({ id: 4, Product: 'headphones', Category: 'Accessories' });
        
            // Sort the result alphabetically by name
            var mysort = { Product: 1 };
            //var mysort = { Product: -1 };   // descending

            db.collection("Products2").find().sort(mysort).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);

          });
    });
    }
});