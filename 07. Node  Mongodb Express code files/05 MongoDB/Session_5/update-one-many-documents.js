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
		
//make a new collection of Products -> insert 4 records 
	db.collection('Products', function (err, collection) {
        collection.insertOne({ id: 1, Product: 'Laptop', Category: 'Electronic' });
        collection.insertOne({ id: 2, Product: 'T-shirt', Category: 'Garments' });
        collection.insertOne({ id: 3, Product: 'Charger', Category: 'Accessories' });
        collection.insertOne({ id: 4, Product: 'headphones', Category: 'Accessories' });
    });

// count the records 
    db.collection('Products', function (err, collection) {
        collection.countDocuments(function (err, count) {
            if (err) throw err;
            console.log('Total Rows: ' + count);
    });
});    

		
// update one row
    db.collection('Products', function (err, collection) {
		collection.updateOne({Product: 'Laptop'}, {$set: {Product: 'MacBook'}});
		collection.find({Product : 'MacBook'}).toArray(function(err, items) {
            if(err) throw err; 
			console.log("one row updated.")
            console.log(items);            
        });
    });

// update many rows
    db.collection('Products', function (err, collection) {
        collection.updateMany({Category: 'Accessories'}, {$set: {Category: 'Gadgets'}});
		collection.find({Category : 'Gadgets'} ).toArray(function(err, items) {
            if(err) throw err; 
			console.log("few rows updated.")
            console.log(items);            
        });
});
} // close of else part

});

/*
// Note : As the code blocks run asynchronously, 
// hence we may not get o/p on console as expected

// Solution 1 :  Comment and run codes in part 
// Solution 2 :  async/await now provides a way of coding 
//               in a synchronous style when using asynchronous APIs

// comment above code and try the below one with async/await 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');  // asserting is optional

const url = 'mongodb://localhost:27017';
const dbName = 'ecommerce';

(async function() {
  let client;

  try {
    client = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Insert a single document
    let r = await db.collection('Products').insertOne({ id: 1, Product: 'Laptop', Category: 'Electronic' });
    assert.strictEqual(1, r.insertedCount); // either use assert or if-else

    // Insert multiple documents
    r = await db.collection('Products').insertMany([{ id: 2, Product: 'T-shirt', Category: 'Garments' },
                                                   { id: 3, Product: 'Charger', Category: 'Accessories'},
                                                   { id: 4, Product: 'headphones', Category: 'Accessories'}                                              
                                                ]);
    assert.strictEqual(3, r.insertedCount); // either use assert or if-else

    // Update a single document
    r = await db.collection('Products').updateOne({Product: 'Laptop'}, 
                                                  {$set: {Product: 'MacBook'}});
    

    // Print the updated document
    let docs = await db.collection('Products').find({Product : 'MacBook'}).toArray();
    console.log("one row updated.")
    console.log(docs);            
    

    // update many documents
    r = await db.collection('Products').updateMany({Category: 'Accessories'}, 
                                                   {$set: {Category: 'Gadgets'}});

                                                  
    // Printing the updated documents
    docs = await db.collection('Products').find({Category : 'Gadgets'}).toArray();
    console.log("few rows updated.")
    console.log(docs);            
    

  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();
 
*/