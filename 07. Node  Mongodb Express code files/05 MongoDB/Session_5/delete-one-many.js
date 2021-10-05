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
		
		
		
		db.collection('Products1', function (err, collection) {
        
            collection.insertOne({ id: 1, Product: 'Laptop', Category: 'Electronic' });
            collection.insertOne({ id: 2, Product: 'T-shirt', Category: 'Garments' });
            collection.insertOne({ id: 3, Product: 'Charger', Category: 'Accessories' });
            collection.insertOne({ id: 4, Product: 'headphones', Category: 'Accessories' });
        
        
        collection.countDocuments(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });

		
		// deleting one record 
        // Product: 'headphones'
		collection.deleteOne({Product: 'headphones' }); 
		collection.countDocuments(function (err, countd) {
            if (err) throw err;
			console.log("headphone Record deleted, just now. ");
            console.log('Total Rows after deleting: ' + countd);
        });
		

        // would empty the collection. Hence the collection 
        
        collection.deleteMany(); 
		collection.countDocuments(function (err, countd) {
            if (err) throw err;
			console.log("Records deleted, just now. ");
            console.log('Total Rows after deleting: ' + countd);
        });
	
    });
    }
});
