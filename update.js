const express = require("express");
let categories = require("./data/categories.json");
let posts = require("./data/posts.json");
let users = require("./data/users.json");
const _ = require("lodash");

const router = express.Router();
module.exports = router;

// Posts
router.get("/post/edit/:id", function (req, res) {
  let postId = req.params.id;
  let post = _.find(posts, p => p.id === postId);
  if(!post) {
    res.sendStatus(404);
    return; 
  }
 
  res.render('details', { post });
});

router.post("/post/edit/:id", function (req, res) {
  let postId = req.params.id;
  let post = _.find(posts, p => p.id === postId);
  if(!post) {
    res.sendStatus(404);
    return; 
  }

  post.title = req.body.title;
  
  res.redirect("/post");
});

// Categories
router.get("/categories/edit/:id", function (req, res) {
  let categoryId = req.params.id;
  let category = _.find(categories, c => c.id === categoryId);
  if(!category) {
    res.sendStatus(404);
    return; 
  }
  res.render('editCategory', { category });
});

router.post("/categories/edit/:id", function (req, res) {
  let categoryId = req.params.id;
  let category = _.find(categories, c => c.id === categoryId);
  if(!category) {
    res.sendStatus(404);
    return; 
  }

  category.room = req.body.room;
  
  res.redirect("/categories"); 
});

// Users
router.get("/users/edit/:id", function (req, res) {
  let userId = req.params.id;
  let user = _.find(users, u => u.id === userId);
  if(!user) {
    res.sendStatus(404);
    return; 
  }
 
  res.render('editUser', { user });
});

router.post("/users/edit/:id", function (req, res) {
  let userId = req.params.id;
  let user = _.find(users, u => u.id === userId);
  if(!user) {
    res.sendStatus(404);
    return; 
  }

  user.firstName = req.body.name;
  user.lastName = req.body.lastName;
  user.password = req.body.password;
  user.emailAddress = req.body.email;
  
  res.redirect("/users");
});