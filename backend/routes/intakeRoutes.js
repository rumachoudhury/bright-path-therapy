const express = require("express");

const router = express.Router();

// Temporary in-memory storage.
// IMPORTANT: We'll replace this with MongoDB in the next step.
const intakeRequests = [];

// POST /api/intake
router.post("/", async (req, res) => {
  try {
    const intakeData = req.body;

    // Basic validation
    if (
      !intakeData.childName ||
      !intakeData.parentName ||
      !intakeData.email ||
      !intakeData.phone ||
      !intakeData.primaryConcern
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    const newIntake = {
      id: Date.now().toString(),
      ...intakeData,
      createdAt: new Date(),
    };

    intakeRequests.push(newIntake);

    console.log("New intake request:", newIntake);

    res.status(201).json({
      success: true,
      message: "Intake form submitted successfully.",
      data: newIntake,
    });
  } catch (error) {
    console.error("Intake error:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
    });
  }
});

module.exports = router;
