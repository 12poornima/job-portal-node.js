var express = require("express");
var router = express.Router();
const {
  indexPage,
  signUpPage,
  loginPage,
  doSignUp,
  doLogin,
  homePage,
  viewJobPage,
} = require("../controllers/userControllers");
const checkUsedLogedIn = require("../middlewares/checkUserLogedIn");

/* GET home page. */
router.get("/", indexPage);

router.get("/signup", signUpPage);

router.get("/login", loginPage);
router.get("/home", checkUsedLogedIn, homePage);

router.post("/signup", doSignUp);
router.post("/login", doLogin);
router.get("/view", viewJobPage);

module.exports = router;
