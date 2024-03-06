const express = require("express");
const router = express.Router();
const carSpecificationsController = require("../controllers/carSpecificationsController");

// Retrieve all car specifications
router.get("/", carSpecificationsController.getAllCarSpecifications);

// Add a new car specification
router.post("/", carSpecificationsController.createCarSpecification);

// Retrieve car specifications by mode
router.get("/:mode", carSpecificationsController.getCarSpecificationsByMode);

module.exports = router;
