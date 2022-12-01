const mongoose = require("mongoose");
const jobApplicationSchema = mongoose.Schema({
  UserName: {
    type: String,
    maxLength: 20,
    required: true,
  },
  userEmail: {
    type: String,
    maxLength: 100,
    required: true,
  },
  userPhone: {
    type: Number,
    maxLength: 12,
    required: true,
  },
  userAddress: {
    type: String,
    maxLength: 500,
    required: true,
  },
  userExperience: {
    type: String,
    maxLength: 500,
    required: true,
  },
  

  companyName: {
    type: String,
    maxLength: 200,
    required: true,
  },
  company_id: {
    type: String,
    maxLength: 200,
    required: true,
  },
  status: {
    type: String,
    default: "Applied",
  },
  jobId: {
    type: String,
    maxLength: 200,
    required: true,
  },
  jobTitle: {
    type: String,
    maxLength: 200,
    required: true,
  },
});
module.exports = mongoose.model("jobApplication", jobApplicationSchema);
