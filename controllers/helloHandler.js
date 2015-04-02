var activity = require('../services/activity');

module.exports = function hello(req, res, next) {
    var msg = '';

    activity.getAll(req.profile, req.logger, function(err, resp) {
        if(err) {
            req.logger.error('Error while doing activity.getAll', 'business');
            next(err);
            return;
        }
        if (req.profile.locale === 'Fr_fr') {
            req.logger.info('French User login alert', 'business');
            msg += 'Bonjour ';
        } else {
            msg += 'Hello ';
        }
        msg += req.profile.name;

        req.logger.info('Rendering hello.dust for ' + req.url, 'UI');
        res.send( {msg: msg, activites: resp});
    });

};