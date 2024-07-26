const userVerification = async (req, res) => {
    res.status(200).json({"message": "user token verified"});
}

module.exports = { userVerification };