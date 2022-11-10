var express = require("express");
var router = express.Router();
const { admin, adminpage } = require("../controllers/adminController");
router.get("/", admin);
router.get("/adminpage", adminpage);

module.exports = router;
