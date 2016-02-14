// include the Lo-Dash library
var _ = require("lodash");

var worker = function(comments) {

    return _.chain(comments).groupBy("username")
        .reduce(
            function (acc, value, key) {
                acc.push({username: key, comment_count: _.size(value)});
                return acc;
            },
            []
        )
        .sortBy("comment_count")
        .reverse()
        .value();
};

// export the worker function as a nodejs module
module.exports = worker;
