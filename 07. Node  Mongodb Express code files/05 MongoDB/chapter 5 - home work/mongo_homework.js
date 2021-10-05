// display a movie record with the highest imdb rating 
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
		var db = client.db('movies');
		db.collection('movieratings', async function (err, collection) {

    // insert few mivie records
            var myobj = [
                { title: 'The Room', imdb: { rating: 3.4, votes: 25673, id: 368226 } },
                { title: 'The Room', imdb: { rating: 3.5, votes: 22565, id: 368227 } },
                { title: 'Titanic', imdb: { rating: 4.5, votes: 495673, id: 368555 } },
                { title: 'Avatar', imdb: { rating: 4.6, votes: 1025673, id: 968200 } },
                { title: 'Spiderman Homecoming', imdb: { rating: 4.3, votes: 525673, id: 778200 } }
                ];
                
                collection.insertMany(myobj, function(err, res) {
                if (err) throw err;
                        console.log("Number of documents inserted: " + res.insertedCount);
        });

			// Query for a movie that has the title 'The Room'
            const query = { title: 'The Room' };
            const options = {
              // sort matched documents in descending order by rating
              sort: { rating: -1 },
              // Include only the `title` and `imdb` fields in the returned document
              projection: { _id: 0, title: 1, imdb: 1 },
            };
            
            const movie = await collection.findOne(query, options);
            // since this method returns the matched document, not a cursor, print it directly
            console.log(movie);          
        });
	
	}
});



