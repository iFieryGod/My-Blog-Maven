const express = require("express");
let categories = require("./data/categories.json");
let posts = require("./data/posts.json");
let users = require("./data/users.json");

const router = express.Router();
module.exports = router;
// Posts
router.get("/post", function (req, res) {
  res.render("post", { 
    title: "Post",
    posts: posts 
  });
});
// Categories
router.get("/categories", function (req, res) {

  res.render("categories", { 
    title: "Categories",
    categories: categories
  });
});
// Users
router.get("/users", function (req, res) {
  res.render("users", { 
    title: "Users",
    users: users
  });
});