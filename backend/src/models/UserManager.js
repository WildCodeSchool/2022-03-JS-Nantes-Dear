const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "User";

  // TODO complete the `findByMail` method
  findByMail(email) {
    return this.connection.query(
      `select * from ${UserManager.table} where email = ?`,
      [email]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password, role) values (?, ?, ?)`,
      [user.email, user.password, user.role]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set title = ? where id = ?`,
      [user.title, user.id]
    );
  }
}

module.exports = UserManager;
