import React from 'react';
import { Select } from 'antd';
import './general-assess.scss';
import { months } from '../../constants/assess';
import { selectMonth } from '../../actions/assess/index';
import { connect } from 'react-redux';

const { Option } = Select;

class SelectMonth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: 'april',
        };
    }

    componentWillUnmount() {
        this.props.dispatch(selectMonth(months));
    }

    handleClick = (month) => {
        this.props.dispatch(selectMonth(month));
    };

    render() {
        const { currentMonth } = this.state;
        return (
            <div align="center" className="best-sell-title">
                <b>Doanh số bán ra của 8 hãng xe phổ biến tại Việt Nam: </b>
                <Select
                    className="type"
                    defaultValue={currentMonth}
                    onChange={this.handleClick}
                    size="large"
                    style={{ width: 200 }}
                >
                    {months.map(({ name, value }) => (
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
    currentMonth: state.assess.currentMonth,
});

export default connect(mapStateToProps)(SelectMonth);
