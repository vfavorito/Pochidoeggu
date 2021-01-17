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
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
APIrouter.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json({
    username: req.account.username,
    id: req.account.id,
  });
});

module.exports = APIrouter;
