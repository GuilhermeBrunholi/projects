const express = require('express');
const router = express.Router();

const verifyToken = require('../Services/authentication').verifyToken;

const validateUserService = require('../Services/ValidateUserService');
const db = require('../Data/crud')

router.post(`/login`, verifyToken, (req, res, next) => {
    res.status(200).json('foi');
});

router.get(`/validate`, verifyToken, (req, res, next) => {
    res.status(200);
})

router.get(`/create`, (req, res, next) => {
    res.status(200).json(validateUserService.exampleCreateUser());
});

router.post(`/create`, async (req, res, next) => {
    let valid = validateUserService.validate(req.body);
    if (valid.isValidate) {
        let user = valid.userModel;
        try {
            await db.create('Users', user);
            return res.status(200).json({ token: user.Password });
        } catch (error) {
            return res.status(500).send({ message: error });
        }
    } 
    return res.status(500).send();
});


module.exports = router;
