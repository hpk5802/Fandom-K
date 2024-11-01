import {useState, useEffect} from 'react';
import ChartRankContent from './ChartRankContent';
import {getIdolRank} from './chartapi';
import ViewMoreBtn from './ViewMoreBtn';

function Chart() {
  const [gender, setGender] = useState('female'); // 초기 성별 'female'
  const [artistData, setArtistData] = useState([]);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10); // 처음에는 10개만 표시
  const [loading, setLoading] = useState(false); // 로딩 상태

  // 성별에 따라 데이터를 불러오는 함수
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 로딩 시작
      try {
        console.log(visibleCount);
        const data = await getIdolRank({gender, pagesize: visibleCount});
        if (Array.isArray(data)) {
          const sortedData = data.sort((a, b) => b.totalVotes - a.totalVotes); // 득표순 정렬
          console.log(sortedData);
          setArtistData(sortedData);
        } else {
          throw new Error('데이터 형식이 올바르지 않습니다.');
        }
      } catch (error) {
        console.error('데이터 로딩 오류:', error);
        setError('아티스트 정보를 불러오지 못했습니다.');
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchData();
  }, [gender, visibleCount]);

  // 클릭 핸들러: 성별을 변경하고 초기 데이터 설정
  const handleClick = newGender => {
    setGender(newGender);
  };

  // 더보기 버튼 클릭 시 보이는 개수를 증가
  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 10); // 10개씩 추가
  };

  if (error) return {error};
  if (loading) return '아티스트 정보를 불러오고 있습니다. 조금만 기다려 주세요!';

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
        <ChartRankContent artistData={artistData.slice(0, visibleCount)} />
      </div>
      <ViewMoreBtn onClick={handleViewMore}>더보기</ViewMoreBtn>
    </div>
  );
}

export default Chart;
