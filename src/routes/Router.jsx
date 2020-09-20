import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const routes = [
  {
    path: "/todo/list",
    component: TodoList,
  },
  {
    path: "/todo/add",
    component: TodoAdd,
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
