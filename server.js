//change
//Dependencies
const express = require("express");
const handleBars = require("express-handlebars");
const session = require("express-session");
const passport = require("./config/passport");
//server creation
const app = express();
const PORT = process.env.PORT || 8080;

// set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up express-handle bars
app.engine("handlebars", handleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// set static folder for front end assets
app.use(express.static("./public"));

//keeping track of users login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// seting up routing
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//require models for syncing
const db = require("./models");

//sync sequelize models then start express(the server)
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log("app listening on PORT" + PORT);
  });
});
