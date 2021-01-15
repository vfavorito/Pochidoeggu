
//Dependencies
let express = require("express");
let handleBars = require("express-handlebars");

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
app.use(express.static("./public"));

// seting up routing
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//require models for syncing
let db = require("./models");

//sync sequelize models then start express(the server)
db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT,function(){
        console.log("app listening on PORT" + PORT);
    });
});