import React, { useCallback, useEffect, useState } from "react";
import Layout from "@/layouts/Layout";
import { find, recordList } from "@/api/today";
import { useHistory } from "react-router-dom";
import { List } from "antd-mobile";

const Item = List.Item;

export default ({ match }) => {
    const id = match.params.id;
    const history = useHistory();
    const [detail, setDetail] = useState({});
    const [list, setList] = useState([]);

    const toAdd = useCallback(() => {
        const { todo_id } = detail
        history.push(`/today/costAdd/${id}/${todo_id}`);
    }, [detail]);
    const loadDetail = useCallback(async () => {
        const detail = await find({ id });
        setDetail(detail);
    }, []);
    const loadRecordList = useCallback(async () => {
        const res = await recordList({ id });
        setList(res);
    }, []);
    useEffect(() => {
        loadDetail();
        loadRecordList();
        return () => { };
    }, []);
    return (
        <Layout
            title="任务详情"
            rightContent={[
                <i key={0} className="iconfont icon-add-select" onClick={toAdd}></i>,
            ]}
            back
        >
            <List renderHeader={() => "任务信息"}>
                <Item extra={detail.todo_name}>标题</Item>
                <Item extra={detail.hours}>花费</Item>
                <Item extra={detail.total_cost}>当前花费</Item>
                <Item extra={detail.current_date}>日期</Item>
            </List>
            <List renderHeader={() => "花费记录"}>
                {list.map(({ id, cost, start_time, end_time }) => (
                    <Item key={id} extra={cost}>
                        {start_time}-{end_time}
                    </Item>
                ))}
            </List>
        </Layout>
    );
};
