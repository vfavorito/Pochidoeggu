const db = require("../models");
const passport = require("../config/passport");

const express = require("express");
const APIrouter = express.Router();

APIrouter.post("/api/signup", (req, res) => {
  console.log(req.body);
  db.Account.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then(() => {
      res.render("login");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
APIrouter.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.render("dashboard");
});

module.exports = APIrouter;
