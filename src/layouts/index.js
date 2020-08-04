import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import { renderRoutes } from 'react-router-config';
import routes from '../constants/routes';
import isEmpty from 'lodash/isEmpty';
import Head from "./Header";
import Footer from "./Footer/Footer";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class LayoutAll extends React.Component {
    render() {
        const { route } = this.props;

        return (
            <Layout>
                <Header className="header" style={{position:'fixed',zIndex:'100'}}>
                    <Head/>
                </Header>
                <Layout>
                    <Sider width={300} className="side-left">
                        {renderRoutes(route.routesSideLeft)}
                    </Sider>
                    <Layout>
                        <Content
                            className="content-main"
                            style={{
                                minHeight: 300,
                            }}
                        >
                            {renderRoutes(route.routes)}
                        </Content>
                    </Layout>
                    <Sider width={300} className="side-right">
                        {renderRoutes(route.routesSideRight)}
                    </Sider>
                </Layout>
                <Footer/>
            </Layout>
        );
    }
};

export default LayoutAll;