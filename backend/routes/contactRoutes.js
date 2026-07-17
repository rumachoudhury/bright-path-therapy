const express = require("express");
const router = express.Router();

const { createContact } = require("../controllers/contactController");

router.post("/", createContact);
router.get("/api/contact");
router.put("/api/contact/:id");
router.delete("/api/contact/:id");

module.exports = router;
