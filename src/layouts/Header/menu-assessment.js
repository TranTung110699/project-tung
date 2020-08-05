import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './menu.scss';
import {Menu, message} from 'antd';
import {AuditOutlined, BarChartOutlined, CarOutlined, ToolOutlined, ZoomInOutlined} from "@ant-design/icons";
import SubMenu from "antd/es/menu/SubMenu";
import Request from "../../common/network/http/Request";
import apiUrls from "../../constants/api";
import routes from "../../constants/routes";
export default function MenuAssessment (props) {

    const[brands, setBrands] = useState([]);

    useEffect(() => {
        getBrand()
    })

    //const url = 'https://5f20bd99daa42f0016664f8b.mockapi.io/api/carbrands';
    const getBrand = () => {
        // axios.get(url)
        //     .then(res => {
        //         setBrands(res.data);
        //     })
        //     .catch(error => console.log(error));
        return Request.get(
            apiUrls.getBranch,
            {},
            '',
            '',
            '',
        )
            .then((data) => {
                setBrands(data);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="menu-small">
            <div>
                <Menu className="menu-small-cover">
                    <Menu.Item className="menu-small-item">
                        <Link to={routes.generalAssess}>
                            <BarChartOutlined style={{fontSize:'25px'}}/><b>| General Assessment</b>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="menu-small-item">
                        <Link to={routes.brandAssess}>
                            <ZoomInOutlined style={{fontSize:'25px'}}/><b>| Brand Assessment</b>
                        </Link>
                    </Menu.Item>

                </Menu>
            </div>
        </div>
    );
}

// export default MenuAssessment;
