import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import {Menu, message} from 'antd';
import {AuditOutlined, CarOutlined, ToolOutlined} from "@ant-design/icons";

class MenuVideo extends React.Component {
    render() {

        return (
            <div className="menu-small">
                    <Menu className="menu-small-cover">
                        <Menu.Item className="menu-small-item">
                            <Link to={""}>
                                <CarOutlined style={{fontSize:'25px'}}/><b>| Review Car</b>
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="menu-small-item">
                            <Link to={""}>
                                <ToolOutlined style={{fontSize:'25px'}}/><b>| Repair Technique</b>
                            </Link>
                        </Menu.Item>
                        <Menu.Item className="menu-small-item">
                            <Link to={""}>
                                <AuditOutlined style={{fontSize:'25px'}} /><b>| Driving Skills</b>
                            </Link>
                        </Menu.Item>
                    </Menu>
            </div>
        );
    }
}

export default MenuVideo;
