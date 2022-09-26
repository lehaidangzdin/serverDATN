const jwtHelper = require("../helper/jwt.helper");

const accessTokenSecret =
  process.env.JWT_SECRET_KEY ||
  "access-token-secret-example-trungquandev.com-green-cat-a@";

module.exports = async function isAuth(req, res, next) {
  const tokenFromClient = req.headers["x-access-token"];

  if (tokenFromClient) {
    // Nếu tồn tại token
    try {
      const decoded = await jwtHelper.verifyToken(
        tokenFromClient,
        accessTokenSecret
      );
      req.jwtDecoded = decoded;
      next();
    } catch (error) {
      // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
      // return res.status(401).json({
      //   message: 'Unauthorized.',
      // });
      const user = {
        _id: 123,
        name: "abc",
        email: "examplemail@g.ail.com",
      };
      const newToken = await jwtHelper.generateToken(
        user,
        process.env.JWT_SECRET_KEY
      );
      console.log(newToken);
      return res.send(newToken);
    }
  } else {
    return res.status(403).send({
      message: "No token provided.",
    });
  }
};