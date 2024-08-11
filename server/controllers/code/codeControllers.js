const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// To get the review of the code
const code_review = async (req, res) => {
    try {
        const { code } = req.body;
        const prompt = `
            ${code}\n\n
            give me the review of the above code in minim 150.
            give me the response in html format
            Note: Use only h1 h2 h3 ul ol li p and a tags. Do not use body and other tags. Do not use escape sequence charachters like forward-slash n. Do not give the title "Code Review". Do not make 'undefined'. Do not give the sample code."
        `;

        const result = await model.generateContent(prompt);
        const response = result.response.text();
        
        res.status(200).json({ "data":  response});
    }   catch (e) {
        res.status(400).json({ "error": e.message });
    }
}

// To debug and rewrite the code to make the code more efficient
const code_debug = async (req, res) => {
    try {
        const { code } = req.body;
        const prompt = `
            ${code}\n\n
            Debug and rewrite the above code, to make the code more efficient and optimized.
            Only code. Do not give explanation of the code. 
            Note: Do not mention the language.
        `;

        const result = await model.generateContent(prompt);
        const response = result.response.text();
        
        res.status(200).json({ "data":  response});
    }   catch (e) {
        res.status(400).json({ "error": e.message });
    }
}

// To add comments to the code
const code_comment = async (req, res) => {
    try {
        const { code } = req.body;
        const prompt = `
            ${code}\n\n
            Debug and give comments to the code, to make the code more understandable
            Note: Give only the code do not explain the code. Give minimum ammounts of comment.
        `;

        const result = await model.generateContent(prompt);
        const response = result.response.text();
        
        res.status(200).json({ "data":  response});
    }   catch (e) {
        res.status(400).json({ "error": e.message });
    }
}

// To execute the code and generate the sample outputs from the Google gemini ai
const code_execute = async (req, res) => {
    try {
        const { code } = req.body;
        const prompt = `
            ${code}\n\n
            Give me the output of the above code.
            Give minimum 1 output and maximum 5 outputs for the above code.
            Give space between each outputs by using br tags.
            Give the user inputs also to display how to give the input, if input is necessary.
            Note: Use only p tag. Do not use body and other tags. Do not use escape sequence charachters like forward-slash n. Do not make 'undefined'"
        `;

        const result = await model.generateContent(prompt);
        const response = result.response.text();
        
        res.status(200).json({ "data":  response});
    }   catch (e) {
        res.status(400).json({ "error": e.message });
    }
}

module.exports = { code_review, code_debug, code_comment, code_execute };