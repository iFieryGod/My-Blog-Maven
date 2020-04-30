const express = require("express");
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

// Users
router.get("/users", function (req, res) {
  res.render("users", { 
    title: "Users",
    users: users
  });
});