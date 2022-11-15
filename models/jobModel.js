const mongoose = require("mongoose");
const JobSchema = mongoose.Schema({
    Name:{
        type: String,
    maxLength: 20,
    required: [true, "You must enter name"],
  },

  Job_discription:{
    type: String,
    maxLength: 200,
    required: true,
  },
  Salary:{
    type:Number,
    maxLength:200,
    required:true,
  },
  Vacancies:{
    type:Number,
    maxLength:500,
    required:true,
  },
  Experiencs:{
    type:String,
    maxLength:500,
    required:true,
  },
  Last_apply_date:{
    type:Date,
    maxLength:20,
    required:true,
  },
})
module.exports = mongoose.model("addJob", JobSchema);
