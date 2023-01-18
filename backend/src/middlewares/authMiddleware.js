const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const token = req.cookies.jwt;
  console.error(`Token reçu : ${token}`);
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const user = jwt.verify(token, process.env.JWT_AUTH_SECRET);
    req.user = user; // ici, renvoie les données non cryptées qui sont inscrites ligne 83 du usercontroller

    console.error(user);

    return next();
  } catch (err) {
    return res.sendStatus(401).json({ error: err.message });
  }
};

const isAdmin = (req, res, next) => {
  const { user } = req; // ici il renvoie le req.user ci-dessus et notamment le role défini comme non crypté dans jwt.sign de la méthode login ligne 83
  if (user.role === "ROLE_ADMIN") {
    return next();
  }
  return res.status(403).send("Not an Admin, sorry !");
};
module.exports = { authorization, isAdmin };
