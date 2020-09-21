import React from "react";
import { render } from "react-dom";
import App from "./App";

const FastClick = require("fastclick");
FastClick.attach(document.body);

render(<App />, document.getElementById("app"));
