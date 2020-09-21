import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoAdd from "./todo/TodoAdd";
import TodoList from "./todo/TodoList";
import TodoEdit from "./todo/TodoEdit";
import UserRegister from "./user/UserRegister";
import UserLogin from "./user/UserLogin";

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
    path: "/user/register",
    component: UserRegister,
  },
  {
    path: "/user/login",
    component: UserLogin,
  },
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
