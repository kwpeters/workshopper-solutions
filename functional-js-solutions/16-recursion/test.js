var getDependencies = require('./program'),
    loremIpsum      = {
        "name":         "lorem-ipsum",
        "version":      "0.1.1",
        "dependencies": {
            "optimist":   {
                "version":      "0.3.7",
                "dependencies": {
                    "wordwrap": {
                        "version": "0.0.2"
                    }
                }
            },
            "inflection": {
                "version": "1.2.6"
            }
        }
    };

var deps = getDependencies(loremIpsum);
console.log(deps);