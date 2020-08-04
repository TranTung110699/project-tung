import React, {Component, useEffect, useState} from 'react';
import Request from '../../common/network/http/Request';
import apiUrls from '../../constants/api';
import get from 'lodash/get';
import {getTotalNewinfo} from '../../actions/newinfo';
import {connect} from 'react-redux';
import './style.scss';
import {Link} from "react-router-dom";
import {Row, Col, Card, Pagination} from "antd";
import routes from "../../constants/routes";

class NewInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            index: 1,
            size: 9,
        };
        this.props.dispatch(getTotalNewinfo(21));
    }

    componentDidMount = () => {
        this.getData();
    };

    getData = (index = 1, size = 9) => {
        this.props.dispatch(getTotalNewinfo(21));
        this.setState({
            loading: true,
        });
        return Request.get(
            apiUrls.getNewInfo + `?page=${index}&limit=${size}`,
            {},
            'Loading',
            'Success',
            'Error',
        )
            .then((data) => {
                this.setState({
                    loading: false,
                    data: data,
                });
                this.props.dispatch(getTotalNewinfo(this.state.total));
            })
            .catch(() => {
                this.setState({loading: false});
            })
            .finally(() => this.setState({loading: false}));
    };

    render() {
        const {data, loading, total} = this.state;

        console.log(this.state.data);
        return (
            <div style={{height: '100%'}}>
                <div align="center" style={{color: 'darkcyan', fontFamily: 'Google Sans', fontSize: '25px'}}>
                    <b>New Information</b>
                </div>
                <div align="center" style={{height: '100%', padding: '20px 20px', backgroundColor: '#fff'}}>
                    <Row
                        gutter={[24, 24]}
                    >
                        {data.map(item =>
                            <Col span={8}>
                                <Link to={`${routes.getNewDetail}${item.niid}`}>
                                    <Card
                                        hoverable
                                        style={{height: 300, border: '1px solid grey'}}
                                        cover={<img style={{height: 200}} alt="example"
                                                    src={require("./images/" + item.image)}/>}
                                    >
                                        <b>{item.title}</b>
                                    </Card>
                                </Link>
                            </Col>
                        )}
                    </Row>
                    <Pagination
                        style={{float: 'right', paddingBottom: '20px'}}
                        defaultCurrent={1} total={21}
                        pageSize={9}
                        onChange={(page, pageSize) => {
                            this.getData(page,pageSize);
                        }}
                    />
                </div>
            </div>
        )
            ;
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(NewInfo);
