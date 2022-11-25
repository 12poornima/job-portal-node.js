const companyModel = require("../models/companyModel");
const bcrypt = require("bcrypt");
const jobModel = require("../models/jobModel");

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
  // console.log(req.session.company);
  if (req.session.company) {
    res.render("company/companyHome", { company: req.session.company });
  } else {
    res.redirect("/company/login");
  }
};
const getAddJobPage = function (req, res, next) {
  res.render("company/addJob");
};

const addJobCompany = async function (req, res, next) {
  console.log(req.body);
  req.body.companyName = req.session.company.Name;
  req.body.company_id = req.session.company._id;
  req.body.job_post_date = new Date().toLocaleDateString();
  console.log(req.body);
  await jobModel.create(req.body);
  res.redirect("/company/home");
};

const companyView = async function (req, res, next) {
  let allJobs = await jobModel.find({ company_id: req.session.company._id });
  res.render("company/companyview", {
    allJobs,
  });
};
const updateProfilePage = function (req, res, next) {
  res.render("company/updateProfilePage");
};
const updateProfile = async function (req, res, next) {
  // console.log(req.body, req.files);
  req.body.profileUpdated = true;
  let newCompany = await companyModel.findOneAndUpdate(
    { _id: req.session.company._id },
    req.body,
    { new: true }
  );
  req.files.Image.mv(
    "./public/images/companyProfiles/" + req.session.company._id + ".jpg"
  );
  console.log(newCompany);
  req.session.company = newCompany;
  res.redirect("/company/home");
};

module.exports = {
  company,
  companySignUp,
  companyLogin,
  signupCompany,
  loginCompany,
  companyHomePage,
  getAddJobPage,
  addJobCompany,
  companyView,
  updateProfilePage,
  updateProfile,
};
