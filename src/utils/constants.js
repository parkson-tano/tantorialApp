import axios from 'axios';
import * as secureStore from 'expo-secure-store';

export const API_URL = "https://api.tantorial.com/";
export const IMG_URL = "https://api.tantorial.com";

// export const API_URL = "http://127.0.0.1:8000/";
// export const IMG_URL = "http://127.0.0.1:8000";

// const token = localStorage.getItem('jwtToken');

export const apiInstance = axios.create({
    baseURL: API_URL,
});

apiInstance.interceptors.request.use((config) => {
    const token = secureStore.getItemAsync('jwtToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});