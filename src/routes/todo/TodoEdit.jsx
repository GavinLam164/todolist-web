import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import { find, update } from "@/api/todo";
import Layout from "@/layouts/Layout";
import TodoFormWrapper from "./components/TodoFormWrapper";

const TodoEdit = ({ match }) => {
  const id = match.params.id;
  const initForm = useCallback(async () => {
    const res = await find({
      id,
    });
    return res;
  }, []);
  const onSubmit = useCallback(async (value) => {
    await update({
      id,
      ...value,
    });
  }, []);
  return (
    <Layout title="待办事项" back>
      <TodoFormWrapper initForm={initForm} onSubmit={onSubmit} btnText="更新" />
    </Layout>
  );
};

export default withRouter(TodoEdit);
