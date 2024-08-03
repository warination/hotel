import Menu from "../models/menu.model.js";
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = Menu(data);
    const response = await newMenu.save();
    console.log("data saved", response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Menu.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (
      taste == "sweet" ||
      taste == "salty" ||
      taste == "sour" ||
      taste == "spicy"
    ) {
      const response = await Menu.find({ taste: taste });
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid taste" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedMenuData = req.body;
    const response = await Menu.findByIdAndUpdate(id, updatedMenuData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      res.status(404).json({ error: "Menu not found" });
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Menu.findByIdAndDelete(id);
    if (!response) {
      res.status(404).json({ error: "Menu not found" });
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
