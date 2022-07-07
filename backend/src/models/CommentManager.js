const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  static table = "Comment";

  insert(Comment) {
    return this.connection.query(
      `insert into ${CommentManager.table} (created_at, user_id, post_id,) values (?, ?, ?)`,
      [Comment.created_at, Comment.user_id, Comment.post_id]
    );
  }

  findAll() {
    return this.connection.query(`SELECT `);
  }

  update(Comment) {
    return this.connection.query(
      `update ${CommentManager.table} set  = ? where id = ?`,
      [Comment.created_at, Comment.user_id, Comment.post_id]
    );
  }
}

module.exports = CommentManager;
