import {
    get,
    post
} from '@/plugins/axios'

export const list = (params) => get('/todo/list', params)

export const add = (params) => post('/todo/add', params)

export const find = (params) => get('/todo/find', params)

export const update = (params) => post('/todo/update', params)

export const del = (params) => get('/todo/del', params)
