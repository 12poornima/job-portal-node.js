const companyModel = require("../models/companyModel");
const bcrypt = require("bcrypt");

const company = function (req, res) {
  res.send("Company Page");
};
const companySignUp = function (req, res) {
  res.render("company/companySignUp");
};

module.exports = {
  company,
  companySignUp,
  companyLogin,
  signupCompany,
  loginCompany,
};
