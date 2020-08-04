// import React, { Component } from 'react';
// import Request from '../../common/network/http/Request';
// import './top-price.scss';
// import apiUrl from '../../constants/api';
// import get from 'lodash/get';
// import { connect } from 'react-redux';
// import moment from 'moment';
// import Table from 'antd/lib/table';
// import {Link} from "react-router-dom";
// import routes from "../../constants/routes";
//
// const columns = [
//     {
//         title: 'Mẫu xe',
//         dataIndex: 'name',
//         key: 'name',
//         render: (data, item) => (
//             <div style={{marginTop: '20px', marginLeft: '50px'}}><b>|{item.name}</b></div>
//         ),
//     },
//     {
//         title: 'Image',
//         dataIndex: 'image',
//         key: 'image',
//         render: (data, item) => (
//             <div>
//                 <img style={{width: '100px', height: '60px'}} src={item.image}/>
//             </div>
//         ),
//     },
//     {
//         title: 'Giá bán niêm yết(USD)',
//         dataIndex: 'price',
//         key: 'price',
//     },
//     {
//         key: 'cid',
//         render: (data, item) => (
//             <Link to={`${routes.bestSeller}${item.cid}`}>Chi tiết</Link>
//         ),
//     },
// ];
//
// class TableTop extends Component {
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
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//     }
//
//     getData() {
//         this.setState({ loading: true });
//         const { currentKind } = this.props;
//         return Request.get(
//             apiUrl.getTop + `?kind=${currentKind}`,
//             {
//             },
//             'Loading...',
//             'Success',
//             'Error',
//         )
//             .then((data) => {
//                 this.setState({
//                     data:data,
//                     loading: false,
//                 });
//             })
//             .catch(() => {
//                 this.setState({
//                     loading: false,
//                 });
//             })
//             .finally(() => {
//                 this.setState({
//                     loading: false,
//                 });
//             });
//     }
//
//     render() {
//         const { data, loading } = this.state;
//         return (
//             <div className="div-table">
//                 <Table
//                     columns={columns}
//                     loading={loading}
//                     dataSource={data}
//                     bordered
//                     rowKey="cid"
//                     pagination={false}
//                 />
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = (state) => ({
//     currentKind: state.top.currentKind,
// });
// export default connect(mapStateToProps)(TableTop);

import React, { Component } from 'react';
import Request from '../../common/network/http/Request';
import './top-price.scss';
import apiUrls from "../../constants/api";
import get from 'lodash/get';
import { connect } from 'react-redux';
import moment from 'moment';
import Table from 'antd/lib/table';
import {Link} from "react-router-dom";
import routes from "../../constants/routes";

const columns = [
    {
        title: 'Mẫu xe',
        dataIndex: 'name',
        key: 'name',
        render: (data, item) => (
            <div style={{paddingLeft: '50px'}}><b>|{item.name}</b></div>
        ),
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (data, item) => (
            <div>
                <img style={{width: '100px', height: '60px'}} src={item.image}/>
            </div>
        ),
    },
    {
        title: 'Giá bán niêm yết(USD)',
        dataIndex: 'price',
        key: 'price',
    },
    {
        key: 'cid',
        render: (data, item) => (
            <Link to={`${routes.bestSeller}${item.cid}`}>Chi tiết</Link>
        ),
    },
];

class TableTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
        };
    }

    componentDidMount = () => {
        this.getData();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { currentKind } = this.props;
        if (prevProps.currentKind !== currentKind) {

            this.getData();
        }
    }

    getData = () => {
        this.setState({
            loading: true,
        });
        const {currentKind} =this.props;
        return Request.get(
            apiUrls.getTop + `?kind=${currentKind}`,
            {},
            'Loading',
            'Success',
            'Error',
        )
            .then((data) => {
                this.setState({
                    data: data,
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({loading: false});
            })
            .finally(() => this.setState({loading: false}));
    };

    render() {
        const { data, loading } = this.state;
        return (
            <div className="div-table">
                <Table
                    columns={columns}
                    loading={loading}
                    dataSource={data}
                    bordered
                    rowKey="cid"
                    pagination={false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentKind: state.top.currentKind,
});
export default connect(mapStateToProps)(TableTop);
