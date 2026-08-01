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
