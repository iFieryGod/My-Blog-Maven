const express = require("express");
const favicon = require("express-favicon");
let app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const flash = require('express-flash-messages');
require('./passport-init');

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('express-session')({
  secret: 'keyboard cat', resave: false, saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.get("/", function (req, res) {
  req.flash('notify', 'This is a test notification.');
  res.render("index", { title: "Home"});
});

const authRouter = require('./auth');
app.use(authRouter);

const deleteRouter = require("./delete");
app.use(deleteRouter);

const readRouter = require("./read");
app.use(readRouter);

const createRouter = require("./create");
app.use(createRouter);

const updateRouter = require("./update");
app.use(updateRouter);

app.get("/blog-post", function (req, res) {
  res.render("blog-post", { title: "Blog"})
});

const signUpRouter = require("./sign-up");
app.use(signUpRouter);

app.get("/profiles", function (req, res) {
  res.render("profiles", { title: "Profile"})
});

app.get("/settings", function (req, res) {
  res.render("settings", { title: "Settings"})
});

app.listen(3000, function () {
  console.log("Blog is listening on port 3000!")
});