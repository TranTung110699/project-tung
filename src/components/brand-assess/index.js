import React from 'react';
import './brand-assess.scss';
import { months } from '../../constants/assess';
import {selectBrand, selectMonth} from '../../actions/assess/index';
import {Select, Table} from 'antd';
import Request from '../../common/network/http/Request';
import apiUrls from '../../constants/api';
import {connect} from "react-redux";
import SelectBrand from "./select-brand";
import LineChart from "./line-chart";

class BrandAssess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            currentBrand:'VinFast',
        };
        this.props.dispatch(selectBrand('VinFast'));
    }

    handleClick = (month) => {
        this.props.dispatch(selectBrand(month));
        this.getData();
    };

    render() {
        const {data, loading, currentKind} = this.state;
        return (
            <div className="best-sell-page">
                <SelectBrand/>
                <div className="best-sell-content">
                    <div className="short-content">
                        Tháng 4/2020 là khoảng thời gian lệnh cách ly xã hội COVID-19 bắt đầu, tất cả các hoạt động kinh doanh đều bị đình trệ, không chỉ riêng ngành ô tô. Do đó, doanh số các hãng ô tô tại Việt Nam trong tháng này đều bị sụt giảm nghiêm trọng, có hãng giảm tới 3.000 xe so với tháng trước.
                    </div>
                    <LineChart/>
                    <div className="short-content">
                        Trong ba tháng đầu năm 2020, Vingroup và các doanh nghiệp Việt Nam phải đối mặt với nhiều khó khăn, thách thức khi toàn bộ nền kinh tế bị ảnh hưởng bởi dịch Covid-19. Trong tình hình dịch bệnh diễn biến phức tạp, Tập đoàn luôn tuân thủ theo những chủ trương và chỉ đạo kịp thời của Nhà nước để phòng chống dịch bệnh lây lan, đặt yếu tố sức khỏe của khách hàng và cán bộ nhân viên lên hàng đầu, nhưng bên cạnh đó cũng chuẩn bị những phương án kinh doanh để thích nghi trong hoàn cảnh mới
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentBrand: state.assess.currentBrand,
});
export default connect(mapStateToProps)(BrandAssess);
