import React, { useCallback } from "react";
import UserFormWrapper from "./components/UserFormWrapper";
import { useHistory } from "react-router-dom";
import { Toast } from "antd-mobile";
import { register } from "@/api/user";

export default () => {
  const history = useHistory();
  const onSubmit = useCallback(async (value) => {
    await register(value);
    Toast.success("注册成功", 2, () => {
      history.push("/user/login");
    });
  }, []);
  return <UserFormWrapper onSubmit={onSubmit} title="注册" isRegister />;
};
