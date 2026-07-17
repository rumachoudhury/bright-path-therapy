const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  // CREATE
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

// READ - Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json({
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// UPDATE - Update one contact
const updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.status(200).json({
      message: "Contact update",
      data: updatedContact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// DELETE - Delete one contact
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Contact deleted",
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
  getContacts,
  updateContact,
  deleteContact,
};
