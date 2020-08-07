import React from 'react';
import './car-right.scss';
import {connect} from "react-redux";
import {searchBrandRight} from "../../../actions/comparison";
import SelectCarRight from "./select-car-right";
import TableCarRight from "./card-car-right";
import CardCarRight from "./card-car-right";

class CompareRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            brand_left:'VinFast',
        };
        this.props.dispatch(searchBrandRight('VinFast'));
    }

    render() {
        const {data, loading, currentKind} = this.state;
        return (
            <div className="comparison-page">
                <SelectCarRight/>
                <CardCarRight/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    brand_left: state.comparison.brand_left,
    car_left: state.comparison.car_left
});
export default connect(mapStateToProps)(CompareRight);
