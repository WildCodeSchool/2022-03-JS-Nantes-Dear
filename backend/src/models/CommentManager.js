const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  static table = "comment";

  findByPost(comment) {
    return this.connection.query(
      `select * from ${comment.table} where comment = ?`,
      [comment]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, user_id, post_id from ${CommentManager.table}`
    );
  }

  insert(comment) {
    return this.connection.query(
      `insert into ${CommentManager.table} (user_id, post_id, created_at) values (?, ?, ?)`,
      [comment.user_id, comment.post_id, comment.created_at]
    );
  }

  update(comment) {
    return this.connection.query(
      `update ${CommentManager.table} set user_id = ?, post_id = ?, created_at = ? where id = ?`,
      [comment.user_id, comment.post_id, comment.created_at]
    );
  }
}

module.exports = CommentManager;
