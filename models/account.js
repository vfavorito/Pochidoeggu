// bcrypt is used to scramble the passwords we save in database
const bcrypt = require("bcryptjs");
module.exports = function (sequelize, DataTypes) {
  const Account = sequelize.define("Account", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [5, 20],
      },
    },
    password: {
      type: DataTypes.String,
      allowNull: false,
    },
  });
  // adding a prototype function to the model to be used in the localStrategy for passport in passport.js file
  Account.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // this is saying before a new account is stored in db take their password and scramble it
  Account.addHook("beforeCreate", (account) => {
    account.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return Account;
};
