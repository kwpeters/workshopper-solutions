/* global require */
/* global process */

var http = require('http'),
    map = require('through2-map');

doIt();

function doIt() {
    "use strict";

    var portNum = process.argv[2],
    server = http.createServer(function (req, resp) {

        if (req.method !== 'POST') {
            return resp.end('Only POST requests are accepted.\n');
        }

        req
        .pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        }))
        .pipe(resp);
    });

    server.listen(portNum);
}