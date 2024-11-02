import GradientButton from 'components/common/GradientButton';
import parseImg from 'utils/images.js';
import Chart from './Chart';

function MonthlyChart({onClick}) {
  return (
    <div className="monthly-chart-container">
      <div className="monthly-chart">
        <div className="chart-header">
          <div className="chart-header-title">이달의 차트</div>
          <GradientButton onClick={onClick} name="monthly-chart-gradient-btn" /*클릭시 투표하기 모달창이 나타남*/>
            <img src={parseImg('ic_chart.svg')} alt="차트아이콘" />
            <div>투표하러 가기</div>
          </GradientButton>
        </div>
        <Chart />
      </div>
    </div>
  );
}

export default MonthlyChart;
