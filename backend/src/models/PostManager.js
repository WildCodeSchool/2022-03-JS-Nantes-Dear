const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  static table = "post";

  findByPseudo(id) {
    return this.connection.query(
      `select post.*, user.pseudo AS user FROM ${PostManager.table} JOIN user ON post.id= post.user_id WHERE post.id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, content, user_id, category_id, created_at, nbr_post, nbr_signals from ${PostManager.table}`
    );
  }

  insert(post) {
    return this.connection.query(
      `insert into ${PostManager.table} (content, user_id, category_id, created_at) values (?, ?, ?, ?)`,
      [post.content, post.user_id, post.category_id, post.created_at]
    );
  }

  update(post) {
    return this.connection.query(
      `update ${PostManager.table} set content = ?, user_id = ?, category_id = ?, created_at = ? where id = ?`,
      [post.content, post.user_id, post.category_id, post.created_at]
    );
  }
}

module.exports = PostManager;
