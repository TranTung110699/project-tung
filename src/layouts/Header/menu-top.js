import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import {Menu, message} from 'antd';
import {CheckSquareOutlined, DollarCircleOutlined, FireOutlined} from "@ant-design/icons";
import routes from '../../constants/routes';

class MenuTop extends React.Component {
    render() {

        return (
            <div className="menu-small">
                <Menu className="menu-small-cover">
                    <Menu.Item className="menu-small-item">
                        <Link to={routes.bestSeller}>
                            <FireOutlined style={{fontSize:'25px'}}/><b>| Best Seller</b>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="menu-small-item">
                        <Link to={""}>
                            <DollarCircleOutlined style={{fontSize:'25px'}} /><b>| Price</b>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="menu-small-item">
                        <Link to={""}>
                            <CheckSquareOutlined style={{fontSize:'25px'}}/><b>| Quality</b>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default MenuTop;
