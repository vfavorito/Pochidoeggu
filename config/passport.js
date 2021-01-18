// bringing in the passport package files
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// bringing in all the files/models in our models folder
const db = require("../models");

// letting passport know we are logging in with a username and password
passport.use(
  //-----------------------------------step 3 takes userData and verifys the username and password field is in our model then go back to api-routes
  new LocalStrategy(
    {
      usernameField: "username",
    },
    (username, password, done) => {
      db.Account.findOne({
        where: {
          username: username,
        },
      }).then((account) => {
        // if the query was good but the username passed in was not in our account model stop and return this
        if (!account) {
          return done(null, false, { message: "Invalid Username" });
        }
        // if the query was good but the password passed in did not match the username stop and return this
        else if (!account.validPassword(password)) {
          return done(null, false, { message: "Invalid Password" });
        }
        // if the query was good and the username and password passed in match whats in our model return the account
        return done(null, account);
      });
    }
  )
);

// boilerplate code for passport allows the user to maintain a status of logged in 
//If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting configured passport
module.exports = passport;
