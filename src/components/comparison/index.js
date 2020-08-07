import React from 'react';
import {connect} from "react-redux";
import CompareChart from "./compare-chart";
import TableCarLeft from "./compare-left/table-car-left";
import TableCarRight from "./compare-right/table-car-right";

class Comparison extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLeft: [],
            dataRight: [],
            loading: true,

        };

    }

    render() {
        const {dataLeft,dataRight, loading} = this.state;
        return (
            <div style={{marginTop:'30px'}}>
                <div>
                    <CompareChart/>
                </div>
                <TableCarLeft/>
                <TableCarRight/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    brand_right: state.comparison.brand_right,
    car_right: state.comparison.car_right,
    brand_left: state.comparison.brand_left,
    car_left: state.comparison.car_left,
});
export default connect(mapStateToProps)(Comparison);