const express = require("express");
const router = express.Router();

const { sendEmail } = require("./emailController");

router.post("/sendEmail", sendEmail);

module.exports = router;