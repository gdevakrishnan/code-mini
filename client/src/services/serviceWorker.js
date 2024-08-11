import Axios from 'axios'

const BASE_URL = "http://localhost:5000/code-mini/api";

// To verify the token and get user details
export const verifyUserAndGetUser = async (token) => {
    try {
        const task = await Axios.get(`${BASE_URL}/verify-user`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const response = {
            uname: task.data.user.displayName,
            gmail: task.data.user.email,
            photoUrl: task.data.user.photoURL,
            id: task.data.user.uid
        }
        return response;
    } catch (e) {
        console.error('Error:', e.message);
        throw e;
    }
}

// To get review of the code
export const getCodeReview = async (code) => {
    try {
        // const task = await Axios.get(`${BASE_URL}/code/code-review`, {code});
        const task = await fetch(`${BASE_URL}/code/code-review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
        });
        const response = await task.json();
        return response
    } catch (e) {
        console.error('Error:', e.message);
        throw e;
    }
}

// To debug the code and make the code more efficient
export const toCodeDebug = async (code) => {
    try {
        // const task = await Axios.get(`${BASE_URL}/code/code-review`, {code});
        const task = await fetch(`${BASE_URL}/code/code-debug`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
        });
        const response = await task.json();
        return response
    } catch (e) {
        console.error('Error:', e.message);
        throw e;
    }
}

// To add the comment to the code
export const toCodeComment = async (code) => {
    try {
        const task = await fetch(`${BASE_URL}/code/code-comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
        });
        const response = await task.json();
        return response
    } catch (e) {
        console.error('Error:', e.message);
        throw e;
    }
}

// To execute the code and get sample outputs from the google gemini ai
export const toCodeExecute = async (code) => {
    try {
        const task = await fetch(`${BASE_URL}/code/code-execute`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
        });
        const response = await task.json();
        return response
    } catch (e) {
        console.error('Error:', e.message);
        throw e;
    }
}