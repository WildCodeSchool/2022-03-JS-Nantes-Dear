const jwt = require("jsonwebtoken");

class authMiddleware {
  static authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return res.sendStatus(401);
    }
    try {
      const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);
      // console.log(data)
      req.userId = data.id;
      req.userRole = data.role;
      return next();
    } catch {
      return res.sendStatus(401);
    }
  };
}
module.exports = authMiddleware;
