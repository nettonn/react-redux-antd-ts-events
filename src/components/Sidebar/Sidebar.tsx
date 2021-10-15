import React, { FC, useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { CalendarOutlined, LogoutOutlined } from "@ant-design/icons";
import "./Sidebar.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import { useHistory, Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar: FC = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions(AuthActionCreators);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const {
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  return (
    <Sider className="app-sidebar" breakpoint="lg" collapsedWidth="0">
      <div className="logo">DL CMS</div>
      <Menu theme="dark" mode="inline" selectedKeys={selectedKeys}>
        <Menu.Item key="/" icon={<CalendarOutlined />}>
          <Link to="/">Календарь</Link>
        </Menu.Item>
        <Menu.Item key="/calendar2" icon={<CalendarOutlined />}>
          <Link to="/calendar2">Календарь 2</Link>
        </Menu.Item>
        <Menu.Item
          key="logout"
          onClick={() => logout()}
          icon={<LogoutOutlined />}
        >
          Выйти ({user.username})
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
