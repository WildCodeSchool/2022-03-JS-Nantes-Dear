const emailer = require("../services/mailer");

class MailController {
  static send = (req, res) => {
    const { emailfrom, subject, message } = req.body;

    emailer.sendMail(
      {
        from: emailfrom,
        to: "contact@dear.com",
        subject,
        text: message,
        html: `<strong>${message}</strong>`,
      },
      (err /* info */) => {
        if (err) {
          res.status(424).json({
            status: "error",
            message: "Problème lors de l'envoi",
          });
        } else {
          res.status(200).json({
            status: "success",
            message: "Message envoyé",
          });
        }
      }
    );
  };
}

module.exports = MailController;
