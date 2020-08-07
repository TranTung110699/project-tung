import React, { Component } from 'react';
import { Button, Input, Select } from 'antd';
import './car-left.scss';
import {
    searchBrandLeft,
    searchCarLeft,
} from '../../../actions/comparison';
import { connect } from 'react-redux';
import Request from '../../../common/network/http/Request';
import {apiUrlTwo} from "../../../constants/api";
import {brands} from "../../../constants/assess";

class SelectCarLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand_left: 'VinFast',
            loading: true,
            dataCar: [],
        };
        this.props.dispatch(searchBrandLeft(''));
        this.props.dispatch(searchCarLeft(''));
    }

    componentDidMount() {
        this.getData1();
    }

    componentWillUnmount() {
        this.props.dispatch(searchBrandLeft(brands));
    }

    handleChangeBrand = (brand_left) => {
        this.props.dispatch(searchBrandLeft(brand_left));
    };

    handleChangeCar = (car_left) => {
        this.props.dispatch(searchCarLeft(car_left));
    };

    getData1 = () => {
        const { brand_left } = this.props;
        return Request.get(
            apiUrlTwo+`/api/comparison?brand=${brand_left}`,
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
        const { brand_left } = this.props;
        if (prevProps.brand_left !== brand_left) {
            this.getData1();
        }
    }

    render() {
        const { Option } = Select;
        const { brand_left, dataCar } = this.state;
        return (
            <div className="search-container">
                <div><b>Chọn xe bạn muốn so sánh(1)</b></div>
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
                            Bạn hãy chọn hãng
                        </Option>
                        {brands.map(({ name, value }) => (
                            <Option value={value} key={value}>
                                <div className="title-search"><img style={{height:'40px',width:'60px'}} className="image-search" src= { require('./image/'+name+'logo.png') } /><b> | {value}</b></div>
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
    brand_left: state.comparison.brand_left,
    car_left: state.comparison.car_left,
});
export default connect(mapStateToProps)(SelectCarLeft);
