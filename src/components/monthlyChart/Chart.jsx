import {useState, useEffect, useCallback} from 'react';
import ChartRankContent from './ChartRankContent';
import ViewMoreBtn from './ViewMoreBtn';
import {useDispatch, useSelector} from 'react-redux';
import {getCharts, transChartGender} from 'services/apiSlice';
import useWindowSize from 'hooks/useWindowSize';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';

function Chart() {
  const dispatch = useDispatch();
  const device = useWindowSize();
  const pageSize = device === 'desktop' ? 10 : 5;
  const {
    charts: {idols, nextCursor},
    chartGender,
    chartsStatus,
    chartsError,
  } = useSelector(state => state.data);
  const [gender, setGender] = useState(chartGender); // 초기 성별 'female'
  const [visibleCount, setVisibleCount] = useState(0); // 처음에는 10개만 표시

  const fetchMoreArtists = useCallback(
    (newGender = gender, totalShowCount = visibleCount) => {
      dispatch(getCharts({gender: newGender, pageSize: totalShowCount}));
    },
    [dispatch, gender, visibleCount],
  );

  // 클릭 핸들러: 성별을 변경하고 초기 데이터 설정
  const handleClick = newGender => {
    if (newGender !== gender) {
      setGender(newGender);
      setVisibleCount(pageSize);
      dispatch(transChartGender(newGender));
    }
  };

  // 더보기 버튼 클릭 시 보이는 개수를 증가
  const handleViewMore = () => {
    const totalShowCount = visibleCount + pageSize;
    setVisibleCount(totalShowCount);
    fetchMoreArtists(gender, totalShowCount);
  };

  useEffect(() => {
    setVisibleCount(pageSize);
    dispatch(getCharts({gender, pageSize: pageSize}));
  }, [gender, pageSize, dispatch]);
  // pageSize, dispatch
  return (
    <div className="entire-chart">
      <div className="chart-content">
        <div className="chart-button-container">
          <button
            type="button"
            onClick={() => handleClick('female')}
            className={`chart-title-btn chart-title-btn-text ${gender === 'female' ? 'active' : ''}`} /* 성별이 'female'일 때 active 클래스 추가 */
          >
            이달의 여자 아이돌
          </button>
          <button
            type="button"
            onClick={() => handleClick('male')}
            className={`chart-title-btn chart-title-btn-text ${gender === 'male' ? 'active' : ''}`} /* 성별이 'male'일 때 active 클래스 추가 */
          >
            이달의 남자 아이돌
          </button>
        </div>
        {chartsStatus === 'loading' && <Loading />}
        {chartsStatus === 'succeeded' && <ChartRankContent artistData={idols} />}
        {chartsStatus === 'failed' && <Error err={chartsError} handleClick={fetchMoreArtists} />}
      </div>
      {nextCursor && chartsStatus === 'succeeded' && <ViewMoreBtn onClick={handleViewMore}>더보기</ViewMoreBtn>}
    </div>
  );
}

export default Chart;
