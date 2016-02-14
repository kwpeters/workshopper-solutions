// include the Lo-Dash library
var _ = require("lodash");

var worker = function(cityTemps) {

    var result = _.reduce(
        cityTemps,
        function (accumulator, temps, cityName, coll) {
            if (_.every(temps, above19)) {
                accumulator.hot.push(cityName);
            } else if (_.some(temps, above19)) {
                accumulator.warm.push(cityName);
            }
            return accumulator;

            function above19(temp) {return temp > 19;}
        },
        {hot: [], warm: []}
    );

    return result;
};

// export the worker function as a nodejs module
module.exports = worker;