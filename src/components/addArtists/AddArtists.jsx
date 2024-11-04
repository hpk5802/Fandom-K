import ProfileBadge from 'components/common/ProfileBadge';
import GradientButton from 'components/common/GradientButton';
import Pagination from 'components/donateArtist/Pagination';
import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect, useRef, useState} from 'react';
import {getIdols} from 'services/apiSlice';
import useWindowSize from 'hooks/useWindowSize';
import parseImg from 'utils/images';

function AddArtists() {
  const dispatch = useDispatch();
  const {
    idols: {list, nextCursor},
  } = useSelector(state => state.data);
  const [currentPage, setCurrentPage] = useState(0); // 슬라이싱 된 배열의 페이징을 위한 state : 초기값 0
  const device = useWindowSize();
  const endRef = useRef(null); // Infinite Scroll 구현을 위한 Ref 객체

  /**
   * 서버에 데이터가 더 있는 경우 데이터를 요청하고 redux store에 추가
   */
  const fetchMoreIdols = useCallback(() => {
    if (nextCursor) dispatch(getIdols({cursor: nextCursor, pageSize: 16}));
  }, [nextCursor, dispatch]);

  /**
   * 감시 대상이 화면에 노출되면 서버에 데이터 요청
   */
  const handleObserver = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) fetchMoreIdols();
    },
    [fetchMoreIdols],
  );

  /**
   * initial load
   */
  useEffect(() => {
    dispatch(getIdols({pageSize: 16}));
  }, [dispatch]);

  /**
   * IntersectionObserver API를 이용해 endRef 객체가 화면에 노출됨을 감지
   */
  useEffect(() => {
    if (device === 'desktop' || !endRef.current) return;

    const observer = new IntersectionObserver(handleObserver, {
      root: endRef.current.parentNode,
      threshold: 1.0,
    });

    observer.observe(endRef.current);

    return () => observer.disconnect();
  }, [handleObserver, device]);

  /**
   * 페이징 액션(Desktop) -> 터치 액션(Tablet, Mobile) 분기를 자연스럽게 하기 위해 첫 번째 데이터로 강제 이동
   */
  useEffect(() => setCurrentPage(0), [device]);

  const totalPages = Math.ceil(list.length / 16);
  const displayedIdols = device === 'desktop' ? list.slice(currentPage * 16, (currentPage + 1) * 16) : list;
  const evenIdols = displayedIdols.filter((_, index) => index % 2 === 0);
  const oddIdols = displayedIdols.filter((_, index) => index % 2 !== 0);
  return (
    <>
      <Pagination
        name="favorite-list"
        title="관심있는 아이돌을 추가해보세요."
        device={device}
        cursor={nextCursor}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        fetchMoreData={fetchMoreIdols}
      >
        <div className="add-artists-wrap">
          <div className="add-artists-content">
            {[evenIdols, oddIdols].map((idols, idx) => (
              <div key={idx} className="add-artists-list">
                {idols.map(({id, profilePicture, group, name}) => (
                  <div key={id} className="add-artists-container">
                    <ProfileBadge src={profilePicture} size="large" />
                    <div className="add-artists-text">
                      <div className="add-artists-name">{name}</div>
                      <div className="add-artists-group">{group}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {device !== 'desktop' && <div ref={endRef} className="end-point" />}
        </div>
      </Pagination>
      <GradientButton name="add-button">
        <img src={parseImg('ic_add_button.svg')} alt="추가하기" />
        추가하기
      </GradientButton>
    </>
  );
}

export default AddArtists;
