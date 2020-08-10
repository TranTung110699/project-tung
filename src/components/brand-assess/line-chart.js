import React from 'react';
import Highcharts, {map} from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {connect} from 'react-redux';
import './brand-assess.scss';
import apiUrls, {apiUrlTwo} from "../../constants/api";
import Request from "../../common/network/http/Request";

class LineChart extends React.Component {
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
        const { currentBrand } = this.props;
        if (prevProps.currentBrand !== currentBrand) {

            this.getData();
        }
    }

    getData = () => {
        this.setState({
            loading: true,
        });
        const {currentBrand} = this.props;
        return Request.get(
            apiUrls.getBrandAssess+`?brand=${currentBrand}`,
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
        const { currentBrand } = this.props;
        const options = {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Thống kê sự thay đổi doanh số trong quý đầu năm 2020 của thương hiệu: <b>'+currentBrand+'</b>'
            },
            // subtitle: {
            //     text: 'Source: WorldClimate.com'
            // },
            xAxis: {
                categories: [
                    ...data.map(item =>
                      `<b>${item.month}</b>`,
                    ),
                ]
            },
            yAxis: {
                title: {
                    text: 'Doanh số bán ra (chiếc)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true,
                }
            },
            series: [{
                name: '<b style="color: darkcyan; font-size: 16px; text-transform: uppercase">'+currentBrand+'</b>',
                data: [
                    ...data.map(item =>
                        item.number,
                    ),
                ]
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
    currentBrand: state.assess.currentBrand,
});
export default connect(mapStateToProps)(LineChart);
