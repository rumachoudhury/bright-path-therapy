const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);

    res.status(201).json({
      message: "Contact request received",
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
};
