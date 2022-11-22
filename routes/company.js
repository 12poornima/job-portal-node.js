// // swiper
// var swiper=new Swiper(".mySwiper",
// {
//   loop:true,
//   autoplay:{
//     delay:2500,
//     disableOnInteraction:false,
//   },
//   slidesPerView:1,
//   spaceBetween:10,
//   pagination:{
//     el:".swper-pagination",
//     clickable:true
//   },
//   breakpoints:{
//     640:{
//       slidesPerView:2,
//       spaceBetween:20,
//     },
//     768:{
//       slidesPerView:3,
//       spaceBetween:40,
//     },
//     1024:{
//       slidesPerView:3,
//       spaceBetween50,
//     }
//   }
// })

var express = require("express");
var router = express.Router();
const {
  company,
  companySignUp,
  companyLogin,
  signupCompany,
  loginCompany,
  companyHomePage,
  getAddJobPage,
  addJobCompany,

  companyView,
} = require("../controllers/companyController");

router.get("/", company);
router.get("/signup", companySignUp);
router.get("/login", companyLogin);
router.post("/signup", signupCompany);
router.post("/login", loginCompany);
router.get("/home", companyHomePage);
router.get("/add-job", getAddJobPage);
router.post("/addJob", addJobCompany);

router.get("/companyview", companyView);

module.exports = router;
