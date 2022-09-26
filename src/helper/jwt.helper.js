const jwt = require("jsonwebtoken");

const generateToken = async (user, secretSignature) => {
  // Định nghĩa những thông tin của user mà bạn muốn lưu vào token ở đây
  const key = user.name;

  return await jwt.sign(
    {
      data:key,
    },
    secretSignature,
    { expiresIn: "0.5h" }
  );
};
let verifyToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        return reject(error);
      }
      resolve(decoded);
    });
  });
};

module.exports = {
  generateToken: generateToken,
  verifyToken: verifyToken,
};
