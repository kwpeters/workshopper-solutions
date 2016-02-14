function getDependencies(tree) {

    var deps =  getDependenciesImpl(tree);

    // Remove dupes
    deps = deps.reduce(function (accum, curVal) {
        accum[curVal] = 1;
        return accum;
    }, {});

    return Object.keys(deps).sort();

    function getDependenciesImpl(tree) {
        var deps = [];

        // If this node has any dependencies...
        if (tree && tree.dependencies) {
            // ... iterate over each dependency and ...
            Object.keys(tree.dependencies).forEach(function (curDep) {
                // ... add that dependency ...
                var depName = curDep + '@' + tree.dependencies[curDep].version;
                deps.push(depName);
                // ... and any sub-dependencies.
                deps = deps.concat(getDependenciesImpl(tree.dependencies[curDep]));
            });
        }

        return deps;
    }
}

module.exports = getDependencies;