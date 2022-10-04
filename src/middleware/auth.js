const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET_KEY
const userModel = require("../models/db_config").user
const response = require("../helper/response")
const jwtHelper = require("../helper/jwt.helper")


module.exports = (req, res, next) => {
    const authToken = req.headers['auth-token'];
    const refreshToken = req.headers['refresh-token'];
    if (!authToken && !refreshToken) return response.ErrorResponse(res, "Access Denied");

    try {
        jwt.verify(authToken, jwtSecret, async (err, decoded) => {
                // if (err) {
                if (err.message === "jwt expired") {
                    let id;
                    try {
                        id = decoded.id;
                    } catch (e) {
                        return response.ErrorResponse(res, "Token is valid")
                    }
                    const useR = await userModel.findAll({
                        where: {
                            id: id
                        }
                    })
                    if (useR[0].refreshToken === refreshToken) {
                        const newToken = await jwtHelper.signToken(id, jwtSecret)
                        await userModel.update({
                                token: newToken,
                            },
                            {
                                where: {
                                    id: id
                                }
                            })
                        next()
                    } else return response.ErrorResponse(res, err.message)
                } else if (err) {
                    return response.ErrorResponse(res, err.message)
                }

                req.id = decoded
                next();


            }
        );
    } catch (err) {
        return response.ErrorResponse(res, err);
    }
};

