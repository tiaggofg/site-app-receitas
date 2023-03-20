import axios from "axios";

const api = axios.create({
    baseURL: 'http://13.82.177.178:8080'
});

export default api;