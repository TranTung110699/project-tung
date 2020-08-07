import React from 'react';
import {Menu, Dropdown, Button} from "antd";
import { Link } from 'react-router-dom';
import logocar from './image/logocar.jpg';
import './head.scss';
import routes from '../../constants/routes';
import {Route, withRouter} from 'react-router';
// import Footer from "../Footer";
import MenuAssessment from "./menu-assessment";
import MenuTop from "./menu-top";

class Head extends React.Component{
    render() {

        return (
            <div className="head">
                <div className="logo">
                    <Link to={"/"}>
                        <img className="logo-img" src={logocar} alt={''} />
                    </Link>
                </div>
                <Menu className="menu-header" mode="horizontal">
                    <Menu.Item key="1">
                        <Link to={routes.newinfo}>
                            <b>New Information</b>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Dropdown placement={"bottomCenter"} overlay={<MenuTop/>}>
                            <a>
                                <b>Top 10</b>
                            </a>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Dropdown placement={"bottomCenter"} overlay={<MenuAssessment/>}>
                            <a>
                                <b>Assessment</b>
                            </a>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to={routes.getComparison}>
                            <b className="title-menu">Comparison</b>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to={routes.newinfo}>
                            <b className="title-menu">About us</b>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to={routes.newinfo}>
                            <b className="title-menu" style={{color:'orangered'}}>BUY CAR</b>
                        </Link>
                    </Menu.Item>
                    <div className="login-button">
                        <Link to={routes.footer}>
                            Login
                        </Link>
                    </div>
                </Menu>
            </div>
        );
    }
};

export default withRouter(Head);