function loadUsers(userIds, load, done) {
    var numCompleted = 0,
        total = userIds.length,
        users = [];

    userIds.forEach(function (curUserId, index) {

        var completionCallback = function (user) {
            users[index] = user;
            numCompleted++;

            if (numCompleted === total) {
                done(users);
            }
        };

        load(curUserId, completionCallback);
    });
}

module.exports = loadUsers