var slice = Array.prototype.slice;

function spy(target, method) {

    var origMethod = target[method],
        retVal = {count: 0};

    target[method] = function () {
        retVal.count++;
        return origMethod.apply(target, slice.call(arguments));
    };

    return retVal;
}

module.exports = spy;
