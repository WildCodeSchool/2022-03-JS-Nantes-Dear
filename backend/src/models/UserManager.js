const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  findByMail(email) {
    return this.connection.query(
      `select * from ${UserManager.table} where email = ?`,
      [email]
    );
  }

  findByPseudo(pseudo) {
    return this.connection.query(
      `select * from ${UserManager.table} where pseudo = ?`,
      [pseudo]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, pseudo, age, email, role from ${UserManager.table}`
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, pseudo, password, age, role) values (?, ?, ?, ?, ?)`,
      [user.email, user.pseudo, user.hash, user.age, user.role]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set email = ?, pseudo = ?, age = ?, password = ?, role = ? where id = ?`,
      [user.email, user.pseudo, user.age, user.hash, user.role, user.id]
    );
  }
}

module.exports = UserManager;
