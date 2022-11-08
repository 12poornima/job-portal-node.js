const usermodels = require("../models/usermodels");
const bcrypt = require("bcrypt");

const indexPage = function (req, res, next) {
  res.render("index", {
    title: "Express",
    myName: "Poornima Murali",
    student: { Reg: 123, Mark: 50 },
    age: 22,
  });
};

const signUpPage = function (req, res, next) {
  res.render("signup");
};

const loginPage = function (req, res, next) {
  res.render("login");
};
const homePage = function (req, res, next) {
  res.render("");
};

const doSignUp = async function (req, res) {
  console.log(req.body);
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await usermodels.create(req.body);
    res.redirect("/login");
  } catch (error) {
    console.log(error);
  }
};

const doLogin = async function (req, res) {
  // console.log(req.body);
  let user = await usermodels.findOne({ email: req.body.email });
  if (user != null) {
    // data baseil ulla data ann user
    // console.log(user)
    console.log(user.password);
    console.log(req.body.password);
    let check = await bcrypt.compare(req.body.password, user.password);
    console.log(check);
    if (check) {
      res.send("Check Successfully");
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
};

module.exports = { indexPage, signUpPage, loginPage, doSignUp, doLogin };
