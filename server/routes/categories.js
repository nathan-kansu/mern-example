const express = require("express");
const router = express.Router();
const Category = require("../models/category");

require("dotenv").config();

router.get("/", (_req, res) => {
  Category.find()
    .sort({ label: "asc" })
    .then((categories) => {
      res.send(categories);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const io = req.app.get("socketio");
  const { label, parent } = req.body;

  Category.create({ label, parent }).then((result) => {
    const { _id, label, parent } = result;
    io.emit("category:created", { _id, label, parent });
    res.send(result);
  });
});

router.put("/:categoryId", (req, res) => {
  const io = req.app.get("socketio");
  const { categoryId } = req.params;
  const { category } = req.body;

  Category.findOneAndUpdate(
    { _id: categoryId },
    {
      label: category,
    }
  ).then((result) => {
    io.emit("category:update", { _id: categoryId, label: category });
    res.send(result);
  });
});

router.delete("/:categoryId", (req, res) => {
  const io = req.app.get("socketio");
  const { categoryId } = req.params;

  Category.findOneAndDelete().then((result) => {
    io.emit("category:delete", { id: categoryId });
    res.send(result);
  });
});

module.exports = router;
