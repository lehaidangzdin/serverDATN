const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET_KEY
const response = require("../helper/response")

//
// module.exports = (req, res, next) => {
//     const authToken = req.headers['auth-token'];
//     const refreshToken = req.headers['refresh-token'];
//     if (!authToken && !refreshToken) return response.ErrorResponse(res, "Access Denied");
//
//     try {
//         jwt.verify(authToken, jwtSecret, async (err, decoded) => {
//                 // if (err) {
//                 // if (err.message === "jwt expired") {
//                 //     let id;
//                 //     try {
//                 //         id = decoded.id;
//                 //     } catch (e) {
//                 //         return response.ErrorResponse(res, "Token is valid")
//                 //     }
//                 //     const useR = await userModel.findAll({
//                 //         where: {
//                 //             id: id
//                 //         }
//                 //     })
//                 //     if (useR[0].refreshToken === refreshToken) {
//                 //         const newToken = await jwtHelper.signToken(id, jwtSecret)
//                 //         await userModel.update({
//                 //                 token: newToken,
//                 //             },
//                 //             {
//                 //                 where: {
//                 //                     id: id
//                 //                 }
//                 //             })
//                 //         next()
//                 //     } else return response.ErrorResponse(res, err.message)
//                 // } else if (err) {
//                 //     return response.ErrorResponse(res, err.message)
//                 // }
//
//                 // req.id = decoded
//                 // next();
//                 if (!err) {
//                     next()
//                 }
//             }
//         );
//     } catch (err) {
//         return response.ErrorResponse(res, err);
//     }
// };

module.exports = async (req, res, next) => {
    const authToken = req.headers['auth-token'];
    if (!authToken) {
        return response.ErrorResponse(res, "Token invalid")

    }
    console.log(authToken)
    try {
        jwt.verify(authToken, jwtSecret, function (err, decode) {
            if (err) {
                return response.ErrorResponse(res, err.message)
            } else {
                next()
            }
        })
    } catch (error) {
        console.log(`Error in generate access token:  + ${error}`);
        return response.ErrorResponse(res, error.message)
    }
}

