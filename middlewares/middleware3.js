module.exports = function() {
    return function middleware3(req, res, next) {
        req.logger.info('Setting permissions', 'middleware');

        req.permissions = {
            'serviceA': ['get', 'update'],
            'serviceB': ['get', 'post'],
            'serviceC': ['blah', 'bloom']
        };
        next();
    };
};