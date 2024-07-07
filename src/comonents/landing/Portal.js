import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content , Footer} = Layout;



const Portal = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [current, setCurrent] = useState('1');
  const navigate = useNavigate();
  const keyToRouteMapping = {
    a:'/portal/profile',
    b:'/portal/update',
    c:'/'
  }

  const onMenuClick = (e) => {
    setCurrent(e.key);
    console.log('key, keyToRouteMapping',e.key,keyToRouteMapping[current]);
    navigate(keyToRouteMapping[e.key]);
  };
  return (
    <Layout hasSider>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{
          overflow: 'auto',
          height: '100vh',
          left: 0,
          top: 0,
          bottom: 0,
        }}>
        <div className="demo-logo-vertical" />
        <Menu
          onClick={onMenuClick}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'a',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: 'b',
              icon: <VideoCameraOutlined />,
              label: 'Update',
            },
            {
              key: 'c',
              icon: <UploadOutlined />,
              label: 'Nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          /> Welcome to Portal
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Portal;