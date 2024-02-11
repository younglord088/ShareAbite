const mongoose = require("mongoose");
const express = require("express");
const { User } = require('../models/userModel.js');

const router = express.Router();

router.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;
    if ( !email || !password || password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Invalid input. Please provide valid name, email, and password (min 6 characters).",
      });
    }

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email is taken",
      });
    }


    const user = new User({
      name,
      email,
      password, 
    });

    await user.save();

    return res.status(201).send({
      success: true,
      message: "Registration successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;
