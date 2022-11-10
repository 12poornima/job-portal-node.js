const admin = function (req, res) {
  res.send("admin page");
};
const adminpage = function (req, res) {
  res.send("Admin Page Running Succesfully");
};
module.exports = {
  admin,
  adminpage,
};
