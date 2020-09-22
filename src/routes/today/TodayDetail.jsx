import React, { useCallback, useEffect, useState } from "react";
import Layout from "@/layouts/Layout";
import { find, recordList } from "@/api/today";
import { useHistory } from "react-router-dom";
import { List } from "antd-mobile";

const Item = List.Item;

export default ({ match }) => {
  const id = match.params.id;
  const [detail, setDetail] = useState({});
  const [list, setList] = useState([]);
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
    return () => {};
  }, []);
  return (
    <Layout title="任务详情">
      <List renderHeader={() => "任务信息"}>
        <Item extra={detail.todo_name}>标题</Item>
        <Item extra={detail.hours}>花费</Item>
        <Item extra={detail.total_cost}>当前花费</Item>
        <Item extra={detail.current_date}>日期</Item>
      </List>
      <List renderHeader={() => "花费记录"}>
        {list.map(({ id, cost }) => (
          <Item key={id} extra={cost}>
            花费
          </Item>
        ))}
      </List>
    </Layout>
  );
};
