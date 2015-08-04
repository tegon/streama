var passport = require('passport');

module.exports = {
  login: function (req, res) {
    res.view('auth/login', { flash: {}, hasCookie: false, title: 'Streama - Login' });
  },

  process: function(req, res){
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return res.view('auth/login', { flash: { title: 'Streama - Login', message: 'Invalid Credentials' } });
      }

      req.logIn(user, function(err) {
        if (err) return res.send(err);
        if (req.body.rememberMe) {
          req.session.cookie.maxAge = 1000 * 60 * 3;
        } else {
          req.session.cookie.expires = false;
        }
        return res.view('homepage');
      });
    })(req, res);
  },

  logout: function (req, res){
    req.logout();
    res.send('logout successful');
  }
};
