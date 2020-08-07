import React from 'react';
import Highcharts, {map} from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {connect} from 'react-redux';
import './general-assess.scss';
import apiUrls, {apiUrlTwo} from "../../constants/api";
import Request from "../../common/network/http/Request";

class ColumnChart extends React.Component {
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
        const { currentMonth } = this.props;
        if (prevProps.currentMonth !== currentMonth) {

            this.getData();
        }
    }

    getData = () => {
        this.setState({
            loading: true,
        });
        const {currentMonth} =this.props;
        return Request.get(
            apiUrlTwo+`/api/assessment?month=${currentMonth}`,
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
        const { currentMonth } = this.props;
        const options = {
            chart: {
                type: 'column',
            },
            title: {
                text: '<b style="color: darkcyan;font-size: 20px;text-transform: uppercase">'+currentMonth+'</b>',
            },
            subtitle: {
                text: 'Doanh số bán ra của 8 hãng xe phổ biến tại Việt Nam(Source: <a href="https://news.oto-hui.com/thong-ke-doanh-so-cac-hang-o-to-tai-viet-nam-trong-thang-42020-sau-thoi-gian-cach-ly-covid-19/">OTO-HUI</a>)'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: 345,
                    style: {
                        fontSize: '15px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Doanh số bán ra (chiếc)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Doanh số bán ra: <b>{point.y:.f} chiếc</b>'
            },
            series: [{
                name: 'Doanh số',
                data:[
                    ...data.map(item =>
                        [`<b style="color: darkcyan">${item.brand}</b>`,item.number],
                    ),
                ],
                dataLabels: {
                    enabled: true,
                    rotation: 360,
                    color: 'black',
                    align: 'right',
                    format: '{point.y:.0f}', // one decimal
                    x: 15,
                    y: 0, // 10 pixels down from the top
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Verdana, sans-serif',
                    }
                },
            }]
        };
        console.log('options', options)

        return (
            <div align="center" className="div-chart">
                <HighchartsReact highcharts={Highcharts} options={options}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentMonth: state.assess.currentMonth,
});
export default connect(mapStateToProps)(ColumnChart);
