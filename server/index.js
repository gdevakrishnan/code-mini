const express = require('express');
const app = express();
const cors = require('cors');
const admin = require('firebase-admin');
const userRouters = require('./routers/user/userRouters');
const codeRouters = require('./routers/code/codeRouters');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));
app.use(cors({ origin: "*", Credential: true, methods: ["GET", "POST", "PUT", "DELETE"] }));

// Initialize firebase admin
admin.initializeApp({
    credential: admin.credential.cert({
        type: 'service_account',
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.FIREBASE_CLIENT_EMAIL}`
    })
});

app.listen(PORT, () => {
    console.log(`The Server was Listening: http://localhost:${PORT}`);
});

app.use("/code-mini/api", userRouters);
app.use("/code-mini/api/code", codeRouters);