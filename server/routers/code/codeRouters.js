const express = require('express');
const { code_review, code_debug, code_comment, code_execute } = require('../../controllers/code/codeControllers');
const routers = express.Router();

routers.post('/code-review', code_review);
routers.post('/code-debug', code_debug);
routers.post('/code-comment', code_comment);
routers.post('/code-execute', code_execute);

module.exports = ("codeRouters", routers);