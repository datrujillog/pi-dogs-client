import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const instance = axios.create({
    baseURL: process.env.REACT_APP_API || "https://pi-dogs-api.vercel.app"
});

export default instance;

// http://localhost:3001
// https://dogs-api-diego.herokuapp.com