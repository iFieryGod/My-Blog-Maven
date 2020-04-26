const express = require("express");
const favicon = require("express-favicon");
let app = express();
const bodyParser = require("body-parser");


app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index", { title: "Home"})
});

const readRouter = require("./read");
app.use(readRouter);

const createRouter = require("./create");
app.use(createRouter);

const deleteRouter = require("./delete");
app.use(deleteRouter);

const updateRouter = require("./update");
app.use(updateRouter);

app.get("/blog-post", function (req, res) {
  res.render("blog-post", { title: "Blog"})
});

app.get("/sign-up", function (req, res) {
  res.render("sign-up", { title: "YUM"})
});

app.get("/dashboard", function (req, res) {
  res.render("dashboard", { title: "Dashboard"})
});

app.get("/profiles", function (req, res) {
  res.render("profiles", { title: "Profile"})
});

app.get("/settings", function (req, res) {
  res.render("settings", { title: "Settings"})
});

app.listen(3000, function () {
  console.log("Blog is listening on port 3000!")
});