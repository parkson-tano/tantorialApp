import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { API_URL } from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = async (userData) => {
    try {
        const res = await axios.post(`${API_URL}auth/login`, userData);
        const token = res.data.access;
        AsyncStorage.setItem('jwtToken', token);
        const decoded = jwt_decode(token);
        return decoded;

    } catch (err) {
        console.log(err);
        throw new Error(err.response ? err.response.data.detail : err.message); // throw an error with the message received from the server
    }
}

export const registerUser = async (userData) => {
    try {
        const res = await axios.post(`${API_URL}auth/register`, userData);
    } catch (err) {
        console.log(err);
        throw new Error(err.response ? err.response.data.email : err.message); // throw an error with the message received from the server
    }
}

export const logoutUser = () => {
    localStorage.removeItem('jwtToken');
}

export const getCurrentUser = () => {
    const token = AsyncStorage.getItem('jwtToken');
    if (token) {
        const decoded = jwt_decode(token);
        return decoded;
    }
    return null;
}