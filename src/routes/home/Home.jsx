
import React from 'react'
import Layout from '@/layouts/Layout'
import { Grid } from 'antd-mobile'
import { useHistory } from 'react-router-dom'

const Icons = [
    {
        path: '/today/list',
        icon: '',
        text: '今日待办'
    },
    {
        path: '/todo/list',
        icon: '',
        text: '待办事项'
    }
]

export default () => {
    const history = useHistory()
    const renderItem = (dataItem) => {
        return <div style={{ padding: '12.5px' }}>
            <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                <span>{dataItem.text}</span>
            </div>
        </div>
    }
    const onClick = (obj) => {
        history.push(obj.path)
    }
    return <Layout title="首页">
        <Grid data={Icons} columnNum={2} renderItem={renderItem} onClick={onClick} />
    </Layout>
}
