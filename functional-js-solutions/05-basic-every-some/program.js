

function checkUsersValid(validUsers) {

    return function (users) {
        return users.every(function (curUser) {
            return validUsers.some(function (curValidUser) {
                return curValidUser.id === curUser.id;
            });
        });
    };
}

module.exports = checkUsersValid;