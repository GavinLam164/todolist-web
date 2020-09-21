import React, { Component, Fragment } from "react";
import { createForm } from "rc-form";
import { List, InputItem, Picker } from "antd-mobile";

const genderOptions = [
  {
    label: "男",
    value: 1,
  },
  {
    label: "女",
    value: 2,
  },
];

class UserForm extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    const { isRegister } = this.props;
    console.log(isRegister);
    return (
      <List>
        {isRegister && (
          <Fragment>
            <InputItem
              {...getFieldProps("nick_name", {
                rules: [{ required: true }],
              })}
              clear
            >
              昵称
            </InputItem>
            <Picker
              extra="请选择"
              data={genderOptions}
              title="性别"
              cols={1}
              {...getFieldProps("gender", {
                rules: [{ required: true }],
              })}
            >
              <List.Item arrow="horizontal">性别</List.Item>
            </Picker>
          </Fragment>
        )}
        <InputItem
          {...getFieldProps("phone_number", {
            rules: [{ required: true }],
          })}
          clear
        >
          手机号
        </InputItem>
        <InputItem
          {...getFieldProps("password", {
            rules: [{ required: true }],
          })}
          clear
        >
          密码
        </InputItem>
      </List>
    );
  }
}

export default createForm()(UserForm);
