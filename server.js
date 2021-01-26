//Dependencies
const express = require("express");
const handleBars = require("express-handlebars");
const session = require("express-session");
const passport = require("./config/passport");
const HTMLroutes = require("./routes/html-routes");
const APIroutes = require("./routes/api-routes");
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
app.use(express.static("public"));

//keeping track of users login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// seting up routing
app.use(HTMLroutes);
app.use(APIroutes);
//require models for syncing
const db = require("./models");

//sync sequelize models then start express(the server)
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("app listening on PORT" + PORT);
  });
});
