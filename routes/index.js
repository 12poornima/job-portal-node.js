var express = require('express');
var router = express.Router();
const {indexPage, signUpPage ,loginPage}=require('../controllers/userControllers')

/* GET home page. */
router.get('/',indexPage);

router.get('/signup',signUpPage);

router.get('/login',loginPage)


module.exports = router;
