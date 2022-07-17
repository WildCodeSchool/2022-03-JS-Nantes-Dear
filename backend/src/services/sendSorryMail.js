const emailer = require("./mailer");

emailer.sendSorryMail(
  {
    from: "myname@gmail.com",
    to: "my-personnal-email@gmail.com",
    subject: "Suppression de compte",
    text: "Bonjour,",
    html: "<p>Bonjour, c'est la team Dear!</p>",
  },
  (err) => {
    if (err) console.error(err);
  }
);
