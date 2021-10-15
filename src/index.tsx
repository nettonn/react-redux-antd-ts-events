import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";

import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
import { ConfigProvider } from "antd";

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={locale}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
