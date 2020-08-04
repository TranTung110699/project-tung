import React from 'react';
import './top-price.scss';
import { kinds } from '../../constants/top';
import { selectKind } from '../../actions/top/index';
import {Select, Table} from 'antd';
import routes from "../../constants/routes";
import Request from '../../common/network/http/Request';
import apiUrls from '../../constants/api';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {Option} from "antd/es/mentions";
import SelectTop from "./select-top";
import TableTop from "./table-top";

class TopPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            currentKind:'topexpen',
        };
        this.props.dispatch(selectKind('topexpen'));
    }

    handleClick = (kind) => {
        this.props.dispatch(selectKind(kind));
        this.getData();
    };

    // componentDidMount = () => {
    //     this.getData();
    // };

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     const { currently } = this.props;
    //
    // }

    getData = () => {
    const {currentKind} =this.props;
        this.setState({
            loading: true,
        });
        return Request.get(
            apiUrls.getTop + `?kind=${currentKind}`,
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
        const {data, loading, currentKind} = this.state;
        return (
            <div className="best-sell-page">
                <SelectTop/>
                <div className="best-sell-content">
                    <div className="short-content">
                        Top 10 siêu xe đắt nhất mọi thời đại có sự góp mặt của những thương hiệu đình đám như Bugatti, Rolls-Royce hay Mercedes-Maybach...
                        Tuy nhiên do tỷ giá tiền tệ nên rất khó để xác định giá thực tế của một chiếc ô tô. Tuy nhiên, đến thời điểm hiện tại có những chiếc xe được coi là có giá trị "thực" rẻ nhất thế giới.
                    </div>
                    <TableTop/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentKind: state.top.currentKind,
});
export default connect(mapStateToProps)(TopPrice);
