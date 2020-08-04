import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Request from "../../common/network/http/Request";
import apiUrls from "../../constants/api";

const NewDetail = () => {
    const [carInfos, setCarinfos] = useState([]);

    const {niid} = useParams();

    useEffect(() => {
        loadCarinfo();
    },[]);

    const loadCarinfo = () => {
        return Request.get(
            apiUrls.getNewInfo + `?niid=${niid}`,
            {},
            'Loading',
            'Success',
            'Error',
        )
            .then((data) => {
                setCarinfos(data);
            })
            .catch(error => console.log(error));
    }

    // const url = 'https://5f20bd99daa42f0016664f8b.mockapi.io/'+apiUrls.getNewinfo + `?niid=${niid}`;
    // console.log(url);
    // const loadCarinfo = () => {
    //     axios.get(url)
    //         .then(res => {
    //             setCarinfos(res.data);
    //         })
    //         .catch(error => console.log(error));
    // }

    console.log(carInfos);
    return (
        <div style={{height: '100%', backgroundColor: 'white', marginTop: '20px'}}>
            <div>{niid}</div>
            <div>
                {carInfos.map(carInfo =>
                    <div>
                        <b style={{color: 'black', fontFamily: 'Google Sans', fontSize: '25px', paddingLeft:'20px'}}>{carInfo.title}</b>
                        <div style={{padding:'15px'}} dangerouslySetInnerHTML={{
                            __html: carInfo.content,
                        }}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewDetail;