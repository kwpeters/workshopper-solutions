var http         = require('http'),
    concatstream = require('concat-stream');

doit();


function doit() {
    var url = process.argv[2];

    http.get(url, function (responseStream) {

        var concatStream = concatstream(responseReceived);
        responseStream.pipe(concatStream);;

        function responseReceived(wholeResponseBuf) {
            var text = wholeResponseBuf.toString();
            console.log(text.length);
            console.log(text);
        }
    });
}
