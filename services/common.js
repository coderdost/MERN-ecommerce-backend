const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTgyNDVkMGQ3ZGU3YzMxMTQ5OWFlZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgzNDk4MDc3fQ.hAh6nIrULH0mOk5RXbu_g_9tGCmsg2gkXgIVw02Dczg"
  return token;
};
