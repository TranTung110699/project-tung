import React, { Component } from 'react';
import { Button, Input, Select } from 'antd';
import './buy-car.scss';
import {
    selectStatus,
    searchBrand,
    searchCar,
} from '../../actions/buy';
import { connect } from 'react-redux';
import Request from '../../common/network/http/Request';
import apiUrls from '../../constants/api';
import {apiUrlTwo} from "../../constants/api";
import {brands} from "../../constants/assess";
import {status} from "../../constants/assess";

class SearchBuyCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataCar: [],
            loading: true,
            totalEssay: 0,
        };
        this.props.dispatch(selectStatus(''));
        this.props.dispatch(searchCar(''));
        this.props.dispatch(searchBrand(''));
    }

    componentDidMount() {
        this.getData1();
    }

    componentWillUnmount() {
        this.props.dispatch(searchBrand(brands));
        this.props.dispatch(selectStatus(status));
    }

    handleChangeBrand = (brand) => {
        this.props.dispatch(searchBrand(brand));
    };

    handleChangeStatus = (status) => {
        this.props.dispatch(selectStatus(status));
    }

    handleChangeCar = (car) => {
        this.props.dispatch(searchCar(car));
    };

    getData1 = () => {
        const { brand } = this.props;
        return Request.get(
            apiUrlTwo+`/api/buycar?brand=${brand}`,
            {},
            'Loading...',
            'Success',
            'Error',
        )
            .then((dataCar) => {
                this.setState({
                    dataCar: dataCar,
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({ loading: false });
            })
            .finally(() => this.setState({ loading: false }));
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { brand, status } = this.props;
        if (prevProps.brand !== brand) {
            this.getData1();
        }
        if (prevProps.status !== status) {
            this.getData1();
        }
    }

    render() {
        const { Option } = Select;
        const { brand, dataCar } = this.state;
        return (
            <div className="search-container" style={{display:'flex'}}>
                <div className="select-bar">
                    <div className="search-title">Hãng xe:</div>
                    <Select
                        onChange={this.handleChangeBrand}
                        style={{ width: '100%'}}
                        placeholder="Hãng xe ..."
                        optionFilterProp="children"
                        defaultActiveFirstOption="false"
                        filterOption={(input, option) =>
                            option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        }
                        defaultValue=""
                    >
                        <Option value="" key="0">
                            Tất cả các xe
                        </Option>
                        {brands.map(({ name, value }) => (
                            <Option value={value} key={value}>
                                <div className="title-search"><img style={{height:'40px',width:'60px'}} className="image-search" src= { require('../brand-assess/image/'+name+'logo.png') } /><b> | {value}</b></div>
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="select-bar">
                    <div className="search-title">Tình trạng:</div>
                    <Select
                        onChange={this.handleChangeStatus}
                        style={{ width: '100%'}}
                        placeholder="Tình trang xe"
                        optionFilterProp="children"
                        defaultActiveFirstOption="false"
                        filterOption={(input, option) =>
                            option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        }
                        defaultValue=""
                    >
                        <Option value="" key="0">
                            Tình trạng
                        </Option>
                        {status.map(({ name, value }) => (
                            <Option value={value} key={value}>
                                <div className="title-search"><b>{value}</b></div>
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="select-bar">
                    <div className="search-title">Tên xe: </div>
                    <Select
                        onChange={this.handleChangeCar}
                        showSearch
                        style={{ width: '100%'}}
                        placeholder="Tên xe ..."
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                        }
                        defaultValue=""
                    >
                        <Option value="" key="0">
                            Bạn hãy chọn xe
                        </Option>
                        {dataCar.map((item) => (
                            <Option value={item.name} key={item.name}>
                                {item.name}
                            </Option>
                        ))}
                    </Select>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    status: state.buy.status,
    brand: state.buy.brand,
    car: state.buy.car,
});
export default connect(mapStateToProps)(SearchBuyCar);
