const express = require('express');
const router = express.Router();
const verifyToken = require('../Services/authentication').verifyToken;
const { loginService } = require('../Services');

router.post(``, verifyToken, (req, res, next) => {
    const auth = loginService.login({ email: req.body.email, password: req.body.pass });

    res.status(200).json(auth);
});


module.exports = router;