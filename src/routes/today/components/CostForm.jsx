import React from "react";
import { createForm } from "rc-form";
import { List, InputItem, DatePicker, Stepper } from "antd-mobile";

class TodoForm extends React.Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <List>
        <List.Item
          extra={
            <Stepper
              showNumber
              max={10}
              min={1}
              {...getFieldProps("cost", {
                rules: [{ required: true }],
              })}
            />
          }
        >
          花费
        </List.Item>
        <DatePicker
          mode="time"
          {...getFieldProps("start_time", {
            rules: [{ required: true }],
          })}
        >
          <List.Item arrow="horizontal">开始时间</List.Item>
        </DatePicker>
        <DatePicker
          mode="time"
          {...getFieldProps("end_time", {
            rules: [{ required: true }],
          })}
        >
          <List.Item arrow="horizontal">结束时间</List.Item>
        </DatePicker>
      </List>
    );
  }
}

export default createForm()(TodoForm);
