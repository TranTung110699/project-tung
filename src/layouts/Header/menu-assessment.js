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
// import vinfastlogo from "./image/vinfastlogo.png";
// import huyndailogo from "./image/huyndailogo.png";
// import fordlogo from "./image/fordlogo.png";
// import toyotalogo from "./image/toyotalogo.png";
// import mitsubishilogo from "./image/mitsubishilogo.png";
// import mazdalogo from "./image/mazdalogo.png";
// import hondalogo from "./image/hondalogo.png";
// import kialogo from "./image/kialogo.png";

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
                    <SubMenu className="sub-menu" icon={<ZoomInOutlined style={{fontSize:'25px'}}/>} title={<b>| Brand Assessment</b>}>
                        {brands.map(brand =>
                            <Menu.Item className="sub-menu-item" >
                                <Link to={""}><img className="logo-brand" src= { require('./image/' + brand.image +'.png') } alt={''}/> | <b>{brand.name}</b></Link>
                            </Menu.Item>
                        )}
                        {/*<Menu.Item className="sub-menu-item" >*/}
                        {/*    <Link to={""}><img className="logo-brand" src= {vinfastlogo} alt={''}/>| <b>VinFast</b></Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item className="sub-menu-item" >*/}
                        {/*    <Link to={""}><img className="logo-brand" src= {huyndailogo} alt={''}/>| <b>Huyndai</b></Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item className="sub-menu-item" >*/}
                        {/*    <Link to={""}><img className="logo-brand" src= {fordlogo} alt={''}/>| <b>Ford</b></Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item className="sub-menu-item" >*/}
                        {/*    <Link to={""}><img className="logo-brand" src= {toyotalogo} alt={''}/>| <b>Toyota</b></Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item className="sub-menu-item" >*/}
                        {/*    <Link to={""}><img className="logo-brand" src= {mitsubishilogo} alt={''}/>| <b>Mitsubishi</b></Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item className="sub-menu-item" >*/}
                        {/*    <Link to={""}><img className="logo-brand" src= {mazdalogo} alt={''}/>| <b>Mazda</b></Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item className="sub-menu-item" >*/}
                        {/*    <Link to={""}><img className="logo-brand" src= {hondalogo} alt={''}/>| <b>Honda</b></Link>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item className="sub-menu-item" >*/}
                        {/*    <Link to={""}><img className="logo-brand" src= {kialogo} alt={''}/>| <b>Kia</b></Link>*/}
                        {/*</Menu.Item>*/}

                    </SubMenu>

                </Menu>
            </div>
        </div>
    );
}

// export default MenuAssessment;
