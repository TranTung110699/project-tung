import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import Request from "../../common/network/http/Request";
import apiUrls from "../../constants/api";

export default function SideRight (props){
    const[carmarkets, setCarmarkets] = useState([]);

    useEffect(() => {
        getCarmarket()
    })

    const getCarmarket = () => {
        return Request.get(
            apiUrls.getCarNews,
            {},
            '',
            '',
            '',
        )
            .then((data) => {
                setCarmarkets(data);
            })
            .catch(error => console.log(error));
    }
    return (
        <div style={{backgroundColor:'white',marginTop:'25px'}}>
            <div align="center">
                <b className="title-right">Car Market News</b>
            </div>
            <div>
                {carmarkets.map(carmarket =>
                    <div className="card-market">
                        <a target="_blank" href={carmarket.link} style={{display:'flex'}}>
                            <img className="marketcar-image" src= { require('./images/'+carmarket.image) } alt={''}/>
                            <div className="marketcar-title">| {carmarket.title}</div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
