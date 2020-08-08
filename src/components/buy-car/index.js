import React from 'react';
import './buy-car.scss';
import {connect} from "react-redux";
import SearchBuyCar from "./search-buy-car";
import ListCar from "./list-car";

class BuyCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,

        };
    }

    // handleClick = (month) => {
    //     this.props.dispatch(searchBrandLeft(month));
    //     this.getData();
    // };

    render() {
        return (
            <div style={{margin:'20px -300px'}}>
                <div align="center"><b style={{color:'darkcyan',fontSize:'35px'}}>Mua xe</b></div>
                <div align="center">
                    <SearchBuyCar/>
                </div>
                <div style={{marginTop:'25px'}}><ListCar/></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

});
export default connect(mapStateToProps)(BuyCar);
