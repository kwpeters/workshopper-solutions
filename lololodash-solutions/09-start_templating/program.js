// include the Lo-Dash library
var _ = require("lodash");

var worker = function (userInfo) {

    return _.template("Hello <%=user %> (logins: <%= numLogins %>)")({
        user:      userInfo.name,
        numLogins: _.size(userInfo.login)
    });
    
};

// export the worker function as a nodejs module
module.exports = worker;
