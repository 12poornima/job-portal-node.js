const company = function (req, res) {
  res.send("Company Page");
};
const companySignUp = function (req, res) {
  res.render("company/companySignUp");
};
const companyLogin=function(req,res){
  res.render("company/companyLogin")
}

module.exports = {
  company,
  companySignUp,
  companyLogin,
};
