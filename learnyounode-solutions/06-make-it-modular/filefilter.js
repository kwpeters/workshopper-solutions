var fs = require('fs'),
    path = require('path');


module.exports = fileFilter;


function fileFilter(dirPath, extension, cb) {
    fs.readdir(dirPath, function (err, files) {

        if (err) {
            cb(err);
            return;
        }

        var matches = files.filter(function (curFile) {
            return path.extname(curFile) === ('.' + extension);
        });

        cb(null, matches);

    });
}
