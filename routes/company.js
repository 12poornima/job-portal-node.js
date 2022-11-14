var express = require("express");
var router = express.Router();
const {
  company,
  companySignUp,
  companyLogin,
  signupCompany,
  loginCompany,
} = require("../controllers/companyController");

router.get("/", company);
router.get("/signup", companySignUp);
router.get("/login", companyLogin);
router.post("/signup", signupCompany);
router.post("/login", loginCompany);

module.exports = router;
