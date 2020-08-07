import React from 'react';
import './car-left.scss';
import {connect} from 'react-redux';
import apiUrls, {apiUrlTwo} from "../../../constants/api";
import Request from "../../../common/network/http/Request";
import {Card, Col} from "antd";

class CardCarLeft extends React.Component {
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
        const { brand_left, car_left } = this.props;
        // if (prevState.brand_left === brand_left) {
        //     this.getDataCar();
        // }
        if (prevProps.car_left !== car_left) {
            this.getDataCar();
        }
    }

    getDataCar = () => {
        this.setState({
            loading: true,
        });
        const {brand_left,car_left} =this.props;
        return Request.get(
            apiUrlTwo+`/api/comparison?name=${car_left}`,
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
        const { brand_left, car_left } = this.props;
        console.log(this.props.brand_left+"/"+this.props.car_left);
        console.log(dataDetail);
        return (
            <>
                {car_left != "" ? (
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
    brand_left: state.comparison.brand_left,
    car_left: state.comparison.car_left,
});
export default connect(mapStateToProps)(CardCarLeft);
