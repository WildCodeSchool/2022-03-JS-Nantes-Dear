const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  static table = "post";

  findByPseudo(userId) {
    return this.connection.query(
      `select post.*, user.pseudo AS pseudo FROM ${PostManager.table} JOIN user ON post.id= post.user_id WHERE post.id = ?`,
      [userId]
    );
  }

  findByCategory(category) {
    return this.connection.query(
      `select post.*, category.name AS name FROM ${PostManager.table} JOIN category ON post.id = post.category_id WHERE post.id = ?`,
      [category]
    );
  }

  findAll() {
    return this.connection.query(`select id, name, color ${PostManager.table}`);
  }

  insert(post) {
    return this.connection.query(
      `insert into ${PostManager.table} (content, category_id) values (?, ?)`,
      [post.content, post.category_id]
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
