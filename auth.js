const express = require('express');
const passport = require('passport');

const router = express.Router();
module.exports = router;

router.get("/login", function(req, res) {
  res.render("login", { title: 'Login'});
});

router.post("/login", passport.authenticate('local', {
  successRedirect: '/',
  failureFlash: true,
  failureRedirect: '/login',
}));

router.get("/logout", function (req, res) {
  req.logOut();
  res.redirect('/login');
})