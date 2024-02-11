const express = require("express");
const registerController = require("../controllers/authController")


const router = express.Router();

router.post("/signup", registerController); 


module.exports = router;