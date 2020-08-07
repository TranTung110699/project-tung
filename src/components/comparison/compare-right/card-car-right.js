import React from 'react';
import './car-right.scss';
import {connect} from 'react-redux';
import apiUrls, {apiUrlTwo} from "../../../constants/api";
import Request from "../../../common/network/http/Request";
import {Card, Col} from "antd";

class CardCarRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDetail: [],
            loading: true,
        };
    }

    componentDidMount = () => {
        this.getDataCar();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { brand_right, car_right } = this.props;
        // if (prevState.brand_left === brand_left) {
        //     this.getDataCar();
        // }
        if (prevProps.car_right !== car_right) {
            this.getDataCar();
        }
    }

    getDataCar = () => {
        this.setState({
            loading: true,
        });
        const {brand_right,car_right} =this.props;
        return Request.get(
            apiUrlTwo+`/api/comparison?name=${car_right}`,
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

    render() {
        const { dataDetail, loading } = this.state;
        const { brand_right, car_right } = this.props;
        console.log(this.props.brand_right+"/"+this.props.car_right);
        console.log(dataDetail);
        return (
            <>
                {car_right != "" ? (
                    <div style={{marginTop:'10px'}}>
                        {dataDetail.map(item =>
                            <Card
                                style={{height: 'auto', border: '1px solid grey'}}
                                cover={<img style={{height: 150}} alt="example"
                                            src={item.image}/>}
                            >
                                <b>{item.name}</b>
                                <div>
                                    <ul>
                                        <li><b>Giá: </b><b>{item.price} (triệu VND)</b></li>
                                        <li><b>Tổng quan: </b>{item.detail} (mm)</li>
                                        <li><b>Trọng lượng: </b>{item.weight} (kg)</li>
                                        <li><b>Công suất: </b>{item.wattage} (mã lực)</li>
                                        <li><b>Momen xoắn: </b>{item.momen} (Nm)</li>
                                        <li><b>Tốc độ cực đại: </b>{item.maxSpeed} (km/h)</li>
                                        <li><b>Tăng tốc từ 0-100(km/h): </b>{item.acceleration}/100 (s)</li>
                                        <li><b>Dung tích bình nhiên liệu: </b>{item.fuel}/100 (L)</li>
                                    </ul>
                                </div>
                            </Card>
                        )}
                    </div>
                ) : null }
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    brand_right: state.comparison.brand_right,
    car_right: state.comparison.car_right,
});
export default connect(mapStateToProps)(CardCarRight);
