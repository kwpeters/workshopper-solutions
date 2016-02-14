var q       = require('q'),
    dfd     = q.defer(),
    promise = dfd.promise;

promise.then(onResolve, onReject);

setTimeout(function () {
    dfd.reject({message: 'REJECTED!'});
}, 300);


function onResolve() {
    // Intentionally empty
}

function onReject(error) {
    console.log(error.message);
}


