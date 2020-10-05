import axios from 'axios';
import config from './index'

const api = axios.create({
    baseURL: config().api_estoque,
})
export default api;