function reduce(initItems, func, initAccumulator) {

    return reduceImpl(initItems, initAccumulator, 0);

    function reduceImpl(items, accumulator, curIndex) {
        var head,
            tail;

        if (items.length === 0) {
            return accumulator;
        }

        head = items[0];
        tail = items.slice(1);

        accumulator = func(accumulator, head, curIndex, initItems);

        return reduceImpl(tail, accumulator, curIndex++);
    }
}

module.exports = reduce;