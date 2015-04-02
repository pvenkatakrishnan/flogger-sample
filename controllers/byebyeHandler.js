module.exports = function byebye(req, res) {

    if (req.profile.locale === 'Fr_fr') {
        res.send('Au Revoir!');
    } else {
        res.send('Bye Bye');
    }
    req.logger.joke('I don\'t use memes', 'UI');
};