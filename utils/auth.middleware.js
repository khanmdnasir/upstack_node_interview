const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Expecting "Bearer <token>"
  if (!token)
    return res.status(401).json({ message: "Access token is missing" });

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user; // Attach the user to the request object
    next();
  });
};

module.exports = { authToken };
