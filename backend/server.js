const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contactRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("api/appoinment", appointmentRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({
    message: "Bright Path Therapy backend is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
