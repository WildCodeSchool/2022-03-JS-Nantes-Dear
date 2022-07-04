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
    const { content /*, user_id, category_id, created_at*/ } = req.body;

    const [post] = await models.post.findByPost(content);

    if (post.lenght) {
      res.status(409).send({
        error: "?",
      });
    }

    const validationErrors = Joi.object({
      content: Joi.string().max(255).require(),
    }).validate({ content }).error;

    if (validationErrors) {
      res.status(422).send(validationErrors);
      return;
    }

    models.post
      .insert(content)
      .then(([result]) => {
        res.status(201).send({ id: result.insertId, content });
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
