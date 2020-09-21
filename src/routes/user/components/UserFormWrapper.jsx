import React, { Component, createRef } from "react";
import Layout from "@/layouts/Layout";
import { withRouter } from "react-router-dom";
import UserForm from "./UserForm";
import { WhiteSpace, WingBlank, Button, Toast } from "antd-mobile";

class UserFormWrapper extends Component {
  constructor(props) {
    super(props);
    this.form = createRef();
  }
  validate = () => {
    this.form.current.validateFields(async (err, value) => {
      if (err) return;
      if (value.gender) {
        value.gender = value.gender[0];
      }
      await this.props.onSubmit(value);
    });
  };
  render() {
    const { title, isRegister } = this.props;
    return (
      <Layout title={title}>
        <UserForm ref={this.form} isRegister={isRegister} />
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={this.validate}>
            {title}
          </Button>
        </WingBlank>
      </Layout>
    );
  }
}

export default withRouter(UserFormWrapper);
