const express = require('express');
let users = require("./data/users.json");
const uuid = require("uuid");

const router = express.Router();
module.exports = router;

router.get("/sign-up", function (req, res) {
  res.render("sign-up", { title: "YUM"})
});

router.post("/sign-up", function(req, res) {
  let user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress,
    password: req.body.password,
    id: uuid.v4()
  }
  users.push(user);
  console.log(user)
  
  res.redirect("/")
})