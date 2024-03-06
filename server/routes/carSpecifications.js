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

// http://localhost:4000/api-docs/

// Documenting GET Route for fetching all Car Specifications
/**
 * @swagger
 * /api/cars:
 *   get:
 *     summary: Returns a list of all car specifications
 *     responses:
 *       200:
 *         description: A list of car specifications.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CarSpecification'
 * components:
 *   schemas:
 *     CarSpecification:
 *       type: object
 *       required:
 *         - mode
 *         - range
 *         - power
 *         - aero
 *         - traction
 *       properties:
 *         mode:
 *           type: string
 *           description: The car mode
 *         range:
 *           type: number
 *           description: The car's range
 *         power:
 *           type: string
 *           description: The car's power type
 *         aero:
 *           type: string
 *           description: The car's aerodynamics configuration
 *         traction:
 *           type: string
 *           description: The car's traction control setting
 */

// Documenting POST Route for Adding New Car Specification
/**
 * @swagger
 * /api/cars:
 *   post:
 *     summary: Adds a new car specification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CarSpecification'
 *     responses:
 *       201:
 *         description: Car specification added successfully
 *       500:
 *         description: Server error
 */

// Documenting GET Route for Retrieving Car Specifications by Mode
/**
 * @swagger
 * /api/cars/{mode}:
 *   get:
 *     summary: Retrieves car specifications by mode
 *     parameters:
 *       - in: path
 *         name: mode
 *         required: true
 *         schema:
 *           type: string
 *         description: The mode of the car specifications to retrieve
 *     responses:
 *       200:
 *         description: A list of car specifications by mode
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CarSpecification'
 *       404:
 *         description: Specifications not found for this mode
 */
