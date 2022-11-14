const mongoose = require("mongoose");
const companySchema = mongoose.Schema({
  Name: {
    type: String,
    maxLength: 20,
    required: [true, "You must enter name"],
  },
  Email: {
    type: String,
    maxLength: 50,
    required: true,
  },
  Password: {
    type: String,
    maxLength: 200,
    required: true,
  },
  Phone: {
    type: Number,
    maxLength: 10,
    required: true,
  },
});
module.exports = mongoose.model("company", companySchema);
