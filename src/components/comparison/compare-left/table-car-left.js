import React, { Component } from 'react';
import Request from '../../../common/network/http/Request';
import './car-left.scss';
import get from 'lodash/get';
import { connect } from 'react-redux';
import moment from 'moment';
import Table from 'antd/lib/table';
import {apiUrlTwo} from "../../../constants/api";

const columns = [
    {
        title: 'Mẫu xe',
        dataIndex: 'name',
        key: 'name',
        render: (data, item) => (
            <div><b>{item.name}</b></div>
        ),
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
    },
    {
        title: 'Giá bán niêm yết(triệu VND)',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Chi tiết tổng quan',
        dataIndex: 'detail',
        key: 'detail',
    },
    {
        title: 'Trọng lượng',
        dataIndex: 'weight',
        key: 'weight',
    },
    {
        title: 'Công suất(mã lực)',
        dataIndex: 'wattage',
        key: 'wattage',
    },
    {
        title: 'Momen xoắn(Nm)',
        dataIndex: 'momen',
        key: 'momen',
    },
    {
        title: 'Tốc độ lớn nhất(km/h)',
        dataIndex: 'maxSpeed',
        key: 'maxSpeed',
    },
    {
        title: 'Tăng tốc từ 0-100km/h(/100s)',
        dataIndex: 'acceleration',
        key: 'acceleration',
    },
    {
        title: 'Dung tích nhiên liệu(/100L)',
        dataIndex: 'fuel',
        key: 'fuel',
    },
];

class TableCarLeft extends Component {
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
        const { brand_left, car_left } = this.props;

        if (prevProps.car_left !== car_left) {
            this.getData();
        }
    }

    getData = () => {
        this.setState({
            loading: true,
        });
        const {car_left} =this.props;
        return Request.get(
            apiUrlTwo+`/api/comparison?name=${car_left}`,
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
        const { brand_left, car_left } = this.props;
        return (
            <>
                {car_left != "" ? (
                    <div align="center" className="div-table-car">
                        <Table
                            columns={columns}
                            loading={loading}
                            dataSource={data}
                            bordered
                            rowKey="id"
                            pagination={false}
                            size="small"
                        />
                    </div>
                ) :(
                    <div style={{ textAlign: 'center' }}>Bạn vui lòng chọn xe cần so sánh(1)</div>
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    brand_left: state.comparison.brand_left,
    car_left: state.comparison.car_left,
});
export default connect(mapStateToProps)(TableCarLeft);
