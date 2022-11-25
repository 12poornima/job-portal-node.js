const checkCompanyLogged = function (req, res, next) {
  if (req.session.company) {
    next();
  } else {
    res.redirect("/company/login");
  }
};
module.exports = checkCompanyLogged;
