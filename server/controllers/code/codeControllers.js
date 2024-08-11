const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const code_review = async (req, res) => {
    try {
        const { code } = req.body;
        const prompt = `
            ${code}\n\n
            give me the review of the above code in minim 150.
            give me the response in html format
            Note: Use only h1 h2 h3 ul ol li p and a tags. Do not use body and other tags. Do not use escape sequence charachters like forward-slash n. Do not give the title "Code Review". Do not make 'undefined'"
        `;

        const result = await model.generateContent(prompt);
        const response = result.response.text();
        
        res.status(200).json({ "data":  response});
    }   catch (e) {
        res.status(400).json({ "error": e.message });
    }
}

module.exports = { code_review };