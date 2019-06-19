import axios from 'axios';
import Feed from '../pages/Feed';

const api = axios.create({
    // Em /pages/Feed.js deve-se configurar o mesmo endereço
    baseURL: 'http://192.168.10.134:3333'
})

export default api;