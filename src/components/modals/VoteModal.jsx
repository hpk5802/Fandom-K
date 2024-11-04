import React, {useEffect, useRef, useState} from 'react';
import GradientButton from 'components/common/GradientButton';
import ProfileBadge from 'components/common/ProfileBadge';
import formatWithCommas from 'utils/formatWithCommas';
import {useDispatch, useSelector} from 'react-redux';
import {getVoteIdols, resetVoteIdols} from 'services/apiSlice';

const VoteModal = ({onClose}) => {
  const voteList = [
    {id: 1, artistName: '뉴진스 민지', voteCount: 204000},
    {id: 2, artistName: '르세라핌 카즈하', voteCount: 150214},
    {id: 3, artistName: '르세라핌 채원', voteCount: 110214},
  ];

  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);
  const idollist = useSelector(state => state.data.voteIdols);
  const nextCursor = idollist.nextCursor;
  const [selectedOption, setSelectedOption] = useState(voteList[0].id);

  const handleChange = e => {
    setSelectedOption(Number(e.target.value));
  };

  const handleCharge = () => {
    alert(`${selectedOption}번에 투표하셨습니다.`);
    dispatch(resetVoteIdols);
    onClose();
  };

  const handleScroll = () => {
    const {scrollTop, scrollHeight, clientHeight} = scrollContainerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 4) {
      dispatch(getVoteIdols({pageSize: 6, cursor: nextCursor}));
    }
  };

  useEffect(() => {
    dispatch(getVoteIdols({pageSize: 6}));
  }, [dispatch]);

  return (
    <div className="modal-content vote-modal">
      <div className="vote-list" ref={scrollContainerRef} onScroll={handleScroll}>
        {idollist.list.map(idol => (
          <label key={idol.id} className="custom-radio">
            <div className="vote-item">
              <ProfileBadge src={idol.profilePicture} selected={selectedOption === idol.id} />
              <div className="vote-num">{idol.id}</div>
              <div className="vote-info">
                <p className="name">{idol.artistName}</p>
                <p className="count">{formatWithCommas(idol.voteCount)}표</p>
              </div>
            </div>
            <input type="radio" key={idol.id} value={idol.id} checked={selectedOption === idol.id} onChange={handleChange} />
            <span className="radio-check"></span>
          </label>
        ))}
      </div>
      <div className="modal-bottom">
        <GradientButton handleClick={handleCharge}>투표하기</GradientButton>
        <div className="desc">
          투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
        </div>
      </div>
    </div>
  );
};

export default VoteModal;
