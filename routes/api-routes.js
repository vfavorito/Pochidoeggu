const db = require("../models");
const passport = require("../config/passport");

const express = require("express");
const APIrouter = express.Router();

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
APIrouter.post("/api/login", passport.authenticate("local"), (req, res) => {
  //-------------------------------------------------------------step 2 sends the userData to passport.js
  res.json({
    username: req.user.username,
    id: req.user.id,
  });
  //---------------------------------------------step 4 sends a response of the username and id of the account logged in then we go back to login.js
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
APIrouter.get(".api/updatePet", (req, res) => {
  db.Account.findOne({
    where: {
      username: req.requester,
    },
  })
    .then(res.json({ res }))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
module.exports = APIrouter;
