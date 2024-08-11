import Axios from 'axios'

const BASE_URL = "http://localhost:5000/code-mini/api";

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
    } catch (error) {
        console.error('Error verifying user:', error);
        throw error;
    }
}