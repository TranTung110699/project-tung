import React from 'react';
import './best-seller.scss';
import { Table } from 'antd';
import routes from "../../constants/routes";
import Request from '../../common/network/http/Request';
import apiUrls from '../../constants/api';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const columns = [
    {
        title: 'Xếp hạng',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Mẫu xe',
        dataIndex: 'name',
        key: 'name',
        render: (data, item) => (
            <div style={{display:'flex'}}>
                <div>
                    <img style={{width:'100px',height:'60px'}} src={item.image}/>
                </div>
                <div style={{marginTop:'20px',marginLeft:'50px'}}><b>|{item.name}</b></div>
            </div>
        ),
    },
    {
        title: 'Giá bán niêm yết(triệu VND)',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Doanh soo',
        dataIndex: 'number',
        key: 'number',
    },
    {
        key: 'cid',
        render: (data, item) => (
            <Link to={`${routes.bestSeller}${item.cid}`}>Chi tiết</Link>
        ),
    },
];

class BestSeller extends React.Component {
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
        const { input, oid } = this.props;
        if (prevProps.input !== input || prevProps.oid !== oid) {
            this.setState({
                index: 1,
                size: 10,
            });
            this.getData();
        }
    }

    getData = () => {
        this.setState({
            loading: true,
        });
        return Request.get(
            apiUrls.getTop+`?kind=bestsell`,
            {
            },
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
                this.setState({ loading: false });
            })
            .finally(() => this.setState({ loading: false }));
    };

    render() {
        const { data, loading } = this.state;
        return (
            <div className="best-sell-page">
                <div align="center" className="best-sell-title">
                    <b>Top 10 mẫu xe bán chạy nhất</b>
                </div>
                <div className="best-sell-content">
                    <div className="short-content">Thị trường ô tô ghi nhận những cuộc đua tranh giảm giá giữa các doanh nghiệp, cùng với tác động từ chính sách giảm 50% lệ phí trước bạ đối với ô tô sản xuất, lắp ráp trong nước... tạo nên nhiều biến động về doanh số và thứ hạng trong danh sách 10 xe bán chạy nhất Việt Nam.

                        Theo số liệu thống kê từ báo cáo bán hàng của các nhà sản xuất ô tô Việt Nam (VAMA), TC Motor và VinFast, doanh số bán hàng toàn thị trường đạt 24.002 xe, tăng 26% so với tháng trước đó và giảm 13% so với cùng kỳ năm ngoái.</div>
                    <div className="div-table">
                        <Table
                            columns={columns}
                            dataSource={data}
                            loading={loading}
                            borderedm
                            rowKey="cid"
                            pagination={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
});
export default connect(mapStateToProps)(BestSeller);
