const Joi = require("joi");
const models = require("../models");

class CommentController {
  static browse = (req, res) => {
    models.comment
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
    models.comment
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
    const comment = req.body;

    comment.id = parseInt(req.params.id, 10);

    models.comment
      .update(comment)
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
    const { content /* , user_id, post_id, created_at */ } = req.body;

    const [comment] = await models.comment.findByPost(content);

    if (comment.lenght) {
      res.status(409).send({
        error: "?",
      });
    }

    const validationErrors = Joi.object({
      content: Joi.string().max(155).require(),
    }).validate({ content }).error;

    if (validationErrors) {
      res.status(422).send(validationErrors);
      return;
    }

    models.comment
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
    models.comment
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

module.exports = CommentController;
