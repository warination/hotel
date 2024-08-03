import Person from "./../models/person.model.js";
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = Person(data);
    const response = await newPerson.save();
    console.log("data saved", response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await Person.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "manager" || workType == "waiter" || workType == "chef") {
      const response = await Person.find({ work: workType });
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(id, updatedPersonData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      res.status(404).json({ error: "Person Not found" });
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
    const response = await Person.findByIdAndDelete(id);
    if (!response) {
      res.status(404).json({ error: "Person Not found" });
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
