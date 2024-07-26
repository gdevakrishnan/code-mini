const admin = require('firebase-admin');

// To verify the token
const verifyToken = async (req, res, next) => {
    const idToken = req.headers.authorization?.split('Bearer ')[1];

    if (!idToken) return res.status(401).json({ message: 'No token provided.' });

    try {
        req.user = await admin.auth().verifyIdToken(idToken);
        next();
    } catch {
        res.status(401).json({ message: 'Invalid token.' });
    }
};

// Get user details from the verified token
const getUser = async (req, res) => {
    try {
        const userRecord = await admin.auth().getUser(req.user.uid);
        res.status(200).json({ user: userRecord.toJSON() });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data.', error });
    }
};

module.exports = { verifyToken, getUser };