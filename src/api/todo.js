import {
    get,
    post
} from '@/plugins/axios'

export const list = (params) => get('/list', params)

export const add = (params) => post('/add', params)

export const find = (params) => get('/find', params)

export const update = (params) => post('/update', params)

export const del = (params) => get('/del', params)
