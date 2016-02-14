var http         = require('http'),
    concatstream = require('concat-stream');

doit();


function doit() {
    var numUrls      = process.argv.length - 2,
        urls         = process.argv.slice(2),
        urlInfos,
        numCompleted = 0;

    urlInfos = urls.map(function (curUrl, index, array) {
        return {
            url: curUrl
        };
    });

    urlInfos.forEach(function (curUrlInfo) {
        retrieveUrl(curUrlInfo, retrieveDone);
    });

    function retrieveDone(err, text) {
        numCompleted += 1;

        if (numCompleted === numUrls) {
            urlInfos.forEach(function (curUrlInfo) {
                console.log(curUrlInfo.result);
            });
        }
    }
}


function retrieveUrl(urlInfo, cb) {
    http.get(urlInfo.url, function (responseStream) {
        var concatStream = concatstream(responseReceived);
        responseStream.pipe(concatStream);;

        function responseReceived(wholeResponseBuf) {
            var text = wholeResponseBuf.toString();
            urlInfo.result = text;
            cb(null, text);
        }
    });
}
