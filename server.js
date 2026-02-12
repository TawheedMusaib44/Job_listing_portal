const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./src/config/database");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Database connection
connectDB();

// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/jobs", require("./src/routes/jobRoutes"));
app.use("/api/applications", require("./src/routes/applicationRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
