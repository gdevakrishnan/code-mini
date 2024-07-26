const express = require('express');
const app = express();
const cors = require('cors');
const userRouters = require('./routers/user/userRouters');

require('dotenv').config();
const { PORT } = process.env;

app.use(express.json({extended: false}));
app.use(cors({origin: "*", Credential: true, methods: ["GET", "POST", "PUT", "DELETE"]}));

app.listen(PORT, () => {
    console.log(`The Server was Listening: http://localhost:${PORT}`);
});

app.use("/code-mini/api", userRouters);