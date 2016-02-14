
doit();

function doit() {
    var filePath    = process.argv[2];

        readFile(filePath, function (err, text) {
            console.log(countNewLines(text));
        });
}


function readFile(filePath, cb) {
    var fs   = require('fs'),
        buf  = fs.readFile(filePath, function (err, buf) {
            cb(err, buf.toString());
        });
}


function countNewLines(text) {
    return text.split('\n').length - 1;
}
