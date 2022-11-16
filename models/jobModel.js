const mongoose = require("mongoose");
const JobSchema = mongoose.Schema({
  companyName: {
    type: String,
    maxLength: 20,
    required: true,
  },
  company_id: {
    type: String,
    maxLength: 200,
    required: true,
  },
  status: {
    type: String,
    maxLength: 20,
    required: true,
    default: "open",
  },
  Name: {
    type: String,
    maxLength: 200,
    required: [true, "You must enter name"],
  },

  Job_discription: {
    type: String,
    maxLength: 200,
    required: true,
  },
  Salary: {
    type: Number,
    maxLength: 200,
    required: true,
  },
  Vacancies: {
    type: Number,
    maxLength: 500,
    required: true,
  },
  Experiencs: {
    type: String,
    maxLength: 500,
    required: true,
  },
  job_post_date: {
    type: String,
    maxLength: 20,
    required: true,
  },
  Last_apply_date: {
    type: String,
    maxLength: 20,
    required: true,
  },
});
module.exports = mongoose.model("Job", JobSchema);
