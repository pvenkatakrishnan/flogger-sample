module.exports = function() {
    return function middleware3(req, res, next) {
        req.logger.info('Setting permissions', 'middleware');

        req.scopes = {
            'serviceA': ['getStatus', 'updateStatus'],
            'serviceB': ['getActivities', 'postActivity'],
            'serviceC': ['getPokes', 'getLikes', 'getAlbums']
        };
        next();
    };
};