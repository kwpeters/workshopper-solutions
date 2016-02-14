var mongo     = require("mongodb").MongoClient,
    url       = "mongodb://localhost:27017/learnyoumongo",
    firstName = process.argv[2],
    lastName  = process.argv[3];

function main(firstName, lastName) {
    mongo.connect(url, function (err, db) {

        var collection,
            newDoc = {firstName: firstName, lastName: lastName};

        if (err) { throw err; }

        collection = db.collection("docs");
        console.log(JSON.stringify(newDoc));

        collection.insert(
            newDoc,
            function (err, data) {
                if (err) { throw err; }

                db.close();
            }
        );
    });
}

main(firstName, lastName);