var util = require('util'),
    net = require('net');

doit();

function doit() {
    var port = process.argv[2],
        server = net.createServer(onSocketOpened);
    server.listen(port);
}


function onSocketOpened(socket) {
    var now = new Date(),
        timestamp;

    timestamp = util.format('%s-%s-%s %s:%s',
                            leadingPad(now.getFullYear(),  '0', 4),
                            leadingPad(now.getMonth() + 1, '0', 2),
                            leadingPad(now.getDate(),      '0', 2),
                            leadingPad(now.getHours(),     '0', 2),
                            leadingPad(now.getMinutes(),   '0', 2));
    socket.end(timestamp);
}

function leadingPad(str, pad, len) {
    if (typeof str !== 'string') {
        str = str.toString();
    }

    while (str.length < len) {
        str = pad + str;
    }
    return str;
}
