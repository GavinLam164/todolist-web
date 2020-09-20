const webpack = require("webpack");
const express = require("express");
const WebpackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");
const history = require("connect-history-api-fallback");
const proxy = require("express-http-proxy");
const config = require("../config/webpack.config");
const compiler = webpack(config);

const app = express();

app.use("/api", proxy("localhost:3000"));
app.use(history());

app.use(
  WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(WebpackHotMiddleware(compiler));

app.listen(3001, (err) => {
  if (err) {
    throw err;
  }
  console.log("success");
});
