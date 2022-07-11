const express = require("express");

const { MailController } = require("./controllers");

const router = express.Router();

router.post("/sendmail", MailController.send);

module.exports = router;
