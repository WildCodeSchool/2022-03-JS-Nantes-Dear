const emailer = require("./mailer");

emailer.sendMail(
  {
    from: "lucie-chauvet_student2022@wilder.school",
    to: "lulupesto44@laposte.net",
    subject: "This is a test email",
    text: "Hello world",
    html: "<p>Hello <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    // eslint-disable-next-line no-restricted-syntax
    else console.log(info);
  }
);
