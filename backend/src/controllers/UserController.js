const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

class UserController {
  static register = async (req, res) => {
    const { pseudo, age, email, password, role } = req.body;

    const [user] = await models.user.findByPseudo(pseudo);

    if (user.length) {
      res.status(409).send({
        error: "Ce pseudo existe déjà",
      });
    }

    const validationErrors = Joi.object({
      pseudo: Joi.string().max(20).required(),
      age: Joi.string().max(30).required(),
      email: Joi.string().email().max(255).required(),
      password: Joi.string().max(15).required(),
    }).validate({ pseudo, age, email, password }).error;

    if (validationErrors) {
      res.status(422).send(req.body);
      return;
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      models.user
        .insert({ pseudo, age, email, hash, role })
        .then(([result]) => {
          res
            .status(201)
            .json({ id: result.insertId, pseudo, age, email, role });
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
      password: Joi.string().max(15).required(),
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
                .cookie("access_token", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                })
                .status(200)
                .send({ id, pseudo });
            } else {
              res
                .status(403)
                .send("Le pseudo ou le mot de passe ne sont pas valides");
            }
          } catch (err) {
            res.status(500).send(`Erreur Interne avec bcrypt ${err}`);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
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
    res.clearCookie("access_token");
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
