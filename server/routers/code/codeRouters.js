const express = require('express');
const { code_review, code_debug, code_comment } = require('../../controllers/code/codeControllers');
const routers = express.Router();

routers.post('/code-review', code_review);
routers.post('/code-debug', code_debug);
routers.post('/code-comment', code_comment);

module.exports = ("codeRouters", routers);