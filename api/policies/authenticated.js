/**
 * Allow any authenticated user.
 */
module.exports = function (req, res, ok) {
  // User is allowed, proceed to controller
  var isAuth = req.isAuthenticated();
  if (isAuth) return next();
  // User is not allowed
  else return res.redirect('/auth/login');
};
