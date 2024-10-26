import ChartRankContent from "./ChartRankContent";

function Chart({ female, male, handleClick }) {

  return (
    <div className="chart">
      <div className="chart-title-content">
        <button
          type="button"
          value={female}
          onClick={
            handleClick
          } /*디폴트 값이자 클릭시 /{teamName}/charts/{gender} id.totalVotes 많은 순으로 보여주기*/
          className="chart-title-btn chart-title-btn-text"
        >
          이달의 여자 아이돌
        </button>
        <button
          type="button"
          value={male}
          onClick={
            handleClick
          } /*/클릭시 /{teamName}/charts/{gender} id.totalVotes 많은 순으로 보여주기*/
          className="chart-title-btn chart-title-btn-text"
        >
          이달의 남자 아이돌
        </button>
      </div>
      <ChartRankContent />
    </div>
  );
}

export default Chart;
