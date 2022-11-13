var express = require("express");
var router = express.Router();
const { company, companySignUp, companyLogin } = require("../controllers/companyController");

router.get("/", company);
router.get("/signup", companySignUp);
router.get("/login",companyLogin)
module.exports = router;
