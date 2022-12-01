const mongoose = require("mongoose");
const taskSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 20,
    required: [true, "You must enter name"],
  },
  email: {
    type: String,
    maxLength: 50,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    maxLength: 200,
    required: true,
  },
  phone: {
    type: Number,
    maxLength: 10,
    required: true,
  },
  Address: {
    type: String,
    maxLength: 500,
  },
  Experience: {
    type: String,
    maxLength: 500,
  },
  Skills: {
    type: String,
    maxLength: 400,
  },
  file: {
    type: String,
    maxLength: 600,
  },
});
module.exports = mongoose.model("user", taskSchema);
