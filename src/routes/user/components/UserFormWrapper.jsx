import React, { Component } from "react";
import Layout from "@/layouts/Layout";
import UserForm from "./UserForm";
import { WhiteSpace, WingBlank, Button } from "antd-mobile";

export default class UserFormWrapper extends Component {
  validate = () => {};
  render() {
    return (
      <Layout title="登录">
        <UserForm />
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={this.validate}>
            登录
          </Button>
        </WingBlank>
      </Layout>
    );
  }
}
