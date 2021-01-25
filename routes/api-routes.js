const db = require("../models");
const passport = require("../config/passport");

const express = require("express");
const APIrouter = express.Router();

// route to create a new account in database
APIrouter.post("/api/signup", (req, res) => {
  db.Account.create({
    username: req.body.username,
    password: req.body.password,
    petname: req.body.petname,
    pet1: req.body.pet1,
    pet2: req.body.pet2,
  })
    .then(() => {
      res.render("login");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
// route to login, authenticates that username and password exists in our accounts model
APIrouter.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json({
    username: req.user.username,
    id: req.user.id,
  });
});
APIrouter.post("/api/updatePet", (req, res) => {
  console.log(req.body);
  db.Account.update(
    {
      mood: req.body.value,
    },
    {
      where: {
        username: req.body.requester,
      },
    }
  ).then((dpUpdate) => {
    res.json(dpUpdate);
  });
});
APIrouter.get("/api/updatePet", (req, res) => {
  console.log(req.body);
  db.Account.findOne({
    where: {
      username: req.body.requester,
    },
  })
    .then((res) => {
      console.log(res);
      res.json(res);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// route that logouts user and turns req.user to false
APIrouter.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = APIrouter;
