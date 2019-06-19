import axios from "axios";

const api = axios.create({
//colcoar o IP do host
    baseURL: 'http://192.168.10.134:3333',
});

export default api;