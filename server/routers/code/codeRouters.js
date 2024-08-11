const express = require('express');
const { code_review } = require('../../controllers/code/codeControllers');
const routers = express.Router();

routers.post('/code-review', code_review);

module.exports = ("codeRouters", routers);