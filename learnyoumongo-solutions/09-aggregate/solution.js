var mongo  = require("mongodb").MongoClient,
    dbName = "learnyoumongo",
    size   = process.argv[2],
    url    = "mongodb://localhost:27017/" + dbName;

mongo.connect(url, function (err, db) {

    var collection;

    if (err) { throw err; }

    collection = db.collection("prices");

    collection
        .aggregate(
            [
                {
                    $match: {
                        size: size
                    }
                },
                {
                    $group: {
                        _id:   'average',
                        average: {$avg: '$price'}
                    }
                }
            ]
        )
        .toArray(function (err, results) {
            if (err) { throw err; }

            var avg = Number(results[0].average);
            console.log(avg.toFixed(2));
            db.close();
        });
});