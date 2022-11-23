const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

class UserController {
  static register = async (req, res) => {
    const { email, pseudo, password, age, role } = req.body;

    const [user] = await models.user.findByPseudo(pseudo);
    if (user.length) {
      res.status(409).send({
        error: "Ce pseudo existe déjà",
      });
      return;
    }

    const [mail] = await models.user.findByMail(email);
    if (mail.length) {
      res.status(409).send({
        error: "Cet email existe déjà",
      });
    }

    const validationErrors = Joi.object({
      email: Joi.string().email().max(255).required(),
      pseudo: Joi.string().max(50).required(),
      password: Joi.string().max(255).required(),
      age: Joi.string().max(30).required(),
    }).validate({ email, pseudo, password, age }).error;

    if (validationErrors) {
      res.status(422).send(req.body);
      return;
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      models.user
        .insert({ email, pseudo, hash, age, role })
        .then(([result]) => {
          res.status(201).json({
            id: result.insertId,
            email,
            pseudo,
            hash,
            age,
            role,
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send({
            error: err.message,
          });
        });
    } catch (err) {
      res.status(500).send({
        error: `Erreur lors du chiffrement du mot de passe : ${err.message}`,
      });
    }
  };

  static login = (req, res) => {
    const { pseudo, password } = req.body;

    const validationErrors = Joi.object({
      pseudo: Joi.string().max(15).required(),
      password: Joi.string().max(150).required(),
    }).validate({ pseudo, password }).error;

    if (validationErrors) {
      res.status(422).send(validationErrors);
      return;
    }

    models.user
      .findByPseudo(pseudo)
      .then(async ([rows]) => {
        if (rows[0] == null) {
          res.status(403).send({ error: "pseudo ou mot de passe incorrect" });
        } else {
          const { id, password: hash, role } = rows[0];
          try {
            if (await bcrypt.compare(password, hash)) {
              const token = await jwt.sign(
                { id, pseudo, role },
                process.env.JWT_AUTH_SECRET,
                { expiresIn: "1h" }
              );

              res
                .cookie("accessToken", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                })
                .status(200)
                .send({ id, pseudo });
              return;
            }
            res
              .status(403)
              .send("Le pseudo ou le mot de passe ne sont pas valides");
          } catch (err) {
            res.status(500).send(`Erreur Interne avec bcrypt ${err}`);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        return res.status(500).send({
          error: err.message,
        });
      });
  };

  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.status(200).send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static logout = (req, res) => {
    res.clearCookie("accessToken");
    res.sendStatus(204);
  };

  static edit = (req, res) => {
    const user = req.body;

    user.id = parseInt(req.params.id, 10);

    models.user
      .update(user)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static checkToken = (req, res) => {
    const token = req.cookie.access_token;
    if (token) {
      return res.sendStatus(401);
    }
    try {
      const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);

      return res.status(200).json({
        id: data.id,
        email: data.email,
        role: data.role,
      });
    } catch {
      return res.sendStatus(401);
    }
  };

  static checkPseudo = (req, res) => {
    models.user
      .findByPseudo(req.query.pseudo)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(200);
        } else {
          res.sendStatus(422);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static checkEmail = (req, res) => {
    models.user
      .findByMail(req.query.email)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(200);
        } else {
          res.sendStatus(422);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}
module.exports = UserController;
