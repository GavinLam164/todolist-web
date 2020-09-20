import React, { Component } from "react";
import { add } from "@/api/todo";
import Layout from "@/layouts/Layout";
import TodoFormWrapper from "./components/TodoFormWrapper";

export default class TodoEdit extends Component {
  onSubmit = async (value) => {
    await add(value);
  };

  render() {
    return (
      <Layout title="待办事项">
        <TodoFormWrapper onSubmit={this.onSubmit} />
      </Layout>
    );
  }
}
