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
    unique: true,
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
  companyType: {
    type: String,
    maxLength: 20,
  },
  Discription: {
    type: String,
    maxLength: 200,
  },
  Location: {
    type: String,
    maxLength: 200,
  },
  Country: {
    type: String,
    maxLength: 200,
  },
  Image: {
    type: String,
    maxLength: 200,
  },
});
module.exports = mongoose.model("company", companySchema);
