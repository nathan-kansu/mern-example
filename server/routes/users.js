const express = require("express");
const router = express.Router();
const User = require("../models/user");

require("dotenv").config();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email, password })
    .then((user) => {
      if (!user) {
        res.status(400);
        return res.send({ error: true });
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
