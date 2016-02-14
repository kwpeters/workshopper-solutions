// include the Lo-Dash library
var _ = require("lodash");

var worker = function (freelancers) {

    var totalInfo = _.chain(freelancers)
        .reduce(
            function (acc, val) {
                acc.total += val.income;
                acc.num += 1;
                return acc;
            },
            {total: 0, num: 0}
        )
        .value();

    var avgIncome = totalInfo.total / totalInfo.num;

    var results = _.chain(freelancers)
        .reduce(
            function (acc, curFreelancer) {
                if (curFreelancer.income <= avgIncome) {
                    acc.underperform.push(curFreelancer);
                } else {
                    acc.overperform.push(curFreelancer);
                }
                return acc;
            },
            {
                average: avgIncome,
                underperform: [],
                overperform: []
            }
        )
        .value();

    results.underperform = _.sortBy(results.underperform, "income");
    results.overperform = _.sortBy(results.overperform, "income");

    return results;
};

// export the worker function as a nodejs module
module.exports = worker;
