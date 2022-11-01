const indexPage = function (req, res, next) {
    res.render('index', { title: 'Express', myName:'Poornima Murali',student:{'Reg':123,'Mark':50},age:22 });
  }

const signUpPage=  function(req, res, next) {
    res.render('signup');
  }

const loginPage=function(req, res, next) {
    res.render('login')
}  


  module.exports={indexPage,signUpPage,loginPage}