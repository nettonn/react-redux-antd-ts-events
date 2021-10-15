import React, { FC } from "react";
import { Layout } from "antd";
import PublicAppRouter from "../Routers/PublicAppRouter";

const PublicLayout: FC = () => {
  return (
    <Layout>
      <Layout.Content style={{ padding: "0 15px" }}>
        <PublicAppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default PublicLayout;
