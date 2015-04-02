module.exports = function() {
    return function middleware1(req, res, next) {

        req.uniqueId = 'ID' + Math.floor(Math.random() * 1000);
        next();
    };
};