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
  usersCompany,
  usersUpdateForm,
  applyJob,
} = require("../controllers/userControllers");
const checkUsedLogedIn = require("../middlewares/checkUserLogedIn");

/* GET home page. */
router.get("/", indexPage);

router.get("/signup", signUpPage);

router.get("/login", loginPage);
router.get("/home", checkUsedLogedIn, homePage);

router.post("/signup", doSignUp);
router.post("/login", doLogin);
router.get("/view", checkUsedLogedIn, viewJobPage);
router.get("/userscompanypage", checkUsedLogedIn, usersCompany);
router.get("/usersUpdate", checkUsedLogedIn, usersUpdateForm);
router.get("/applyjob/:id", checkUsedLogedIn, applyJob);

module.exports = router;
