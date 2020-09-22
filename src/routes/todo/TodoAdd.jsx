import React, { useCallback } from "react";
import { add } from "@/api/todo";
import Layout from "@/layouts/Layout";
import TodoFormWrapper from "./components/TodoFormWrapper";

export default () => {
  const onSubmit = useCallback(async (value) => {
    await add({
      ...value,
    });
  }, []);
  return (
    <Layout title="待办事项" back>
      <TodoFormWrapper onSubmit={onSubmit} btnText="提交" />
    </Layout>
  );
};
