import React, { useState, useEffect, useCallback } from "react";
import { List, NavBar, Icon } from "antd-mobile";
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

  useEffect(() => {
    loadList();
    return () => {};
  }, []);

  return (
    <div>
      <NavBar
        mode="dark"
        rightContent={[<Icon key="0" type="search" onClick={toAdd} />]}
      >
        待办事项
      </NavBar>
      <List>
        {todoList.map(({ id, todo_name }) => (
          <Item key={id} arrow="horizontal">
            {todo_name}
          </Item>
        ))}
      </List>
    </div>
  );
};
