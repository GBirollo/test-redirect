import axios from 'axios';
import appURLs from '@/app/config/config';

const api = axios.create({
    baseURL: appURLs.homolog.servidorerp
})

export default api;