const companyModel = require("../models/companyModel");
const bcrypt = require("bcrypt");

const company = function (req, res) {
  res.send("Company Page");
};
const companySignUp = function (req, res) {
  res.render("company/companySignUp");
};
const companyLogin=function(req,res){
  res.render("company/companyLogin")
}
const signupCompany = async function (req, res) {
  console.log(req.body);
  try {
    req.body.Password = await bcrypt.hash(req.body.Password, 10);
    await companyModel.create(req.body);
    res.redirect("/company/login")
  } catch (error) {
    console.log(error);
  }
};


const loginCompany = async function (req, res) {
  console.log(req.body);
  let company = await companyModel.findOne({ Email: req.body.Email });
  if (company != null) {
    console.log(company.Password);
    console.log(req.body.Password);
    let check = await bcrypt.compare(req.body.Password, company.Password);
    console.log(check);
    if (check) {
      req.session.company = company;
      console.log(req.session.company);
      res.redirect("/company/home");
    } else {
      res.redirect("/company/login");
    }
  }
};

module.exports = {
  company,
  companySignUp,
  companyLogin,
  signupCompany,
  loginCompany,
};
