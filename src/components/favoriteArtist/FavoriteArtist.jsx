import ProfileBadge from 'components/common/ProfileBadge';
import GradientButton from 'components/common/GradientButton';
import Pagination from 'components/donateArtist/Pagination';
import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect, useRef, useState} from 'react';
import {getIdols} from 'services/apiSlice';
import useWindowSize from 'hooks/useWindowSize';
import ProfileDelete from 'components/common/ProfileDelete';
import parseImg from 'utils/images';

function FavoriteArtist({containerName, title}) {
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

  // 아티스트 선택
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = id => {
    setSelectedOptions(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(selectedId => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleProfileDelete = value => {
    console.log(value);
  };
  return (
    <>
      <Pagination
        name={containerName}
        title={title}
        device={device}
        cursor={nextCursor}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        fetchMoreData={fetchMoreIdols}
      >
        <div>
          <div className="favorite-wrap">
            {[evenIdols, oddIdols].map((idols, idx) => (
              <div key={idx} className="artist-list">
                {idols.map(({id, profilePicture, group, name}, index) => (
                  <div key={`${id}-${index}`} className="artist-item">
                    <button className="badge" onClick={() => handleChange(id)}>
                      {containerName.includes('add') ? (
                        <ProfileBadge src={profilePicture} size="large" selected={selectedOptions.includes(id)} />
                      ) : (
                        <ProfileDelete src={profilePicture} size="medium" onClick={handleProfileDelete} />
                      )}
                    </button>
                    <div className="artist-info">
                      <div className="name">{name}</div>
                      <div className="group">{group}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {device !== 'desktop' && <div ref={endRef} className="end-point" />}
        </div>
      </Pagination>
      {containerName.includes('add') && (
        <GradientButton name="add-button">
          <img src={parseImg('ic_add_button.svg')} alt="추가하기"></img>추가하기
        </GradientButton>
      )}
    </>
  );
}

export default FavoriteArtist;
