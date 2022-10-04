// const UserModel = require("../models/db_config").user;
// const randomString = require("randomstring");
// const SECRET_KEY = process.env.JWT_SECRET_KEY;
// const response = require("../helper/response");
// const bcrypt1 = require("bcrypt");
// const jwtHelper = require("../helper/jwt.helper");
//
// class AuthController {
//   async login(req, res) {
//     try {
//       const username = req.body.username.toLowerCase() || "test";
//       const password = req.body.password || "12345";
//
//       let data = await UserModel.findAll({
//         where: {
//           username: username,
//         },
//       });
//
//       if (data.length === 0) {
//         return response.ErrorResponse(res, "Ten dang nhap khong ton tai!");
//       }
//       const isPasswordValid = await bcrypt1.compare(password, data[0].password);
//
//       if (!isPasswordValid) {
//         return response.ErrorResponse(res, "Mat khau k chinh xac!");
//       }
//       // const token = jwt.sign({id: data[0].id}, SECRET_KEY, {expiresIn: 60 * 60 * 24});
//       const token = await jwtHelper.signToken(data[0].id, SECRET_KEY);
//       const refreshToken = await randomString.generate(30);
//       await UserModel.update(
//         {
//           token: token,
//           refreshToken: refreshToken,
//         },
//         {
//           where: {
//             id: data[0].id,
//           },
//         }
//       );
//
//       let user = {
//         id: data[0].id,
//         username: data[0].userName,
//         keyApi: data[0].keyApi,
//         token: token,
//         refreshToken: refreshToken,
//       };
//       return response.successResponseWithData(res, "Success", user);
//     } catch (e) {
//       console.log(e);
//       return response.ErrorResponse(res, "Something went wrong!");
//     }
//   }
//
//   async register(req, res) {
//     try {
//       // if (req.body != null) return response.ErrorResponse(res, "not null field")
//       const salt1 = await bcrypt1.genSalt(12);
//       const key = await randomString.generate(20);
//       const srect = await bcrypt1.hash(key, salt1);
//       console.log(srect);
//
//       const username = req.body.username.toLowerCase();
//       const password = req.body.password.toLowerCase();
//       console.log(req.body);
//       if (username.length <= 0 || password.length <= 0)
//         return response.ErrorResponse(res, "not null field");
//
//       const user = await UserModel.findAll({
//         where: {
//           username: username,
//         },
//       });
//       if (user.length > 0)
//         return response.ErrorResponse(res, "Tai khoan da ton tai!");
//
//       const salt = await bcrypt1.genSalt(12);
//       const hashPassword = await bcrypt1.hash(password, salt);
//       const keyApi = await randomString.generate(20);
//
//       const userCre = await UserModel.create({
//         userName: username,
//         password: hashPassword,
//         salt: salt,
//         keyApi: keyApi,
//       });
//       if (userCre) {
//         let resData = {
//           id: userCre.id,
//           username: userCre.userName,
//           keyApi: userCre.keyApi,
//           updatedAt: userCre.updatedAt,
//           createdAt: userCre.createdAt,
//         };
//         return response.successResponseWithData(res, "success", resData);
//       } else {
//         return response.ErrorResponse(res, "Co loi khi tao tai khoan");
//       }
//     } catch (e) {
//       return response.ErrorResponse(res, e.message);
//     }
//   }
// }
//
// module.exports = new AuthController();
