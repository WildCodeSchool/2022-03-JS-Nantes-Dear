const Joi = require("joi");
const dayjs = require("dayjs");
const jwt = require("jsonwebtoken");
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
    const { content, categoryId } = req.body;
    const { accessToken } = req.body;
    const user = jwt.verify(accessToken, process.env.JWT_AUTH_SECRET);

    const validationErrors = Joi.object({
      content: Joi.string().max(255).required(),
      categoryId: Joi.number().required(),
    }).validate({ content, categoryId }).error;

    if (validationErrors) {
      res.status(422).send(validationErrors);
      return;
    }

    models.post
      .insert({
        content,
        userId: user.id,
        categoryId: parseInt(categoryId, 10),
        createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        likers: 0,
        signals: 0,
      })
      .then(([result]) => {
        res.status(201).send({
          ...result,
          id: result.insertId,
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
