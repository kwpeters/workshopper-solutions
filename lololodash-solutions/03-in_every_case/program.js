// include the Lo-Dash library
var _ = require("lodash");

var worker = function(cities) {
    return _.forEach(cities, function (curCityData, index, coll) {
        var str = "big";
        if (curCityData.population < 0.5) {
            str = "small";
        } else if (curCityData.population < 1) {
            str = "med";
        }

        curCityData.size = str;
    });
};

// export the worker function as a nodejs module
module.exports = worker;