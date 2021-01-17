const isAuthenticated = require("../config/middleware/isAuthenticated");

const express = require("express");
const HTMLrouter = express.Router();

HTMLrouter.get("/", (req, res) => {
  res.render("login");
});
HTMLrouter.get("/signup", (req, res) => {
  res.render("signup");
});
HTMLrouter.get("/dashboard", isAuthenticated, (req, res) => {
  res.render("dashboard");
});

module.exports = HTMLrouter;
