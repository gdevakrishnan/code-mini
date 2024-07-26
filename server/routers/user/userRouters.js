const express = require('express');
const { getUser, verifyToken } = require('../../controllers/user/userControllers');
const routers = express.Router();

routers.get('/verify-user', verifyToken, getUser);

module.exports = ("userRouters", routers);