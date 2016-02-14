function duckCount() {

    var args = Array.prototype.slice.call(arguments);

    return args
        .filter(
            function (curArg) {
                return Object.prototype.hasOwnProperty.call(curArg, 'quack');
            }
        )
        .length;
}

module.exports = duckCount;