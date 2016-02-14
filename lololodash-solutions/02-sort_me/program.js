// include the Lo-Dash library
var _ = require("lodash");

var worker = function(soldArticles) {
    return _.sortBy(soldArticles, function (article) {
        return -1 * article.quantity;
    });
};

// export the worker function as a nodejs module
module.exports = worker;