var flogger = require('flogger');
module.exports = function(config, appConfig) {
    return function loggerSetup(req, res, next) {
        function beforeLog(data, finish) {
            data.uniqueId = req.uniqueId;
            finish(data);
        }
        req.logger = flogger(config.logging, appConfig).create(beforeLog);
        next();
    };
};