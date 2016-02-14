function myLog(namespace) {
    return function() {
        var args = Array.prototype.slice.call(arguments);
        console.log.apply(null, [].concat(namespace).concat(args));
    };
}

module.exports = myLog;