import {
    get,
    post
} from '@/plugins/axios'

export const list = (params) => get('/today/list', params)

export const find = (params) => get('/today/find', params)

export const recordList = (params) => get('/today/recordList', params)

export const addCost = (params) => post('/today/addCost', params)
