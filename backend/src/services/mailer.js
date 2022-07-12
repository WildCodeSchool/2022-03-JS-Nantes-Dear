const nodemailer = require("nodemailer");
require("dotenv").config();

const mailer = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "688a1fec53ab98",
    pass: "dcbdd1a8a3fd43",
  },
});

module.exports = mailer;
