const jwt = require('jsonwebtoken');
const promisify = require('util').promisify;


exports.signToken = async (id, secretSignature) => {
    try {
        const newToken = await jwt.sign({id: id}, secretSignature, {expiresIn: 60 });
        return newToken;
    } catch (error) {
        console.log(`Error in generate access token:  + ${error}`);
        return null;
    }
};