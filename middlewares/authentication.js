const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  (email, password, done) => {
    models.User.findOne({
      where: { email },
    }).then((user) => {
      if(!user) {
        return done(null, false);
      }
      console.log(password, user.password);
      if (passwordsMatch(password, user.password) === false) {
        console.log(password);
        console.log('3');
        return done(null, false);

      }


      return done(null, user);
    }).catch(err=>{
      console.log(err);
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  models.User.findById(id).then((user) => {
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;