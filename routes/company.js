var express = require("express");
var router = express.Router();
const {
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
  companyProfile,
} = require("../controllers/companyController");
const checkCompanyLogged = require("../middlewares/checkCompanyLogged");

router.get("/", company);
router.get("/signup", companySignUp);
router.get("/login", companyLogin);
router.post("/signup", signupCompany);
router.post("/login", loginCompany);
router.get("/home", checkCompanyLogged, companyHomePage);
router.get("/add-job", checkCompanyLogged, getAddJobPage);
router.post("/addJob", checkCompanyLogged, addJobCompany);
router.get("/companyview", checkCompanyLogged, companyView);
router.get("/updateProfilePage", checkCompanyLogged, updateProfilePage);
router.post("/updateProfile", checkCompanyLogged, updateProfile);
router.get("/profile", checkCompanyLogged, companyProfile);

module.exports = router;
