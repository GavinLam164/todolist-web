import React, { Component } from "react";
import { find, update } from "@/api/todo";
import Layout from "@/layouts/Layout";
import TodoFormWrapper from "./components/TodoFormWrapper";

export default class TodoEdit extends Component {
  getId = () => {
    return this.props.match.params.id;
  };

  initForm = async () => {
    const res = await find({
      id: this.getId(),
    });
    return res;
  };

  onSubmit = async (value) => {
    await update({
      id: this.getId(),
      ...value,
    });
  };

  render() {
    return (
      <Layout title="待办事项">
        <TodoFormWrapper initForm={this.initForm} onSubmit={this.onSubmit} />
      </Layout>
    );
  }
}
