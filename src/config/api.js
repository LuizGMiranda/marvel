import axios from "axios";

export function createQueryParams(data = {}) {
    const apiKey = '4fecb98ecd296ba541ceaf1befc32f0b'
    const params = new URLSearchParams();
    params.append('apikey', apiKey);
    for (var prop in data) {
        params.append(`${prop}`, data[prop]);
    }

    return '?' + params;
}

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    timeout: 10000,
});

export default api
