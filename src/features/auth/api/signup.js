import api from "../../../lib/axios";

export const signupUser = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        return response.data;
    }
    catch (error) {
        const message = error.response?.data?.message || "Something went wrong";
        throw new Error(message);
    }
}