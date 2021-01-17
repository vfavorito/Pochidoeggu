module.exports = function (req, res, next) {
  // If the user is logged in continue
  if (req.account) {
    return next();
  }
  // If the user isn't logged in send the homepage
  return res.redirect("/");
};
