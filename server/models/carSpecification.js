const mongoose = require("mongoose");

const carSpecificationSchema = new mongoose.Schema(
  {
    mode: {
      type: String,
      required: true,
    },
    range: {
      type: Number,
      required: true,
    },
    power: {
      type: String,
      required: true,
    },
    aero: {
      type: String,
      required: true,
    },
    traction: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarSpecification", carSpecificationSchema);
