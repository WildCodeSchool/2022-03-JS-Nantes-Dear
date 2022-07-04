const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  static table = "post";

  findByPost(post) {
    return this.connection.query(`select * from ${post.table} where post = ?`, [
      post,
    ]);
  }

  findAll() {
    return this.connection.query(
      `select id, user_id, category_id from ${PostManager.table}`
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
