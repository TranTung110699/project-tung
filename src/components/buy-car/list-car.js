import React from 'react';
import './buy-car.scss';
import { Table, Modal } from 'antd';
import {connect} from 'react-redux';
import apiUrls, {apiUrlTwo} from "../../constants/api";
import Request from "../../common/network/http/Request";
import {Card, Col, Pagination, Row} from "antd";
import {Link} from "react-router-dom";
import routes from "../../constants/routes";

class ListCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDetail: [],
            dataView: [],
            loading: true,
            index: 1,
            size: 9,
            cbid:''
        };
    }

    componentDidMount = () => {
        this.getDataCar();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { brand, car, status } = this.props;
        if (prevProps.brand !== brand || prevProps.car !== car || prevProps.status !== status) {
            this.getDataCar();
        }
    }

    getDataCar = (index = 1, size = 9) => {
        this.setState({
            loading: true,
        });
        const {brand,car,status} =this.props;
        return Request.get(
            apiUrlTwo+`/api/buycar?brand=${brand}&name=${car}&status=${status}&page=${index}&limit=${size}`,
            {},
            'Loading',
            'Success',
            'Error',
        )
            .then((dataDetail) => {
                this.setState({
                    dataDetail: dataDetail,
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({loading: false});
            })
            .finally(() => this.setState({loading: false}));
    };

    showModal = (cbid) => {
        this.setState({
            visible: true,
        });
        this.getDataView(cbid);
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
        this.getDataView('');
    };

    getDataView = () => {
        const {cbid} =this.props;
        return Request.post(
            apiUrlTwo+`/api/buycar?cbid=${cbid}`,
            {
            },
            {},
            '',
            'Success',
            'Error',
        )
            .then((dataView) => {
                this.setState({
                    dataView: dataView,
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({ loading: false });
            })
            .finally(() => this.setState({ loading: false }));
    };

    render() {
        const { dataDetail, dataView, loading } = this.state;
        const { brand, car, status, cbid } = this.props;
        console.log(this.props.brand+"/"+this.props.car+"/"+this.props.status);
        console.log(dataDetail);
        return (
            <>
                <div>
                    <Row
                        gutter={[36, 36]}
                    >
                        {dataDetail.map(item =>
                            <Col span={8}>
                                <Link onClick={() => this.showModal(item)}>
                                    <Card
                                        style={{height: 'auto', border: '1px solid grey'}}
                                        cover={<img style={{height: 250}} alt="example"
                                                    src={item.image}/>}
                                    >
                                        <div><b>{item.brand}</b></div>
                                        <div><b>{item.name}</b></div>
                                        <div>
                                            <ul>
                                                <li><b>Giá: </b><b>{item.price} (triệu VND)</b></li>
                                                <li><b>Số điện thoại: </b>{item.phone}</li>
                                                <li><b style={{color:'red'}}>Trạng thái: </b>{item.status} </li>
                                                <li><b style={{color:'green'}}>Người bán: </b>{item.seller} </li>
                                            </ul>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        )}
                    </Row>
                    <Pagination
                        style={{float: 'right', paddingBottom: '20px'}}
                        defaultCurrent={1} total={50}
                        pageSize={9}
                        onChange={(page, pageSize) => {
                            this.getDataCar(page,pageSize);
                        }}
                    />
                </div>
                <Modal
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    className="container modal-style"
                >
                    <div className="view-detail">
                        {dataView.map(q =>
                            <div style={{display:'flex'}}>
                                <div>
                                    <img style={{height: 350,width:600}} alt="example" src={q.image}/>
                                </div>
                                <div style={{padding:'15px'}} dangerouslySetInnerHTML={{
                                    __html: q.detail,
                                }}/>
                            </div>
                        )}
                    </div>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    status: state.buy.status,
    brand: state.buy.brand,
    car: state.buy.car,
});
export default connect(mapStateToProps)(ListCar);
