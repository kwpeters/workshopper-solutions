

function countWords(words) {
    return words.reduce(function (accumulator, curWord) {

        if (!accumulator[curWord]) {
            accumulator[curWord] = 0;
        }

        accumulator[curWord] += 1;

        return accumulator;

    }, {});
}

module.exports = countWords;