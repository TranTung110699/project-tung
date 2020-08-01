// import React, {Component, useEffect, useState} from 'react';
// import Request from '../../common/network/http/Request';
// import apiUrls from '../../constants/api';
// import get from 'lodash/get';
// import {getTotalNewinfo} from '../../actions/newinfo';
// import {connect} from 'react-redux';
// import './style.scss';
// import {Link} from "react-router-dom";
// import {Row, Col, Card, Pagination} from "antd";
//
// class NewDetail extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             loading: true,
//         };
//     }
//
//     componentDidMount = () => {
//         this.getData();
//     };
//
//     getData = () => {
//         //const {id} = this.props.idNewInfo;
//         const {niid} = "29.14.118.216";
//         this.setState({
//             loading: true,
//         });
//         return Request.get(
//             apiUrls.getNewinfo+`?niid=29.14.118.216`,
//             {},
//             'Loading',
//             'Success',
//             'Error',
//         )
//             .then((data) => {
//                 this.setState({
//                     loading: false,
//                     data: data,
//                 });
//
//             })
//             .catch(() => {
//                 this.setState({loading: false});
//             })
//             .finally(() => this.setState({loading: false}));
//     };
//
//     render() {
//         const {data, niid} = this.state;
//         return (
//             <div style={{height: '100%', backgroundColor: 'white', marginTop:'20px'}}>
//                 <div>{niid}</div>
//                 <div>
//                     {data.map((q) => (
//                             <div>
//                                 <b style={{color: 'black', fontFamily: 'Google Sans', fontSize: '25px'}}>{q.title}</b>
//                                 <div dangerouslySetInnerHTML={{
//                                     __html: q.content,
//                                 }}/>
//                             </div>
//                         ),
//                     )
//                     }
//                 </div>
//             </div>
//         )
//             ;
//     }
// }
//
// const mapStateToProps = (state, props) => ({
//     idNewInfo: state.newinfo.idNewInfo,
// });
//
// export default connect(mapStateToProps)(NewDetail);

import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const NewDetail = () => {
    const [carInfos, setCarinfos] = useState([]);

    const {niid} = useParams();

    useEffect(() => {
        loadCarinfo();
    })

    const loadCarinfo = () => {
        axios.get(`https://5f20bd99daa42f0016664f8b.mockapi.io/api/newinfo?niid=${niid}`)
            .then(res => {
                setCarinfos(res.data);
            })
            .catch(error => console.log(error));
    }

    console.log(carInfos);
    return (
        <div style={{height: '100%', backgroundColor: 'white', marginTop: '20px'}}>
            <div>{niid}</div>
            <div>
                {carInfos.map(carInfo =>
                    <div>
                        <b style={{color: 'black', fontFamily: 'Google Sans', fontSize: '25px'}}>{carInfo.title}</b>
                        <div dangerouslySetInnerHTML={{
                            __html: carInfo.content,
                        }}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewDetail;