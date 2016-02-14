
doit();

function doit() {
    var filePath    = process.argv[2],
        text        = readFile(filePath);
    console.log(countNewLines(text));
}


function readFile(filePath) {
    var fs   = require('fs'),
        buf  = fs.readFileSync(filePath);
    return buf.toString();
}


function countNewLines(text) {
    return text.split('\n').length - 1;
}
