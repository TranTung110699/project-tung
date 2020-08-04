import React from 'react';
import './general-assess.scss';
import { months } from '../../constants/assess';
import { selectMonth } from '../../actions/assess/index';
import {Select, Table} from 'antd';
import Request from '../../common/network/http/Request';
import apiUrls from '../../constants/api';
import {connect} from "react-redux";
import ColumnChart from "./column-chart";
import SelectMonth from "./select-month";

class GeneralAssess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            currentMonth:'april',
        };
        this.props.dispatch(selectMonth('april'));
    }

    handleClick = (month) => {
        this.props.dispatch(selectMonth(month));
        this.getData();
    };

    // componentDidMount = () => {
    //     this.getData();
    // };

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     const { currently } = this.props;
    //
    // }

    render() {
        const {data, loading, currentKind} = this.state;
        return (
            <div className="best-sell-page">
                <SelectMonth/>
                <div className="best-sell-content">
                    <div className="short-content">
                        Tháng 4/2020 là khoảng thời gian lệnh cách ly xã hội COVID-19 bắt đầu, tất cả các hoạt động kinh doanh đều bị đình trệ, không chỉ riêng ngành ô tô. Do đó, doanh số các hãng ô tô tại Việt Nam trong tháng này đều bị sụt giảm nghiêm trọng, có hãng giảm tới 3.000 xe so với tháng trước.
                    </div>
                    <ColumnChart/>
                    <div className="short-content">
                        Theo Hiệp hội các nhà sản xuất ôtô Việt Nam (VAMA), tổng doanh số tháng 4/2020 của tất cả các thành viên chỉ đạt 10.816 xe, giảm khoảng 40% so với tháng 3/2020. Nếu trong tháng 3/2020, dẫn đầu là hãng Toyota đã bán ra 5.143 xe thì đến tháng 4/2020, thương hiệu này chỉ bán ra 2.803 xe, giảm tới 2.340 xe (tương đương mức giảm khoảng 45%). Mitsubishi trong tháng 4 bán ra 1.779 xe, giảm hơn 900 xe so với tháng trước (mức giảm tới 50%). Honda bán ra 843 xe, giảm hơn 1.100 xe (tương đương 57%). Tương tự, Hyundai cũng giảm gần 2.900 xe (tương đương 57%)…

                        Suzuki là thương hiệu bị ảnh hưởng mạnh nhất trong tháng 4/2020 chỉ với vỏn vẹn 400 xe bán ra (mức giảm lên tới 72%.

                        Có doanh số tốt nhất trong dịp này là Tập đoàn Trường Hải, do vẫn duy trì hoạt động (cắt giảm khoảng 1/3 công suất nhà máy). Cụ thể, lượng xe KIA bán ra chỉ giảm khoảng 500 chiếc, Mazda giảm khoảng 30 xe, Peugeot giảm khoảng 15 xe…

                        Tuy nhiên, có trường hợp đặc biệt là Lexus lại có doanh số tăng trưởng, khi bán ra 111 xe trong tháng 4 vừa qua, tăng 33 xe so với tháng trước.

                        Mercedes-Benz và Chevrolet tạm thời không cung cấp số liệu thống kê trong tháng 4 vừa qua. TCIEV là công ty con thuộc sở hữu của Tan Chong Motor Holdings Berhad, chuyên lắp ráp các mẫu xe Nissan tại Việt Nam.
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentKind: state.top.currentKind,
});
export default connect(mapStateToProps)(GeneralAssess);
