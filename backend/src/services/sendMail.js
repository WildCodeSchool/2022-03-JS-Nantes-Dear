const emailer = require("./mailer");

emailer.sendMail(
  {
    from: "myname@gmail.com",
    to: "my-personnal-email@gmail.com",
    subject: "This is a test email",
    text: "Hello world",
    html: "<p>Hello <em>world</em></p>",
  },
  (err) => {
    if (err) console.error(err);
  }
);
