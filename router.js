const Authentication = require('./controllers/authentication');
const List = require('./controllers/list');
const passprotSevice = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    app.get('/', requireAuth, function(req, res) {
        res.send({ hi: 'there' });
    });
    app.get('/list', requireAuth, List.name);
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);

}