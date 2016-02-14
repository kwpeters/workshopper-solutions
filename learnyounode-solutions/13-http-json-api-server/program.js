/* global require */
/* global process */
/* global console */
/* global Date */

var http = require('http'),
    url  = require('url');

doIt();

function doIt() {
    "use strict";

    var portNum = process.argv[2],
        server  = http.createServer(handleRequest);
    server.listen(portNum);
}

function handleRequest(req, resp) {
    "use strict";
    var urlInfo,
        reqDate,
        respObj;

    if (req.method !== 'GET') {
        return resp.end('Only GET requests are accepted.\n');
    }

    urlInfo = url.parse(req.url, true);
    reqDate = new Date(urlInfo.query.iso);


    if (urlInfo.pathname === '/api/parsetime') {
        respObj = {
            hour:   reqDate.getHours(),
            minute: reqDate.getMinutes(),
            second: reqDate.getSeconds()
        };
    }
    else if (urlInfo.pathname === '/api/unixtime') {
        respObj = {
            unixtime: reqDate.getTime()
        };
    }

    if (respObj)
    {
        resp.writeHead(200, {'Content-Type': 'application/json'});
        resp.end(JSON.stringify(respObj));
    }
    else
    {
        resp.writeHead(404);
        resp.end();
    }
}