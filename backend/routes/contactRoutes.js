const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// CREATE
router.post("/", createContact);

// READ
router.get("/", getContacts);

//UPDATE
router.put("/:id", updateContact);

//DELETE
router.delete("/:id", deleteContact);

module.exports = router;
