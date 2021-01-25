const isAuthenticated = require("../config/middleware/isAuthenticated");
const express = require("express");
const HTMLrouter = express.Router();

// route that when hit will render login page and serve to front end
HTMLrouter.get("/", (req, res) => {
  res.render("login");
});

// route that when hit will render signup page and serve it to front end
HTMLrouter.get("/signup", (req, res) => {
  res.render("signup");
});

// route that when hit will verify that req.user exists proving authentication occured
// then will render dashboard page with user info and serve it to front end
HTMLrouter.get("/dashboard", isAuthenticated, (req, res) => {
  res.render("dashboard", req.user);
});

module.exports = HTMLrouter;
