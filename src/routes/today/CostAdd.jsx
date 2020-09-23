import React, { useCallback } from "react";
import Layout from "@/layouts/Layout";
import CostFormWrapper from "./components/CostFormWrapper";
import { addCost } from "@/api/today";

export default ({ match }) => {
  const { id: record_id } = match.params;
  const onSubmit = useCallback(async (value) => {
    await addCost({
      record_id,
      ...value,
    });
  }, []);
  return (
    <Layout title="添加花费" back>
      <CostFormWrapper btnText="提交" onSubmit={onSubmit} />
    </Layout>
  );
};
