var http = require('http');

doit();


function doit() {
    var url = process.argv[2];

    http.get(url, function (responseStream) {

        responseStream.setEncoding('utf8');

        responseStream.on('data', console.log);
        responseStream.on('error', console.error);
        responseStream.on('end', function () {});
    });
}
