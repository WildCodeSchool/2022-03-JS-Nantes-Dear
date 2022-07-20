const emailer = require("../services/mailer");

class MailController {
  static send = (req, res) => {
    const { email, subject, message } = req.body;

    emailer.sendSorryMail(
      {
        from: email,
        to: "contact@dear.com",
        subject,
        text: message,
        html: `<strong>${message}</strong>`,
      },
      (err) => {
        if (err) {
          res.status(424).json({
            status: "error",
            message: "Erreur lors de l'envoi",
          });
        } else {
          res.status(200).json({
            status: "success",
            message: "Email envoyé",
          });
        }
      }
    );
  };
}

module.exports = MailController;
