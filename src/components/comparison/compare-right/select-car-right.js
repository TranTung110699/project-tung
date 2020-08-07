import React, { Component } from 'react';
import { Button, Input, Select } from 'antd';
import './car-right.scss';
import {
    searchBrandRight,
    searchCarRight,
} from '../../../actions/comparison';
import { connect } from 'react-redux';
import Request from '../../../common/network/http/Request';
import {apiUrlTwo} from "../../../constants/api";
import {brands} from "../../../constants/assess";

class SelectCarRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand_right: 'VinFast',
            loading: true,
            dataCar: [],
        };
        this.props.dispatch(searchBrandRight(''));
        this.props.dispatch(searchCarRight(''));
    }

    componentDidMount() {
        this.getData1();
    }

    componentWillUnmount() {
        this.props.dispatch(searchBrandRight(brands));
    }

    handleChangeBrand = (brand_left) => {
        this.props.dispatch(searchBrandRight(brand_left));
    };

    handleChangeCar = (car_left) => {
        this.props.dispatch(searchCarRight(car_left));
    };

    getData1 = () => {
        const { brand_right } = this.props;
        return Request.get(
            apiUrlTwo+`/api/comparison?brand=${brand_right}`,
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
        const { brand_right } = this.props;
        if (prevProps.brand_right !== brand_right) {
            this.getData1();
        }
    }

    render() {
        const { Option } = Select;
        const { brand_right, dataCar } = this.state;
        return (
            <div className="search-container">
                <div><b>Chọn xe bạn muốn so sánh(2)</b></div>
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
    brand_right: state.comparison.brand_right,
    car_right: state.comparison.car_right,
});
export default connect(mapStateToProps)(SelectCarRight);
