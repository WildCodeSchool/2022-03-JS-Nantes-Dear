const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  static table = "post";

  findByPseudo(userId) {
    return this.connection.query(
      `select post.*, user.pseudo AS pseudo FROM ${PostManager.table} JOIN user ON post.id= post.userId WHERE post.id = ?`,
      [userId]
    );
  }

  findByCategory(category) {
    return this.connection.query(
      `select * FROM ${PostManager.table} JOIN category ON post.id = post.categoryId WHERE post.id = ?`,
      [category]
    );
  }

  findAll() {
    return this.connection.query(
      `select post.*, category.name AS category, user.pseudo AS user FROM ${PostManager.table} JOIN category ON category.id= post.categoryId JOIN user ON user.id=post.userId`
    );
  }

  insert(post) {
    return this.connection.query(
      `insert into ${PostManager.table} (content, userId, categoryId, createdAt, likers, signals) values (?, ?, ?, ?, ?, ?)`,
      [
        post.content,
        post.userId,
        post.categoryId,
        post.createdAt,
        post.likers,
        post.signals,
      ]
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
