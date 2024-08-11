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