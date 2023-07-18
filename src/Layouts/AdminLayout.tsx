import React, { useState } from 'react';
import {
    DashboardOutlined,
    HomeOutlined,
    PoweroffOutlined,
    UnorderedListOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,

): MenuItem {
    return {
        key,
        icon,
        label,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem('Home', '', < HomeOutlined />),
    getItem('Dashboard', 'dashboard', <DashboardOutlined />),
    getItem('Category', '/admin/categories ', <UnorderedListOutlined />),
    getItem('Product List', '/admin/products', <UnorderedListOutlined />),
    getItem('User List', '/admin/users', <UnorderedListOutlined />),
    getItem('Profile', '5', <UserOutlined />),
    getItem('SignOut', '6', <PoweroffOutlined />),

];
type Props = {}

const AdminLayoutPage = (props: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navige = useNavigate()


    return (
        <div>

            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }}><h2 className='font-bold text-white text-2xl pl-4'>Admin</h2></div>
                    <Menu theme="dark" mode="inline" items={items} onClick={(items) => navige(`${items.key}`)} />
                </Sider>
                <Layout className="site-layout">
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>


                        </Breadcrumb>
                        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
                </Layout>
            </Layout>

        </div>
    )
}

export default AdminLayoutPage