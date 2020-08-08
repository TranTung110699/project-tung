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
                            <FireOutlined style={{fontSize:'25px'}}/><b>| Bán chạy nhất</b>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="menu-small-item">
                        <Link to={routes.topPrice}>
                            <DollarCircleOutlined style={{fontSize:'25px'}} /><b>| Về giá</b>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default MenuTop;
