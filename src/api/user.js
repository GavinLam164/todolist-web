import {
    get,
    post
} from '@/plugins/axios'

export const register = (params) => post('/user/register', params)

export const login = (params) => post('/user/login', params)
