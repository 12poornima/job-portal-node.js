var express = require("express");
var router = express.Router();
const { company } = require("../controllers/companyController");

router.get("/", company);

module.exports = router;
