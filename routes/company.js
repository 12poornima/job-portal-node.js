var express = require("express");
var router = express.Router();
const {
  company,
  companySignUp,
  companyLogin,
  signupCompany,
  loginCompany,
  homePageCompany,
} = require("../controllers/companyController");

router.get("/", company);
router.get("/signup", companySignUp);
router.get("/login", companyLogin);
router.get("/home", homePageCompany);
router.post("/signup", signupCompany);
router.post("/login", loginCompany);
module.exports = router;
