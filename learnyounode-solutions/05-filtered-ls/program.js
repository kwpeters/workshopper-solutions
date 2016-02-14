var fs = require('fs'),
    path = require('path');


doit();


function doit() {
    var dirPath = process.argv[2],
        extFilter = process.argv[3];

    fs.readdir(dirPath, function (err, files) {
        var matches = files.filter(function (curFile /*, index, array */) {
            return path.extname(curFile) === ('.' + extFilter);
        });

        console.log(matches.join('\n'));
    });

}
