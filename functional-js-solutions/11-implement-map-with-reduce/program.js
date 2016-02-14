function myMap(arr, op) {

    return arr.reduce(function (accumulator, curValue) {
        accumulator.push(op(curValue));
        return accumulator;
    }, []);

}

module.exports = myMap;
