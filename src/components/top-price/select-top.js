import React from 'react';
import { Select } from 'antd';
import './top-price.scss';
import { kinds } from '../../constants/top';
import apiUrls from '../../constants/api';
import Request from '../../common/network/http/Request';
import { selectKind } from '../../actions/top/index';
import { connect } from 'react-redux';
// import GetTotalExam from './getTotalExam';
// import DateTimeSelected from './dateTimeSelected';

const { Option } = Select;

class SelectTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKind: 'topexpen',
        };
        // this.props.dispatch(selectKind('topexpen'));
    }


    componentWillUnmount() {
        this.props.dispatch(selectKind(kinds));
    }


    handleClick = (kind) => {
        this.props.dispatch(selectKind(kind));
    };

    render() {
        const { currentKind } = this.state;
        return (
            <div align="center" className="best-sell-title">
                <b>Top 10 mẫu xe: </b>
                <Select
                    className="type"
                    defaultValue={currentKind}
                    onChange={this.handleClick}
                    size="large"
                    style={{ width: 300 }}
                >
                    {kinds.map(({ name, value }) => (
                        <Option value={value} key={value}>
                            <div style={{color:'darkcyan'}}>{name}</div>
                        </Option>
                    ))}
                </Select>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentKind: state.top.currentKind,
});

export default connect(mapStateToProps)(SelectTop);
