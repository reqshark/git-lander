var log = console.log.bind(console),
    err = console.error.bind(console);

module.exports = {
    log: log,
    err: err,

    getConfigDir: function() {
        return process.cwd();
    },

    getCurrentDir: function() {
        return process.cwd();
    },

    exitLog: function(message, code) {
        if (code === 0) {
            log(message);
        } else {
            err(message);
        }

        process.exit(code);
    },

    handleCbErrors: function(err) {
        if (err) {
            module.exports.exitLog(err, 1);
        }
    },

    YESNO_REGEX: /y[es]*|n[o]?/i,
    YES_REGEX: /y[es]*/i
};