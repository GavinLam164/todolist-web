import React, { useState, useEffect, useCallback, Fragment } from "react";
import {
  List,
  Icon,
  Checkbox,
  Modal,
  WhiteSpace,
  WingBlank,
  Button,
} from "antd-mobile";
import Layout from "@/layouts/Layout";
import { list, del } from "@/api/todo";

const Item = List.Item;
const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

export default ({ history }) => {
  const [todoList, setTodoList] = useState([]);
  const [isDeleted, setDeleted] = useState(false);
  const [selectIds, setSelectIds] = useState([]);

  console.log(selectIds);
  const updateSelectId = useCallback(
    (isSelected, id) => {
      console.log(selectIds);
      if (isSelected) {
        setSelectIds(selectIds.concat([id]));
      } else {
        const index = selectIds.indexOf(id);
        selectIds.splice(index, 1);
        setSelectIds([...selectIds]);
      }
    },
    [selectIds]
  );

  const toggleDeleted = useCallback(() => {
    setDeleted(!isDeleted);
  }, [isDeleted]);

  const loadList = useCallback(async () => {
    const res = await list();
    setTodoList(res);
  }, []);

  const deleteSelectIds = useCallback(() => {
    alert("Delete", "Are you sure???", [
      {
        text: "Cancel",
      },
      {
        text: "Ok",
        onPress: async () => {
          await del({
            ids: selectIds.join(","),
          });
          setSelectIds([]);
        },
      },
    ]);
  }, [selectIds]);

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
        rightContent={[
          <i
            class="iconfont icon-add-select"
            onClick={toAdd}
            style={{ marginRight: "10px" }}
          ></i>,
          <i class="iconfont icon-sami-select" onClick={toggleDeleted}></i>,
        ]}
      >
        <List>
          {isDeleted
            ? todoList.map(({ id, todo_name }) => (
                <CheckboxItem
                  key={id}
                  onChange={(e) => updateSelectId(e.target.checked, id)}
                >
                  {todo_name}
                </CheckboxItem>
              ))
            : todoList.map(({ id, todo_name }) => (
                <Item
                  key={id}
                  arrow="horizontal"
                  onClick={toEdit.bind(null, id)}
                >
                  {todo_name}
                </Item>
              ))}
          {isDeleted && todoList.length > 0 && (
            <Fragment>
              <WhiteSpace />
              <WingBlank>
                <Button type="warning" onClick={deleteSelectIds}>
                  删除
                </Button>
              </WingBlank>
            </Fragment>
          )}
        </List>
      </Layout>
    </div>
  );
};
