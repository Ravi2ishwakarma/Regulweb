import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import careerRoutes from "./routes/careerRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "REGUL Backend API is running",
  });
});
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);
app.use("/uploads", express.static("uploads"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });