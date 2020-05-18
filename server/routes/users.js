const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { secret } = require("../config/jwtConfig");

require("dotenv").config();

router.post("/login", async (req, res, next) => {
  passport.authenticate("local", async (err, user, _info) => {
    try {
      if (err || !user) {
        const error = new Error("An Error occurred");
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) {
          return next(error);
        }
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, secret);
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
