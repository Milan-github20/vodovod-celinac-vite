import React, { useState, useEffect } from "react";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { sideMeniPostavka } from "../../konstante/konstante";
import Logo from "../../assets/254.jpg";

const { Header, Sider, Content } = Layout;

const HeaderSide = ({ ContentComponent }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const savedSelectedKeys = localStorage.getItem("selectedKeys");
    const savedOpenKeys = localStorage.getItem("openKeys");
    if (savedSelectedKeys) {
      setSelectedKeys(JSON.parse(savedSelectedKeys));
    }
    if (savedOpenKeys) {
      setOpenKeys(JSON.parse(savedOpenKeys));
    }
  }, []);

  useEffect(() => {
    if (selectedKeys.length > 0) {
      localStorage.setItem("selectedKeys", JSON.stringify(selectedKeys));
    }
    if (openKeys.length > 0) {
      localStorage.setItem("openKeys", JSON.stringify(openKeys));
    }
  }, [selectedKeys, openKeys]);

  const findItemAndParent = (items, path) => {
    for (const item of items) {
      if (item.key === path) {
        return { item, parent: null };
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.key === path) {
            return { item: child, parent: item };
          }
        }
      }
    }
    return { item: null, parent: null };
  };

  useEffect(() => {
    const currentPath = location.pathname;
    console.log("Current path:", currentPath); // Dodano za debug
    const { item, parent } = findItemAndParent(sideMeniPostavka, currentPath);
    console.log("Found item:", item); // Dodano za debug
    console.log("Found parent:", parent);

    if (item) {
      setSelectedKeys([currentPath]);
      if (parent) {
        setOpenKeys([parent.key]);
      } else {
        setOpenKeys([]);
      }
    }
  }, [location]);

  const ponistiVrijednost = () => {
    setSelectedKeys([]);
    setOpenKeys([]);
    localStorage.removeItem("selectedKeys");
    localStorage.removeItem("openKeys");
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        style={{ overflowX: "auto" }}
        collapsible
        collapsed={collapsed}
      >
        <div style={{ color: "#fff" }} className={`${styles.logo}`}>
          <NavLink to={"/"} className={styles.logo} onClick={ponistiVrijednost}>
            <img src={Logo} className={styles.icon} alt="Logo" />
            <span
              className={collapsed ? `${styles.ugasen}` : `${styles.upaljen}`}
            >
              Vodovod Celinac
            </span>
          </NavLink>
        </div>
        <div style={{ color: "#fff" }} className={`${styles.current_user}`}>
          <UserOutlined />
          <span style={collapsed ? { display: "none" } : { display: "block" }}>
            Milan Jagodic
          </span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onSelect={({ key }) => setSelectedKeys([key])}
          onOpenChange={(keys) => setOpenKeys(keys)}
          items={sideMeniPostavka}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className={`${styles.top_left_side}`}>
            <Button
              type="text"
              icon={
                collapsed ? (
                  <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
                ) : (
                  <MenuFoldOutlined style={{ fontSize: "20px" }} />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </div>
          <div className={styles.top_side}>
            <h1>VODOVOD CELINAC</h1>
          </div>

          <div className={`${styles.top_right_side}`}>
            <Button
              type="text"
              danger
              icon={<LogoutOutlined />}
              //   onClick={logoutHandler}
              style={{
                width: 48,
                height: 64,
                fontSize: "16px",
              }}
            />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {ContentComponent}
        </Content>
      </Layout>
    </Layout>
  );
};

export default HeaderSide;
