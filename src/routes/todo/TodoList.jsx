import React, { useState, useEffect, useCallback } from "react";
import { List, NavBar, Icon } from "antd-mobile";
import Layout from "@/layouts/Layout";
import { list } from "@/api/todo";

const Item = List.Item;

export default ({ history }) => {
  const [todoList, setTodoList] = useState([]);
  const loadList = useCallback(async () => {
    const res = await list();
    setTodoList(res);
  }, []);

  const toAdd = useCallback(() => {
    history.push("/todo/add");
  }, []);

  const toEdit = useCallback((id) => {
    history.push({
      pathname: `/todo/edit/${id}`,
    });
  }, []);

  useEffect(() => {
    loadList();
    return () => {};
  }, []);

  return (
    <div>
      <Layout
        title="待办事项"
        rightContent={[<Icon key="0" type="search" onClick={toAdd} />]}
      >
        <List>
          {todoList.map(({ id, todo_name }) => (
            <Item key={id} arrow="horizontal" onClick={toEdit.bind(null, id)}>
              {todo_name}
            </Item>
          ))}
        </List>
      </Layout>
    </div>
  );
};
