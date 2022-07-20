const express = require("express");

const { MailController } = require("./controllers");
const { MailAdminController } = require("./controllers");

const router = express.Router();

router.post("/sendmail", MailController.send);
router.post("/sendsorrymail", MailAdminController.send);

module.exports = router;
