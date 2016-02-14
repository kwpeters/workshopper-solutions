var mongo          = require("mongodb").MongoClient,
    dbName         = process.argv[2],
    collectionName = process.argv[3],
    docId          = process.argv[4],
    url            = "mongodb://localhost:27017/" + dbName;


mongo.connect(url, function (err, db) {

    var collection;

    if (err) { throw err; }

    collection = db.collection(collectionName);

    collection.remove(
        {_id: docId},
        function (err) {
            if (err) { throw err; }
            db.close();
        }
    );
});


