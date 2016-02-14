var mongo = require("mongodb").MongoClient,
    url = "mongodb://localhost:27017/learnyoumongo",
    arg1 = process.argv[2];

function main(minAge) {
    mongo.connect(url, function (err, db) {

        var coll,
            cur,
            curDoc;

        if (err) {
            console.log(err);
            process.exit(-1);
        }

        parrotCollection = db.collection("parrots");

        cur = parrotCollection
            .find({age: {$gt: minAge}})
            .toArray(function (err, docs) {
                if (err) {
                    console.log(err);
                    process.exit(-1);
                }

                console.log(docs);
                db.close();
            });

    });
}

var minAge = parseInt(arg1, 10);
main(minAge);