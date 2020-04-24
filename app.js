const express = require("express");
const favicon = require("express-favicon");
let categories = require("./data/categories.json");
let posts = require("./data/posts.json");
const uuid = require("uuid");
let app = express();
const bodyParser = require("body-parser");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index", { title: "Home"})
});

app.get("/blog-post", function (req, res) {
  res.render("blog-post", { title: "Blog"})
});

app.get("/sign-up", function (req, res) {
  res.render("sign-up", { title: "YUM"})
});

app.get("/dashboard", function (req, res) {
  res.render("dashboard", { 
    title: "Dashboard",
    categories: categories 
  });
});

app.get("/post", function (req, res) {
  res.render("post", { 
    title: "Post",
    posts: posts 
  });
});

app.post("/post", function (req, res) {
  let post = {
    title: req.body.title,
    message: req.body.editor1
  }

  posts.push(post);

  res.redirect("/post")
})

app.get("/categories", function (req, res) {

  res.render("categories", { 
    title: "Categories",
    categories: categories
  });
});

app.post("/categories", function (req, res) {
  
  let category = {
    name: req.body.name,
    id: uuid.v4()
  };

  categories.push(category);
  
  res.redirect("/categories")
});

app.get("/users", function (req, res) {
  res.render("users", { title: "Users"})
});

app.get("/profiles", function (req, res) {
  res.render("profiles", { title: "Profile"})
});

app.get("/settings", function (req, res) {
  res.render("settings", { title: "Settings"})
});

app.get("/details", function (req, res) {
  res.render("details", { title: "Details"})
});

app.listen(3000, function () {
  console.log("Blog is listening on port 3000!")
});