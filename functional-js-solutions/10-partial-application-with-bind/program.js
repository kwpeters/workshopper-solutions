function namespaceLogger(namespace) {
    return console.log.bind(null, namespace);
}

module.exports = namespaceLogger;