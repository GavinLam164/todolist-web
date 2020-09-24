import React, { useCallback } from "react";
import UserFormWrapper from "./components/UserFormWrapper";
import { useHistory } from "react-router-dom";
import { Toast } from "antd-mobile";
import { login } from "@/api/user";

export default () => {
    const history = useHistory();
    const onSubmit = useCallback(async (value) => {
        await login(value);
        Toast.success("登录成功", 2, () => {
            history.push("/home/home");
        });
    }, []);
    return <UserFormWrapper onSubmit={onSubmit} title="登录" />;
};
