var mongoClient = require('mongodb').MongoClient;
const hands_on_data_Module = require("./hands-on-dataset.js");
var dataset = hands_on_data_Module.hands_on_data;


// Connects to the db ecommerce
var dbUrl = "mongodb://localhost:27017";
const client = new mongoClient(dbUrl, { useUnifiedTopology: true });

client.connect( (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
		var db = client.db('mongo-hands-on');
		console.log("Database Created!");

        // go to backend,  drop the greatcontributors collections
        // run insertMany only once
        /*		
        db.collection('greatcontributors', function (err, collection) {
		
		collection.insertMany(dataset, function(err, res) {
		if (err) throw err;
				console.log("many documents inserted");
        });
        });
        */

        db.collection('greatcontributors', function (err, collection) {
		
            collection.findOneAndDelete(
                { "name.first" : "Martin" }
             )
                // go to backend and check
            });

            db.collection('greatcontributors', function (err, collection) {
		
                collection.findOneAndUpdate(
                    { "name.last" : "Backus" },
                    {$set : { "name.first" : "JOHN"}}
                 )
                    // go to backend and check
                });

}
});

