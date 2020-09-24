import React, { useCallback, useEffect, useState } from "react";
import Layout from "@/layouts/Layout";
import { list } from "@/api/today";
import { useHistory } from "react-router-dom";
import { List } from "antd-mobile";

const Item = List.Item;

export default () => {
    const [recordList, setRecordList] = useState([]);
    const history = useHistory();
    const toAddTodo = useCallback(() => {
        history.push("/todo/add");
    }, []);
    const loadList = useCallback(async () => {
        const recordList = await list();
        setRecordList(recordList);
    }, []);
    useEffect(() => {
        loadList();
        return () => { };
    }, []);
    return (
        <Layout
            title="今日待办"
            rightContent={[
                <i
                    key={0}
                    className="iconfont icon-add-select"
                    onClick={toAddTodo}
                    style={{ marginRight: "10px" }}
                ></i>,
            ]}
            back
        >
            <List>
                {recordList.map(({ id, todo_name, hours, total_cost }) => (
                    <Item
                        key={id}
                        arrow="horizontal"
                        extra={[
                            `${total_cost}/${hours}`,
                            total_cost === hours && <span key={1}>（已完成)</span>,
                        ]}
                        onClick={() => history.push(`/today/detail/${id}`)}
                    >
                        {todo_name}
                    </Item>
                ))}
            </List>
        </Layout>
    );
};
