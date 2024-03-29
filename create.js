const express = require("express");
let posts = require("./data/posts.json");
let users = require("./data/users.json");
const uuid = require("uuid");

const router = express.Router();
module.exports = router;

// Posts
router.post("/post", function (req, res) {
  let post = {
    title: req.body.title,
    message: req.body.editor1,
    id: uuid.v4()
  }

  posts.push(post);

  res.redirect("/post");
});

// Users
router.post("/users", function (req, res) {
  
  let user = {
    firstName: req.body.name,
    lastName: req.body.lastName,
    password: req.body.password,
    emailAddress: req.body.email,
    id: uuid.v4()
  };

  users.push(user);
  
  res.redirect("/users")
});



