const express = require("express");
const router = express.Router();
const carSpecificationsController = require("../controllers/carSpecificationsController");
const auth = require("../middleware/auth");

// Retrieve all car specifications
router.get("/", auth, carSpecificationsController.getAllCarSpecifications);

// Add a new car specification
router.post("/", auth, carSpecificationsController.createCarSpecification);

// Retrieve car specifications by mode
router.get(
  "/:mode",
  auth,
  carSpecificationsController.getCarSpecificationsByMode
);

module.exports = router;
