var fileFilter = require('./filefilter');

fileFilter(process.argv[2], process.argv[3], function (err, matchingFiles) {
    if (err) {
        console.log('An error occurred.');
        return;
    }
    console.log(matchingFiles.join('\n'));
});
