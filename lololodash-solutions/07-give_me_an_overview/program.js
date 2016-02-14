// include the Lo-Dash library
var _ = require("lodash");

var worker = function (orders) {

    return _.chain(orders)
        .reduce(
            function (acc, value) {
                if (!acc[value.article]) {
                    acc[value.article] = 0;
                }

                acc[value.article] += value.quantity;
                return acc;
            },
            {}
        )
        .reduce(
            function (acc, value, key) {
                acc.push({article: parseInt(key), total_orders: value});
                return acc;
            },
            []
        )
        .sortBy("total_orders")
        .reverse()
        .value();


};

// export the worker function as a nodejs module
module.exports = worker;
