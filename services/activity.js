require('../mockservice');
var Wreck = require('wreck');
var Url = require('url');
module.exports = {
    getAll: function(payload, logger, cb) {
        var options = {
                protocol: 'http:',
                hostname: '127.0.0.1',
                port: 8001,
                method: 'get',
                path: '/activities',
                payload: payload
            },
            uri = Url.format({
                protocol: options.protocol,
                hostname: options.hostname,
                port: options.port,
                pathname: options.path
            });


        logger.info('activity_getAll', options, 'services');
        options.payload = JSON.stringify(options.payload);

        Wreck.request(options.method, uri, options, function (error, response) {
            if (error) {
                logger.error(error, 'services');
                cb(error);
                return;
            }

            Wreck.read(response, null, function (error, body) {
                var resp;
                if (error) {
                    logger.error(error, 'services');
                    cb(error);
                    return;
                }

                resp = JSON.parse(body);
                logger.info('activity_getAll_resp', resp, 'services');
                cb(null, resp);
            });
        });
    }
};