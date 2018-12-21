import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 30bcaccb65c2faf7a18cb3abfb9f7567eb761270a34c06f58e02ab3f00d9e9f3'
    }
});