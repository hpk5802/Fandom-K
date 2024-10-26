import Chart from "./Chart";
import parseImg from "utils/images.js";
import GradientButton from "components/common/GradientButton";
import ViewMoreBtn from "./ViewMoreBtn";

function MonthlyChart({ onClick }) {
  return (
    <div className="monthly-cart-container">
    <div className="monthly-chart">
      <div className="chart-header">
        <div className="chart-header-title">이달의 차트</div>
        <GradientButton onClick={onClick} name="monthly-chart-gradient-btn" /*클릭시 투표하기 모달창이 나타남*/>
          <img src={parseImg("ic_chart.svg")} alt="차트아이콘" />
          <div className="voted-btn-text">지금 투표하세요!</div>
        </GradientButton>
      </div>
      <Chart />
      <ViewMoreBtn>더보기</ViewMoreBtn>
    </div>
    </div>
  );
}

export default MonthlyChart;
