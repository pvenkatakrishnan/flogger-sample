module.exports = function() {
    return function middleware2(req, res, next) {

        req.logger.info('Setting profile info', 'middleware');
        req.profile= {
            name: 'Jane Doe',
            age: 25,
            locale: 'Fr_fr',
            'profileId': 'ID-123'
        };
        next();
    };
};