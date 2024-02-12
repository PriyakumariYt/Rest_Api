const mongoose = require("mongoose");
// const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }
});

const StudentDetail = mongoose.model("StudentDetail", studentSchema);

module.exports = StudentDetail;
