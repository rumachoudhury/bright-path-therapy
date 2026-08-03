const Appointment = require("../models/Appointment");

// CREATE
const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);

    res.status(201).json({
      message: "Appointment created successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create appointment",
      error: error.message,
    });
  }
};

module.exports = {
  createAppointment,
};
