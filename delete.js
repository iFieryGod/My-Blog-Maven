const express = require("express");
let posts = require("./data/posts.json");
let users = require("./data/users.json");
const _ = require("lodash");

const router = express.Router();
module.exports = router;

router.get("/post", function (req, res) {
  res.render("post", { 
    title: "Post",
    posts: posts 
  });
});
// posts
router.get("/post/delete/:id", function (req, res) {
  let postId = req.params.id;
  
  posts = posts.filter(p => p.id !== postId);

  res.redirect(req.baseUrl + '/post');
});

// Users
router.get("/users", function (req, res) {
  res.render("users", { 
    title: "Users",
    users: users
  });
});
router.get("/users/delete/:id", function (req, res) {
  let userId = req.params.id;

  users = _.find(users, u => u.id === userId)
  users.splice(users.indexOf(users), 1)

  // users = users.filter(u => u.id !== userId);

  res.redirect(req.baseUrl + '/users');
});