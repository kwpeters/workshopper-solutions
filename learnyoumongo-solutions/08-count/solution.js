var mongo          = require("mongodb").MongoClient,
    dbName         = "learnyoumongo",
    minAge         = parseInt(process.argv[2], 10),
    url            = "mongodb://localhost:27017/" + dbName;

mongo.connect(url, function (err, db) {

    var collection;

    if (err) { throw err; }

    collection = db.collection("parrots");

    collection.count(
        {age: {$gt: minAge}},
        function (err, count) {
            if (err) { throw err; }
            
            console.log(count);
            db.close();
        }
    );
});