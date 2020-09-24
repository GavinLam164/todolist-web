import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoAdd from "./todo/TodoAdd";
import TodoList from "./todo/TodoList";
import TodoEdit from "./todo/TodoEdit";
import UserRegister from "./user/UserRegister";
import UserLogin from "./user/UserLogin";
import TodayList from "./today/TodayList";
import TodayDetail from "./today/TodayDetail";
import CostAdd from "./today/CostAdd";
import Home from './home/Home';

const routes = [
    {
        path: "/todo/list",
        component: TodoList,
    },
    {
        path: "/todo/add",
        component: TodoAdd,
    },
    {
        path: "/todo/edit/:id",
        component: TodoEdit,
    },
    {
        path: "/today/list",
        component: TodayList,
    },
    {
        path: "/today/detail/:id",
        component: TodayDetail,
    },
    {
        path: "/today/costAdd/:record_id/:todo_id",
        component: CostAdd,
    },
    {
        path: "/user/register",
        component: UserRegister,
    },
    {
        path: "/user/login",
        component: UserLogin,
    },
    {
        path: '/home/home',
        component: Home
    }
];

export default () => {
    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Switch>
        </Router>
    );
};
