import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Request from "../../common/network/http/Request";
import apiUrls from "../../constants/api";

const TopPriceDetail = () => {
    const [topPrices, setTopPrice] = useState([]);

    const {cid} = useParams();

    useEffect(() => {
        loadTopPriceDetail();
    },[]);

    const loadTopPriceDetail = () => {
        return Request.get(
            apiUrls.getTop+`?cid=${cid}`,
            {},
            'Loading',
            'Success',
            'Error',
        )
            .then((data) => {
                setTopPrice(data);
            })
            .catch(error => console.log(error));
    }

    console.log(topPrices);
    return (
        <div style={{height: '100%', backgroundColor: 'white', marginTop: '20px',marginLeft:'-300px'}}>
            <div>{cid}</div>
            <div>
                {topPrices.map(topPrice =>
                    <div>
                        <b style={{color: 'black', fontFamily: 'Google Sans', fontSize: '25px', paddingLeft:'20px'}}>{topPrice.name}</b>
                        <div style={{padding:'15px'}} dangerouslySetInnerHTML={{
                            __html: topPrice.content,
                        }}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopPriceDetail;