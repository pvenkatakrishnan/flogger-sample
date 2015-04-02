'use strict';
var pine = require('pine');

var barLogger = function bar(config, appSpec, levels) {
    var pineConfig = {
            levels: levels,
            transports: config.transports
        },
        logger = pine('bar', pineConfig);

    return {
        log: function(label, level, info) {
            var msg = label + ":";

            msg += (typeof info === 'string') ? info : JSON.stringify(info);
            logger[level](msg);
        }
    };
};

module.exports = barLogger;