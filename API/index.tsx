import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reqres.in/',
});

export default {
    getUsers: () =>
    instance({
        method: 'GET',
        url: '/api/users?page=1'
    })
}