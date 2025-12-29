import express from "express";
import HireRequest from "../models/HireForm.js";

const router = express.Router();

// 1️⃣ Save hire form data
router.post("/hire", async (req, res) => {
  try {
    console.log("📩 Hire form received:", req.body);

    const hireData = new HireRequest(req.body);
    await hireData.save();

    console.log("✅ Hire form saved in MongoDB");

    res.status(201).json({ message: "Hire request saved" });
  } catch (error) {
    console.error("❌ Error saving hire form:", error);
    res.status(500).json({ error: error.message });
  }
});


// 2️⃣ Get all hire requests (Admin)
router.get("/hire", async (req, res) => {
  const data = await HireRequest.find().sort({ createdAt: -1 });
  res.json(data);
});

export default router;
