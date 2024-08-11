const express = require('express');
const { code_review, code_debug } = require('../../controllers/code/codeControllers');
const routers = express.Router();

routers.post('/code-review', code_review);
routers.post('/code-debug', code_debug);

module.exports = ("codeRouters", routers);