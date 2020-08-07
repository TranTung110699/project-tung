import React from 'react';
import Highcharts, {map} from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {connect} from 'react-redux';
import apiUrls, {apiUrlTwo} from "../../constants/api";
import Request from "../../common/network/http/Request";

class CompareChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLeft: [],
            dataRight: [],
            loading: true,
        };
    }

    componentDidMount = () => {
        this.getDataLeft();
        this.getDataRight();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { car_left, car_right } = this.props;
        if (prevProps.car_left !== car_left) {

            this.getDataLeft();
        }
        if (prevProps.car_right !== car_right) {

            this.getDataRight();
        }
    }

    getDataLeft = () => {
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
            .then((dataLeft) => {
                this.setState({
                    dataLeft: dataLeft,
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({loading: false});
            })
            .finally(() => this.setState({loading: false}));
    };

    getDataRight = () => {
        this.setState({
            loading: true,
        });
        const {car_right} =this.props;
        return Request.get(
            apiUrlTwo+`/api/comparison?name=${car_right}`,
            {},
            'Loading',
            'Success',
            'Error',
        )
            .then((dataRight) => {
                this.setState({
                    dataRight: dataRight,
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({loading: false});
            })
            .finally(() => this.setState({loading: false}));
    };

    render() {
        const { dataLeft, dataRight, loading } = this.state;
        const { car_left, car_right } = this.props;
        // console.log(car_left);
        // console.log(dataLeft);
        // console.log(car_right);
        // console.log(dataRight);
        if (car_left===""||car_right==="") {
            return <div style={{ textAlign: 'center' }}></div>;
        } else {
            const options = {
                chart: {
                    polar: true,
                    type: 'line'
                },

                accessibility: {
                    description: '',
                },

                title: {
                    text: '<b>'+car_left+' </b> <b style="color:darkcyan;text-decoration: #364d79"> vs </b> <b> '+car_right+'</b>',
                    x: 0
                },

                pane: {
                    size: '80%',
                },

                xAxis: {
                    categories: ['Giá xe(triệu VND)', 'Công suất(mã lực)', 'Momen xoắn(Nm)', 'Tốc độ cực đại(km/h)',
                        'Tăng tốc từ 0-100(km/h)(/100s)', 'Dung tích bình nhiên liệu(/100L)'],
                    tickmarkPlacement: 'on',
                    lineWidth: 0
                },

                yAxis: {
                    gridLineInterpolation: 'polygon',
                    lineWidth: 0,
                    min: 0
                },

                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
                },

                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },

                series: [{
                    name: '<b style="color: #61dafb">'+car_left+'</b>',
                    data: [
                        ...dataLeft.map(itemLeft =>
                            itemLeft.price
                        ),
                        ...dataLeft.map(itemLeft =>
                            itemLeft.wattage
                        ),
                        ...dataLeft.map(itemLeft =>
                            itemLeft.momen
                        ),
                        ...dataLeft.map(itemLeft =>
                            itemLeft.maxSpeed
                        ),
                        ...dataLeft.map(itemLeft =>
                            itemLeft.acceleration
                        ),
                        ...dataLeft.map(itemLeft =>
                            itemLeft.fuel
                        )
                    ],
                    pointPlacement: 'on'
                }, {
                    name: '<b>'+car_right+'</b>',
                    data: [
                        ...dataRight.map(itemRight =>
                            itemRight.price
                        ),
                        ...dataRight.map(itemRight =>
                            itemRight.wattage
                        ),
                        ...dataRight.map(itemRight =>
                            itemRight.momen
                        ),
                        ...dataRight.map(itemRight =>
                            itemRight.maxSpeed
                        ),
                        ...dataRight.map(itemRight =>
                            itemRight.acceleration
                        ),
                        ...dataRight.map(itemRight =>
                            itemRight.fuel
                        )
                    ],
                    pointPlacement: 'on'
                }],

                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                align: 'center',
                                verticalAlign: 'bottom',
                                layout: 'horizontal'
                            },
                            pane: {
                                size: '70%'
                            }
                        }
                    }]
                }

            };

            return (
                <div align="center" className="div-chart">
                    <HighchartsReact highcharts={Highcharts} options={options}/>
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => ({
    brand_right: state.comparison.brand_right,
    car_right: state.comparison.car_right,
    brand_left: state.comparison.brand_left,
    car_left: state.comparison.car_left,
});
export default connect(mapStateToProps)(CompareChart);
