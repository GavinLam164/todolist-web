import React, { useState, useEffect, useCallback, Fragment } from "react";
import {
    List,
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

    const updateSelectId = useCallback(
        (isSelected, id) => {
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
        alert("删除待办事项", "删除待办事项会将每日待办以及花费记录清除，确认删除?", [
            {
                text: "取消",
            },
            {
                text: "确认",
                onPress: async () => {
                    await del({
                        ids: selectIds.join(","),
                    });
                    setSelectIds([]);
                    setDeleted(false);
                    loadList();
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
        return () => { };
    }, []);

    return (
        <div>
            <Layout
                title="待办事项"
                rightContent={[
                    <i
                        key={0}
                        className="iconfont icon-add-select"
                        onClick={toAdd}
                        style={{ marginRight: "10px" }}
                    ></i>,
                    <i
                        key={1}
                        className="iconfont icon-sami-select"
                        onClick={toggleDeleted}
                    ></i>,
                ]}
                back
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
