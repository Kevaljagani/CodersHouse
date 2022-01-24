import axios from 'axios';
// require('dotenv').config();

const api = axios.create({
    baseURL: 'http://localhost:5500',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});


//endpoints

export const sendOtp = (data) => api.post('/api/send-otp', data);


export default api;