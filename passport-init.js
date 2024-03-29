const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
let users = require("./data/users.json");
const _ = require("lodash");

passport.use(new LocalStrategy(function (username, password, done) {
  let user = _.find(users, u => u.firstName === username)

  if(!user || user.password !== password){
    done(null, false);
    return;
  }

  done(null, user)
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});