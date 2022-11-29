const usermodels = require("../models/usermodels");
const bcrypt = require("bcrypt");
const jobModel = require("../models/jobModel");
const companyModel = require("../models/companyModel");
const jobApplicationModel = require("../models/jobApplicationModel");

const indexPage = function (req, res, next) {
  res.render("index", {
    title: "Express",
    myName: "Poornima Murali",
    student: { Reg: 123, Mark: 50 },
    age: 22,
  });
};

const signUpPage = function (req, res, next) {
  res.render("signup");
  // signuphbs
};

const loginPage = function (req, res, next) {
  res.render("login");
};
const homePage = function (req, res, next) {
  res.render("home");
};

const doSignUp = async function (req, res) {
  console.log(req.body);
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await usermodels.create(req.body);
    res.redirect("/login");
  } catch (error) {
    console.log(error);
    res.redirect("/signup");
  }
};

const doLogin = async function (req, res) {
  // console.log(req.body);
  let user = await usermodels.findOne({ email: req.body.email });
  if (user != null) {
    // data baseil ulla data ann user
    // console.log(user)
    console.log(user.password);
    console.log(req.body.password);
    let check = await bcrypt.compare(req.body.password, user.password);
    console.log(check);
    if (check) {
      req.session.user = user;
      console.log(req.session.user);
      res.redirect("/home");
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
};
const viewJobPage = async function (req, res, next) {
  let allJobs = await jobModel.find();
  res.render("view", {
    allJobs,
  });
};
const usersCompany = async function (req, res, next) {
  let allCompany = await companyModel.find();
  res.render("usersCompanyPage", {
    allCompany,
  });
};
const usersUpdateForm = async function (req, res, next) {
  res.render("updateFormUsers");
};

const updateFromProfile =async function(req,res,next){
  req.body.profileUpdated=true
 await usermodels.create(req.body)
  { _id: req.session.user._id }
    req.body,
    { new: true }
    req.files.Image.mv(
      "./public/images/usersProfiles/"+req.session.user._id+".pdf"
    )
}
 const userProfiles=async function(req,res,next){
  res.render("/userprofile")

 }


const applyJob = async function (req, res, next) {
  console.log(req.params.id);
  let jobDetails = await jobModel.findOne({ _id: req.params.id });
  let application = {
    userName: req.session.user.name,
    userEmail: req.session.user.email,
    userPhone: req.session.user.phone,
    userAddress: req.session.user.Address,
    userExperience: req.session.user.Experience,
    company_id: jobDetails.company_id,
    companyName: jobDetails.companyName,
    jobId: jobDetails._id,
    jobTitle: jobDetails.Name,
  };
  console.log(application);
  await jobApplicationModel.create(application);
  res.redirect("/home");
};

module.exports = {
  indexPage,
  signUpPage,
  loginPage,
  doSignUp,
  doLogin,
  homePage,
  viewJobPage,
  usersCompany,
  usersUpdateForm,
  applyJob,
  updateFromProfile,
  userProfiles
};
