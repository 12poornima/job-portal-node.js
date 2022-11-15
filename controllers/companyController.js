const companyModel = require("../models/companyModel");
const bcrypt = require("bcrypt");

const company = function (req, res) {
  res.send("Company Page");
};
const companySignUp = function (req, res) {
  res.render("company/companySignUp");
};
const companyLogin = function (req, res) {
  res.render("company/companyLogin");
};
const signupCompany = async function (req, res) {
  console.log(req.body);
  try {
    req.body.Password = await bcrypt.hash(req.body.Password, 10);
    await companyModel.create(req.body);
    res.redirect("/company/login");
  } catch (error) {
    console.log(error);
    res.redirect("/company/signup");
  }
};

const loginCompany = async function (req, res) {
  // console.log(req.body);
  try {
    let company = await companyModel.findOne({ Email: req.body.Email });
    console.log(company);
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
    } else {
      res.redirect("/company/login");
    }
  } catch (error) {
    res.redirect("/company/login");
  }
};

const companyHomePage = function (req, res, next) {
  console.log(req.session.company);
  if (req.session.company) {
    res.render("company/companyHome", { company: req.session.company });
  } else {
    res.redirect("/company/login");
  }
};
const getAddJobPage = function (req, res, next) {
  res.render("company/add-job");
};

module.exports = {
  company,
  companySignUp,
  companyLogin,
  signupCompany,
  loginCompany,
  companyHomePage,
  getAddJobPage,
};
