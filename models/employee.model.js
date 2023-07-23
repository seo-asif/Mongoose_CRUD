const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 4,
  },
  age: {
    type: String,
    require: true,
  },
});

const employee = mongoose.model("employee", employeeSchema);

module.exports = employee;
