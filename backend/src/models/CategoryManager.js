const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  static table = "category";

  findAll() {
    return this.connection.query(
      `select id, name, color from ${CategoryManager.table}`
    );
  }

  insert(category) {
    return this.connection.query(
      `insert into ${CategoryManager.table} (name, couleur) values (?, ?)`,
      [category.name, category.couleur]
    );
  }

  update(category) {
    return this.connection.query(
      `update ${CategoryManager.table} set name = ?, couleur = ? where id = ?`,
      [category.name, category.couleur, category.id]
    );
  }
}

module.exports = CategoryManager;
