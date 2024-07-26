const express = require('express');
const { userVerification } = require('../../controllers/user/userControllers');
const routers = express.Router();

routers.get('/verify-token', userVerification);

module.exports = ("userRouters", routers);