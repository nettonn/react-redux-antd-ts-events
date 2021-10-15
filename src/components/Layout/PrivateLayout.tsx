import React, { FC } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Layout } from "antd";
import PrivateAppRouter from "../Routers/PrivateAppRouter";
import "./PrivateLayout.css";

const PrivateLayout: FC = () => {
  return (
    <Layout className="app-private-layout">
      <Sidebar />
      <Layout className="app-content-layout">
        <Layout.Content style={{ padding: "0 15px" }}>
          <PrivateAppRouter />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
