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

    // componentDidMount() {
    //     this.getData();
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     const { currentKind } = this.props;
    //     if (prevProps.currentKind !== currentKind) {
    //         this.getData();
    //     }
    // }

    componentWillUnmount() {
        this.props.dispatch(selectKind(kinds));
    }

    // getData = () => {
    //     this.setState({ loading: true });
    //     const {currentKind} =this.props;
    //     return Request.get(
    //         apiUrls.getTop+`?kind=${currentKind}`,
    //         {
    //         },
    //         '',
    //         'Success',
    //         'Error',
    //     )
    //         .then((data) => {
    //             this.setState({
    //                 data:data,
    //                 currentKind: currentKind,
    //                 loading: false,
    //             });
    //         })
    //         .catch(() => {
    //             this.setState({
    //                 loading: false,
    //             });
    //         })
    //         .finally(() => {
    //             this.setState({
    //                 loading: false,
    //             });
    //         });
    // };

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
                            <b>{name}</b>
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
