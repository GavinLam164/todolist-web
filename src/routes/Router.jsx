import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoAdd from "./todo/TodoAdd";
import TodoList from "./todo/TodoList";
import TodoEdit from "./todo/TodoEdit";

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
