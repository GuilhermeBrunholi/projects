require('dotenv').config();
const jwt = require('jsonwebtoken');
const { authModel } = require('../Models');

function auth(id) {
    const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: process.env.EXPIRE_TOKEN });
    return token;
}

function verifyJWT(token) {
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        return new authModel(true, decoded);
    } catch (error) {
        console.error(error);
        return new authModel(false, error);
    }
}

function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    const isValid = verifyJWT(token);

    isValid.Auth ? next() : res.status(403);
}

module.exports = { auth, verifyToken };
