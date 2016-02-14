/* global require */
/* global process */

var fs  = require('fs'),
    http = require('http');

doIt();

function doIt() {
    "use strict";

    var portNum      = process.argv[2],
        responseFile = process.argv[3],
        server       = http.createServer(function (req, resp) {
            var readStream = fs.createReadStream(responseFile);
            readStream.pipe(resp);
        });

    server.listen(portNum);
}