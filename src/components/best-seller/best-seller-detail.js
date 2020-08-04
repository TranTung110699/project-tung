import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Request from "../../common/network/http/Request";
import apiUrls from "../../constants/api";

const BestSellerDetail = () => {
    const [bestSells, setBestSell] = useState([]);

    const {cid} = useParams();

    useEffect(() => {
        loadBestSellDetail();
    },[]);

    const loadBestSellDetail = () => {
        return Request.get(
            apiUrls.getTop+`?cid=${cid}`,
            {},
            'Loading',
            'Success',
            'Error',
        )
            .then((data) => {
                setBestSell(data);
            })
            .catch(error => console.log(error));
    }

    console.log(bestSells);
    return (
        <div style={{height: '100%', backgroundColor: 'white', marginTop: '20px',marginLeft:'-300px'}}>
            <div>{cid}</div>
            <div>
                {bestSells.map(bestSell =>
                    <div>
                        <b style={{color: 'black', fontFamily: 'Google Sans', fontSize: '25px', paddingLeft:'20px'}}>{bestSell.name}</b>
                        <div style={{padding:'15px'}} dangerouslySetInnerHTML={{
                            __html: bestSell.content,
                        }}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BestSellerDetail;