import axios from "axios";
import {
    Toast
} from 'antd-mobile'

const instance = axios.create({
    baseURL: "/api",
    withCredentials: true,
});

instance.interceptors.response.use((config) => {
    return config.data;
});

const hanldeError = (data) => {
    if (data.code !== 200) {
        Toast.fail(data.message, 2)
        return Promise.reject()
    }
    return Promise.resolve(data.data)
}

export const get = (url, params) =>
    instance.get(url, {
        params,
    }).then(hanldeError);

export const post = (url, params) =>
    instance.post(url, params)
    .then(hanldeError);
