// find() -> display all records 
var mongoClient = require('mongodb').MongoClient;
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
				console.log("o/p of find()");
				console.log(items);
				console.log("---------------------------");
        });
		});
		
		
		// findOne() method returns the first occurrence in the selection.
		db.collection('customers', function (err, collection) {
			collection.findOne({}, function(err, Oneitem) {
				if(err) throw err; 
				console.log("o/p of findOne()");
				console.log(Oneitem.name);
				console.log("---------------------------");
        });
		});
		
		
		// find() method fetching few columns.
		// _id: 0 supresses the field
        // not specifying the field also drops it.
		db.collection('customers', function (err, collection) {
			collection.find( {}, { projection: { _id: 0, name: 1, address: 1 }}).toArray(function(err, items) {
				if(err) throw err; 
				console.log("o/p of find() with some columns");
				console.log(items);
				console.log("---------------------------");
        });
		});
		
		
		// find() method fetching few rows according to simple Regex.
		// _id: 0 supresses the field
		db.collection('customers', function (err, collection) {
			collection.find( {name : /[A-Za-z]+n$/}, { projection: { _id: 0}}).toArray(function(err, items) {
				if(err) throw err; 
				console.log("o/p of find() with matching rows acc. to Regex");
				console.log(items);
				console.log("---------------------------");
        });
		});
		

        db.collection('customers', function (err, collection) {
			collection.find( {cartValue : {$gt : 1000}}, { projection: { _id: 0}}).toArray(function(err, items) {
				if(err) throw err; 
				console.log("o/p of find() having cartValue > 1000");
				console.log(items);
				console.log("---------------------------");
        });
		});

        db.collection('customers', function (err, collection) {
			collection.find( {$and : [{cartValue : {$gt : 1250}}, {cartValue : {$lt : 1550}}]}, { projection: { _id: 0}}).toArray(function(err, items) {
				if(err) throw err; 
				console.log("o/p of find() having cartValue > 1250 and < 1550");
				console.log(items);
				console.log("---------------------------");
        });
		});


	}
});

