const express = require("express");
const router = express.Router();

const {
  createAppoinment,
  getAppoinments,
  updateAppoinment,
  deleteAppoinment,
} = require("../controllers/appointmentController");

// CREATE appoinment
router.post("/", createAppoinment);

// GET all appoinments
router.get("/", getAppoinments);

// UPDATE appointment
router.put("/:id", updateAppointment);

// DELETE appointment
router.delete("/:id", deleteAppointment);

module.exports = router;
