function getShortMessages(objects) {
    return objects
        .filter(
            function (curObject) {
                return curObject.message.length < 50;
            }
        )
        .map(
            function (curObject) {
                return curObject.message;
            }
        );
}

module.exports = getShortMessages;