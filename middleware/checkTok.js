const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"]|| req.cookies.token;
  if (!token) {
    return res.status(409).json({
      Status: 409,
      Message: "Miss Token",
    });
  } else {
    try {
      const decode = jwt.verify(token, process.env.Secret);
      req.user = decode;
    } catch (err) {
      return res.status(400).send("invalid token");
    }
  }
  return next();
};
module.exports= verifyToken