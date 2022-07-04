class isAdminMiddleware {
  static isAdmin = (req, res, next) => {
    // console.log(req.userRole)
    if (req.userRole === "ROLE_ADMIN") {
      return next();
    }
    return res.sendStatus(403);
  };
}
module.exports = isAdminMiddleware;
