import {useState, useEffect} from 'react';
import ChartRankContent from './ChartRankContent';
import ViewMoreBtn from './ViewMoreBtn';
import {useDispatch, useSelector} from 'react-redux';
import {getCharts} from 'services/apiSlice';

function Chart() {
  const [gender, setGender] = useState('female'); // 초기 성별 'female'
  const [visibleCount, setVisibleCount] = useState(10); // 처음에는 10개만 표시

  const dispatch = useDispatch();
  const chartData = useSelector(state => state.data.charts);
  const visibleShowBtn = chartData.idols.length % 10 < 1;

  // 클릭 핸들러: 성별을 변경하고 초기 데이터 설정
  const handleClick = newGender => () => {
    dispatch(getCharts({gender: newGender, cursor: '', pageSize: 10}));
    setGender(newGender);
  };

  // 더보기 버튼 클릭 시 보이는 개수를 증가
  const handleViewMore = () => {
    const totalShowCount = visibleCount + 10;
    setVisibleCount(totalShowCount);
    dispatch(getCharts({gender: 'female', cursor: '', pageSize: totalShowCount}));
  };

  useEffect(() => {
    dispatch(getCharts());
  }, [dispatch]);

  return (
    <div className="chart">
      <div className="chart-title-content">
        <button
          type="button"
          onClick={handleClick('female')}
          className={`chart-title-btn chart-title-btn-text ${gender === 'female' ? 'active' : ''}`} /* 성별이 'female'일 때 active 클래스 추가 */
        >
          이달의 여자 아이돌
        </button>
        <button
          type="button"
          onClick={handleClick('male')}
          className={`chart-title-btn chart-title-btn-text ${gender === 'male' ? 'active' : ''}`} /* 성별이 'male'일 때 active 클래스 추가 */
        >
          이달의 남자 아이돌
        </button>
      </div>
      <ChartRankContent artistData={chartData.idols} />
      {visibleShowBtn && <ViewMoreBtn onClick={handleViewMore}>더보기</ViewMoreBtn>}
    </div>
  );
}

export default Chart;
