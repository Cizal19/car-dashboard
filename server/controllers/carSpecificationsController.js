const CarSpecification = require("../models/carSpecification");

exports.getAllCarSpecifications = async (req, res) => {
  try {
    const carSpecifications = await CarSpecification.find();
    res.json(carSpecifications);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.createCarSpecification = async (req, res) => {
  try {
    const newCarSpecification = new CarSpecification(req.body);
    const savedCarSpecification = await newCarSpecification.save();
    res.status(201).json(savedCarSpecification);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getCarSpecificationsByMode = async (req, res) => {
  try {
    const mode = req.params.mode;
    const carSpecifications = await CarSpecification.find({ mode });
    if (!carSpecifications.length) {
      return res.status(404).send("Specifications not found for this mode");
    }
    res.json(carSpecifications);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
