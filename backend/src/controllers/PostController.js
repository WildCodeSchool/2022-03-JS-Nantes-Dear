/* eslint-disable no-undef */
/* eslint-disable camelcase */
const Joi = require("joi");
const models = require("../models");

class PostController {
  static browse = (req, res) => {
    models.post
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.post
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const post = req.body;

    post.id = parseInt(req.params.id, 10);

    models.post
      .update(post)
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

  static add = async (req, res) => {
    const { content } = req.body;

    const [post] = await models.post.findByPseudo(user_id);

    if (post.lenght) {
      res.status(409).send({
        error: "?",
      });
    }

    const validationErrors = Joi.object({
      content: Joi.string().max(255).required(),
    }).validate({ content }).error;

    if (validationErrors) {
      res.status(422).send(validationErrors);
      return;
    }

    models.post
      .insert({
        content,
        userId: user_id,
        createdAt: created_at,
      })
      .then(([result]) => {
        res.status(201).send({
          id: result.insertId,
          content,
          userId: user_id,
          createdAt: created_at,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static delete = (req, res) => {
    models.post
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

module.exports = PostController;
