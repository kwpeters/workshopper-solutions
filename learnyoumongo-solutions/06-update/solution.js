var mongo     = require("mongodb").MongoClient,
    //url       = "mongodb://localhost:27017/learnyoumongo",
    dbName    = process.argv[2],
    url       = "mongodb://localhost:27017/" + dbName ;

function main() {
    mongo.connect(url, function (err, db) {

        var collection;

        if (err) { throw err; }

        collection = db.collection("users");

        collection.update(
            { username: "tinatime" },
            { $set:     {age: 40}},
            function (err) {
                if (err) { throw err; }
                db.close();
            }
        );

    });
}

main();