// include the Lo-Dash library
var _ = require("lodash");

var worker = function(words) {

    var result = _.chain(words)
        .map(function (curWord) {return curWord + "Chained";})
        .map(function (curWord) {return curWord.toUpperCase()})
        .sortBy()
        .value();

    return result;
};

// export the worker function as a nodejs module
module.exports = worker;