import React, { createRef } from "react";
import { createForm } from "rc-form";
import {
  List,
  InputItem,
  NavBar,
  Button,
  WingBlank,
  WhiteSpace,
  Toast,
} from "antd-mobile";
import { add } from "@/api/todo";

class TodoForm extends React.Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <List>
        <InputItem
          {...getFieldProps("todo_name", {
            rules: [{ required: true }],
          })}
          clear
        >
          标题
        </InputItem>
      </List>
    );
  }
}

const TodoFormWrapper = createForm()(TodoForm);

export default class TodoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.form = createRef();
  }

  validate = () => {
    this.form.current.validateFields(async (err, value) => {
      if (err) return;
      await add(value);
      Toast.success("提交成功", 2, () => {
        this.props.history.go(-1);
      });
    });
  };

  render() {
    return (
      <div>
        <NavBar mode="dark">待办事项</NavBar>
        <TodoFormWrapper ref={this.form} />
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={this.validate}>
            添加
          </Button>
        </WingBlank>
      </div>
    );
  }
}
