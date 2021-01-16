//Dependencies
let express = require("express");
let handleBars = require("express-handlebars");
let session = require("express-session")
let passport = require("./config/passport");
//server creation
let app = express();
let PORT = process.env.PORT || 8080;

// set up Express to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// set up express-handle bars
app.engine("handlebars",handleBars({defaultLayout:"main"}));
app.set("view engine","handlebars");

// set static folder for front end assets
app.use(express.static("public"));

//keeping track of users login status 
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// seting up routing
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//require models for syncing
let db = require("./models");

//sync sequelize models then start express(the server)
db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT,function(){
        console.log("app listening on PORT" + PORT);
    });
});