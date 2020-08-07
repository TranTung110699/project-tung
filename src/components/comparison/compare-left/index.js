import React from 'react';
import './car-left.scss';
import {connect} from "react-redux";
import {searchBrandLeft} from "../../../actions/comparison";
import SelectCarLeft from "./select-car-left";
import TableCarLeft from "./card-car-left";
import CardCarLeft from "./card-car-left";

class CompareLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            brand_left:'VinFast',
        };
        this.props.dispatch(searchBrandLeft('VinFast'));
    }

    // handleClick = (month) => {
    //     this.props.dispatch(searchBrandLeft(month));
    //     this.getData();
    // };

    render() {
        const {data, loading, currentKind} = this.state;
        return (
            <div className="comparison-page">
                <SelectCarLeft/>
                <CardCarLeft/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    brand_left: state.comparison.brand_left,
    car_left: state.comparison.car_left
});
export default connect(mapStateToProps)(CompareLeft);
