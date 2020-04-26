const express = require("express");
let categories = require("./data/categories.json");
let posts = require("./data/posts.json");
let users = require("./data/users.json");

const router = express.Router();
module.exports = router;
// posts
router.get("/post/delete/:id", function (req, res) {
  let postId = req.params.id;

  posts = posts.filter(p => p.id !== postId);

  res.redirect(req.baseUrl + '/post');
});
// categories
router.get("/categories/delete/:id", function (req, res) {
  let categoryId = req.params.id;

  categories = categories.filter(c => c.id !== categoryId);

  res.redirect(req.baseUrl + '/categories');
});
// Users
router.get("/users/delete/:id", function (req, res) {
  let userId = req.params.id;

  users = users.filter(u => u.id !== userId);

  res.redirect(req.baseUrl + '/users');
});