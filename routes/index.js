var express = require("express");
var router = express.Router();
const {
  indexPage,
  signUpPage,
  loginPage,
  doSignUp,
  doLogin,
} = require("../controllers/userControllers");

/* GET home page. */
router.get("/", indexPage);

router.get("/signup", signUpPage);

router.get("/login", loginPage);

router.post("/signup", doSignUp);
router.post("/login", doLogin);

module.exports = router;
