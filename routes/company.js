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
  addJobCompany
} = require("../controllers/companyController");

router.get("/", company);
router.get("/signup", companySignUp);
router.get("/login", companyLogin);
router.post("/signup", signupCompany);
router.post("/login", loginCompany);
router.get("/home", companyHomePage);
router.get("/add-job", getAddJobPage);
router.post("/addJob", addJobCompany);


module.exports = router;
