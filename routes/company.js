var express = require("express");
var router = express.Router();
const { company, companySignUp } = require("../controllers/companyController");

router.get("/", company);
router.get("/signup", companySignUp);

module.exports = router;
