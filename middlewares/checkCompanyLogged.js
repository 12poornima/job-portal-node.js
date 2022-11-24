const checkCompanyLogged = function (req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/company/login");
  }
};
module.exports = checkCompanyLogged;
