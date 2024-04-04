const mongoose = require("mongoose");
const { Schema } = mongoose;

const userNew_forms = new Schema(
  {
    FirstName: String,
    ListName: String,
    Email: String,
    Age: Number,
    Gender: String,
  },
  { timestamps: true }
);

exports.new_forms = mongoose.model("new_forms", userNew_forms);
