import React from 'react';
import { Select } from 'antd';
import './brand-assess.scss';
import { brands } from '../../constants/assess';
import { selectBrand } from '../../actions/assess/index';
import { connect } from 'react-redux';

const { Option } = Select;

class SelectBrand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBrand: 'VinFast',
        };
    }

    componentWillUnmount() {
        this.props.dispatch(selectBrand(brands));
    }

    handleClick = (brand) => {
        this.props.dispatch(selectBrand(brand));
    };

    render() {
        const { currentBrand } = this.state;
        return (
            <div align="center" className="best-sell-title">
                <b>Thống kê sự thay đổi doanh số trong quý đầu năm 2020 của thương hiệu: </b>
                <Select
                    className="type"
                    defaultValue={currentBrand}
                    onChange={this.handleClick}
                    size="large"
                    style={{ width: 200 }}
                >
                    {brands.map(({ name, value }) => (
                        <Option value={value} key={value}>
                            <div><img className="logo-brand" src= { require('./image/'+name+'logo.png') } /><b> | {value}</b></div>
                        </Option>
                    ))}
                </Select>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentBrand: state.assess.currentBrand,
});

export default connect(mapStateToProps)(SelectBrand);
